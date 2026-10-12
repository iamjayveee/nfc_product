export type Feedback = { rating: number; message: string | null; contact: string | null };

const MAX_MESSAGE = 2000;
const MAX_CONTACT = 200;

function optionalText(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim().slice(0, max);
  return text === "" ? null : text;
}

export function parseFeedback(form: FormData): Feedback | null {
  const rating = Number(form.get("rating"));
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return null;
  return {
    rating,
    message: optionalText(form.get("message"), MAX_MESSAGE),
    contact: optionalText(form.get("contact"), MAX_CONTACT),
  };
}
