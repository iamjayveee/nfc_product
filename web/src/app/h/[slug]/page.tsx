import { Suspense } from "react";
import { loadHub } from "./cafe";

export default function HubPage(props: PageProps<"/h/[slug]">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-4 py-10">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <Hub {...props} />
      </Suspense>
    </main>
  );
}

async function Hub(props: PageProps<"/h/[slug]">) {
  const { cafe, query } = await loadHub(props);
  const go = (action: string) => `/h/${cafe.slug}/go/${action}${query}`;
  const button = "block rounded-xl px-5 py-4 text-center text-lg font-medium";

  // Plain links, not <Link>: each goes through a route handler that records the tap.
  return (
    <>
      <h1 className="text-2xl font-semibold">{cafe.name}</h1>
      <nav className="flex flex-col gap-3">
        <a href={go("review")} className={`${button} bg-accent text-accent-foreground`}>
          Leave a Google review
        </a>
        {cafe.menuImageUrl && (
          <a href={go("menu")} className={`${button} bg-surface`}>
            See the menu
          </a>
        )}
        {cafe.wifiSsid && (
          <a href={go("wifi")} className={`${button} bg-surface`}>
            Join the WiFi
          </a>
        )}
      </nav>
    </>
  );
}
