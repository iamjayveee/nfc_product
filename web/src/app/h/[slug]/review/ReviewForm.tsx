"use client";

import { useActionState, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { saveFeedback, type ReviewState } from "./actions";

const initial: ReviewState = { saved: false, error: null, text: "" };

export function ReviewForm(props: {
  slug: string;
  code: string | null;
  cafeName: string;
  googleReviewUrl: string;
}) {
  const [state, formAction, pending] = useActionState(
    saveFeedback.bind(null, props.slug, props.code),
    initial,
  );
  const [draft, setDraft] = useState("");

  return (
    <div className="flex flex-col gap-6">
      {state.saved ? (
        <p className="rounded-lg bg-surface p-4">Thank you — {props.cafeName} will see your feedback.</p>
      ) : (
        <form action={formAction} className="flex flex-col gap-4">
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 font-medium">How was your visit?</legend>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="flex-1">
                  <input type="radio" name="rating" value={star} required className="peer sr-only" />
                  <span className="block rounded-lg bg-surface py-3 text-center text-lg peer-checked:bg-accent peer-checked:text-accent-foreground">
                    {star}★
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Tell us more</span>
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="rounded-lg border border-muted/40 bg-background p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">
              Contact <span className="font-normal text-muted">(optional)</span>
            </span>
            <input name="contact" maxLength={200} className="rounded-lg border border-muted/40 bg-background p-3" />
          </label>
          <p className="text-sm text-muted">
            Your feedback goes privately to {props.cafeName}. Contact details are optional; add them only if
            you&apos;d like the cafe to get back to you.
          </p>
          {state.error && <p role="alert">{state.error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-accent px-5 py-4 text-lg font-medium text-accent-foreground disabled:opacity-50"
          >
            {pending ? "Sending…" : "Send to the cafe"}
          </button>
        </form>
      )}
      <GoogleStep url={props.googleReviewUrl} text={state.saved ? state.text : draft} />
    </div>
  );
}

// Takes no rating on purpose: the Google path is the same for every customer and
// every star value (Google's no-gating policy; IDEA-SCOPE.md §12 boundary 5).
function GoogleStep({ url, text }: { url: string; text: string }) {
  return (
    <section className="flex flex-col gap-3 border-t border-surface pt-6">
      <h2 className="font-medium">Share it on Google too</h2>
      <CopyButton text={text} label="Copy what I wrote" />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-surface px-5 py-4 text-center text-lg font-medium"
      >
        Open Google reviews
      </a>
    </section>
  );
}
