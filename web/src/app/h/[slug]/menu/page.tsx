import { notFound } from "next/navigation";
import { Suspense } from "react";
import { loadHub } from "../cafe";

export default function MenuPage(props: PageProps<"/h/[slug]/menu">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-10">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <Menu {...props} />
      </Suspense>
    </main>
  );
}

async function Menu(props: PageProps<"/h/[slug]/menu">) {
  const { cafe, query } = await loadHub(props);
  if (!cafe.menuImageUrl) notFound();
  return (
    <>
      <a href={`/h/${cafe.slug}${query}`} className="text-muted">
        ← {cafe.name}
      </a>
      <h1 className="text-2xl font-semibold">Menu</h1>
      {/* The menu is one photo hosted on the storage service; plain <img> avoids
          tying image optimisation to a host we will leave at the pilot. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={cafe.menuImageUrl} alt={`${cafe.name} menu`} className="w-full rounded-lg" />
    </>
  );
}
