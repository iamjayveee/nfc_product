import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getDashboard, getDemoCafe } from "@/lib/repo";
import { VisitsChart } from "./VisitsChart";

const WINDOW_DAYS = 30;

const dayLabel = new Intl.DateTimeFormat("en-PH", { month: "short", day: "numeric", timeZone: "UTC" });
const stamp = new Intl.DateTimeFormat("en-PH", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Manila",
});

export default function DashboardPage(props: PageProps<"/dashboard/[slug]">) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-10">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <DashboardView {...props} />
      </Suspense>
    </main>
  );
}

async function DashboardView({ params }: PageProps<"/dashboard/[slug]">) {
  const { slug } = await params;
  const cafe = await getDemoCafe(slug);
  if (!cafe) notFound();
  const data = await getDashboard(cafe.id, WINDOW_DAYS);
  const points = data.days.map((d) => ({ day: d.day, label: dayLabel.format(new Date(d.day)), visits: d.open }));

  const tiles = [
    { label: "Visits", value: data.totals.open },
    { label: "Review taps", value: data.totals.review },
    { label: "Menu taps", value: data.totals.menu },
    { label: "WiFi taps", value: data.totals.wifi },
    {
      label: "Feedback",
      value: data.feedbackCount,
      note: data.averageRating === null ? undefined : `avg ${data.averageRating}★`,
    },
  ];

  return (
    <>
      <header className="flex flex-col gap-1">
        <p className="text-sm text-muted">Demo dashboard · sample data</p>
        <h1 className="text-2xl font-semibold">{cafe.name}</h1>
        <p className="text-sm text-muted">Last {WINDOW_DAYS} days, Philippine time</p>
      </header>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {tiles.map((t) => (
          <div key={t.label} className="flex flex-col gap-1 rounded-lg bg-surface p-4">
            <span className="text-sm text-muted">{t.label}</span>
            <span className="text-2xl font-semibold tabular-nums">{t.value.toLocaleString("en-PH")}</span>
            {t.note && <span className="text-sm text-muted">{t.note}</span>}
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <VisitsChart points={points} />
        <details>
          <summary className="cursor-pointer text-sm text-muted">Taps per action by day</summary>
          <table className="mt-3 w-full text-sm tabular-nums">
            <thead className="text-left text-muted">
              <tr>
                <th className="py-1 font-normal">Day</th>
                <th className="py-1 text-right font-normal">Visits</th>
                <th className="py-1 text-right font-normal">Review</th>
                <th className="py-1 text-right font-normal">Menu</th>
                <th className="py-1 text-right font-normal">WiFi</th>
              </tr>
            </thead>
            <tbody>
              {data.days.toReversed().map((d) => (
                <tr key={d.day} className="border-t border-muted/20">
                  <td className="py-1">{dayLabel.format(new Date(d.day))}</td>
                  <td className="py-1 text-right">{d.open}</td>
                  <td className="py-1 text-right">{d.review}</td>
                  <td className="py-1 text-right">{d.menu}</td>
                  <td className="py-1 text-right">{d.wifi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </section>

      {data.artifacts.length > 1 && (
        <section className="flex flex-col gap-2">
          <h2 className="font-medium">Visits by artifact</h2>
          <ul className="flex flex-col">
            {data.artifacts.map((a) => (
              <li key={a.code} className="flex justify-between border-t border-muted/20 py-2 text-sm">
                <span>
                  {a.label ?? "Artifact"} <span className="text-muted">· {a.code}</span>
                </span>
                <span className="tabular-nums">{a.visits}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="flex flex-col gap-2">
        <h2 className="font-medium">Private feedback</h2>
        {data.feedback.length === 0 ? (
          <p className="text-sm text-muted">No feedback yet.</p>
        ) : (
          <ul className="flex flex-col">
            {data.feedback.map((f) => (
              <li key={f.id} className="flex flex-col gap-1 border-t border-muted/20 py-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium" aria-label={`${f.rating} out of 5 stars`}>
                    {"★".repeat(f.rating)}
                    <span className="text-muted/50">{"★".repeat(5 - f.rating)}</span>
                  </span>
                  <span className="text-muted">{stamp.format(f.createdAt)}</span>
                </div>
                {f.message && <p>{f.message}</p>}
                {f.contact && <p className="text-sm text-muted">Contact: {f.contact}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
