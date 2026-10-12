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

export async function checkDatabase(): Promise<void> {
  await sql()`select 1 from cafes limit 1`;
}
