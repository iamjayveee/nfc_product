import { describe, expect, it } from "vitest";
import { parseFeedback } from "./feedback";

function form(fields: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
}

describe("parseFeedback", () => {
  it("accepts every rating 1–5 the same way", () => {
    for (const rating of [1, 2, 3, 4, 5]) {
      expect(parseFeedback(form({ rating: String(rating), message: "ok" }))).toEqual({
        rating,
        message: "ok",
        contact: null,
      });
    }
  });

  it("rejects missing or out-of-range ratings", () => {
    for (const rating of ["", "0", "6", "3.5", "five"]) expect(parseFeedback(form({ rating }))).toBeNull();
  });

  it("treats blank message and contact as absent", () => {
    expect(parseFeedback(form({ rating: "4", message: "  ", contact: "" }))).toEqual({
      rating: 4,
      message: null,
      contact: null,
    });
  });

  it("caps message length", () => {
    expect(parseFeedback(form({ rating: "2", message: "x".repeat(5000) }))?.message).toHaveLength(2000);
  });
});
