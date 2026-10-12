"use server";

import { parseFeedback } from "@/lib/feedback";
import { getCafeBySlug, insertFeedback } from "@/lib/repo";

export type ReviewState = { saved: boolean; error: string | null; text: string };

export async function saveFeedback(
  slug: string,
  code: string | null,
  _previous: ReviewState,
  form: FormData,
): Promise<ReviewState> {
  const feedback = parseFeedback(form);
  const text = typeof form.get("message") === "string" ? String(form.get("message")) : "";
  if (!feedback) return { saved: false, error: "Choose a star rating first.", text };

  const cafe = await getCafeBySlug(slug);
  if (!cafe) return { saved: false, error: "This cafe page is no longer available.", text };

  try {
    await insertFeedback(cafe.id, code, feedback);
  } catch (error) {
    console.error("feedback not saved", error);
    return { saved: false, error: "Couldn't send that. Please try again.", text };
  }
  // The result carries no rating: what follows is identical for every star value.
  return { saved: true, error: null, text };
}
