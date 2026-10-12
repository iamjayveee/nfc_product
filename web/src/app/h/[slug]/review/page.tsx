import { Suspense } from "react";
import { loadHub } from "../cafe";
import { ReviewForm } from "./ReviewForm";

export default function ReviewPage(props: PageProps<"/h/[slug]/review">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-10">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <Review {...props} />
      </Suspense>
    </main>
  );
}

async function Review(props: PageProps<"/h/[slug]/review">) {
  const { cafe, code, query } = await loadHub(props);
  return (
    <>
      <a href={`/h/${cafe.slug}${query}`} className="text-muted">
        ← {cafe.name}
      </a>
      <h1 className="text-2xl font-semibold">Review {cafe.name}</h1>
      <ReviewForm slug={cafe.slug} code={code} cafeName={cafe.name} googleReviewUrl={cafe.googleReviewUrl} />
    </>
  );
}
