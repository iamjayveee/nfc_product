import { sql } from "./db";
import type { Feedback } from "./feedback";

export type HubAction = "review" | "menu" | "wifi";
export type TapAction = "open" | HubAction;

export const HUB_ACTIONS: readonly HubAction[] = ["review", "menu", "wifi"];

export type Cafe = {
  id: string;
  slug: string;
  name: string;
  googleReviewUrl: string;
  menuImageUrl: string | null;
  wifiSsid: string | null;
  wifiPassword: string | null;
};

export async function findArtifactTarget(
  code: string,
): Promise<{ cafeId: string; slug: string } | null> {
  const rows = await sql()<{ cafe_id: string; slug: string }[]>`
    select a.cafe_id, c.slug
    from artifacts a join cafes c on c.id = a.cafe_id
    where a.code = ${code}`;
  return rows[0] ? { cafeId: rows[0].cafe_id, slug: rows[0].slug } : null;
}

export async function getCafeBySlug(slug: string): Promise<Cafe | null> {
  const rows = await sql()<Cafe[]>`
    select id, slug, name,
      google_review_url as "googleReviewUrl",
      menu_image_url as "menuImageUrl",
      wifi_ssid as "wifiSsid",
      wifi_password as "wifiPassword"
    from cafes where slug = ${slug}`;
  return rows[0] ?? null;
}

// The artifact is kept only if it currently maps to this cafe, so a stale or
// forged ?a= cannot attribute taps to another cafe's artifact.
export async function recordTap(cafeId: string, artifactCode: string | null, action: TapAction) {
  await sql()`
    insert into taps (artifact_code, cafe_id, action)
    values (
      (select code from artifacts where code = ${artifactCode} and cafe_id = ${cafeId}),
      ${cafeId}, ${action})`;
}

export async function insertFeedback(cafeId: string, artifactCode: string | null, feedback: Feedback) {
  await sql()`
    insert into feedback (cafe_id, artifact_code, rating, message, contact)
    values (
      ${cafeId},
      (select code from artifacts where code = ${artifactCode} and cafe_id = ${cafeId}),
      ${feedback.rating}, ${feedback.message}, ${feedback.contact})`;
}

// Cafes whose dashboard may be shown without login. Real cafes return null
// here until owner login exists, so their private feedback is never public.
export async function getDemoCafe(slug: string): Promise<{ id: string; name: string } | null> {
  const rows = await sql()<{ id: string; name: string }[]>`
    select id, name from cafes where slug = ${slug} and is_demo`;
  return rows[0] ?? null;
}

export type DashboardDay = { day: string; open: number; review: number; menu: number; wifi: number };

export type Dashboard = {
  totals: Record<TapAction, number>;
  feedbackCount: number;
  averageRating: number | null;
  days: DashboardDay[];
  artifacts: { code: string; label: string | null; visits: number }[];
  feedback: {
    id: string;
    createdAt: Date;
    rating: number;
    message: string | null;
    contact: string | null;
    artifactCode: string | null;
  }[];
};

// Days are calendar days in the Philippines, whatever the server's timezone.
export async function getDashboard(cafeId: string, windowDays = 30, chartDays = 14): Promise<Dashboard> {
  const db = sql();
  const since = new Date(Date.now() - windowDays * 24 * 60 * 60 * 1000);

  const [totals, rating, days, artifacts, feedback] = await Promise.all([
    db<{ action: TapAction; n: number }[]>`
      select action, count(*)::int as n from taps
      where cafe_id = ${cafeId} and created_at >= ${since}
      group by action`,
    db<{ n: number; avg: number | null }[]>`
      select count(*)::int as n, round(avg(rating), 1)::float as avg from feedback
      where cafe_id = ${cafeId} and created_at >= ${since}`,
    db<DashboardDay[]>`
      with days as (
        select generate_series(
          (now() at time zone 'Asia/Manila')::date - ${chartDays - 1}::int,
          (now() at time zone 'Asia/Manila')::date,
          interval '1 day')::date as day
      )
      select to_char(d.day, 'YYYY-MM-DD') as day,
        count(t.id) filter (where t.action = 'open')::int as open,
        count(t.id) filter (where t.action = 'review')::int as review,
        count(t.id) filter (where t.action = 'menu')::int as menu,
        count(t.id) filter (where t.action = 'wifi')::int as wifi
      from days d
      left join taps t
        on t.cafe_id = ${cafeId} and (t.created_at at time zone 'Asia/Manila')::date = d.day
      group by d.day order by d.day`,
    // Grouped from taps, not current mappings, so a reassigned artifact's
    // visits stay with the cafe it pointed to at the time.
    db<{ code: string; label: string | null; visits: number }[]>`
      select t.artifact_code as code, a.label, count(*)::int as visits
      from taps t left join artifacts a on a.code = t.artifact_code
      where t.cafe_id = ${cafeId} and t.action = 'open' and t.created_at >= ${since}
        and t.artifact_code is not null
      group by t.artifact_code, a.label order by visits desc`,
    db<Dashboard["feedback"]>`
      select id::text, created_at as "createdAt", rating, message, contact, artifact_code as "artifactCode"
      from feedback where cafe_id = ${cafeId}
      order by created_at desc limit 50`,
  ]);

  const counts: Record<TapAction, number> = { open: 0, review: 0, menu: 0, wifi: 0 };
  for (const row of totals) counts[row.action] = row.n;
  return {
    totals: counts,
    feedbackCount: rating[0]?.n ?? 0,
    averageRating: rating[0]?.avg ?? null,
    days,
    artifacts,
    feedback,
  };
}

export async function checkDatabase(): Promise<void> {
  await sql()`select 1 from cafes limit 1`;
}
