import { describe, expect, it } from "vitest";
import { CODE_ALPHABET, generateCode, normalizeCode } from "./codes";

describe("artifact codes", () => {
  it("never uses look-alike characters", () => {
    for (const c of "0O1IL") expect(CODE_ALPHABET).not.toContain(c);
  });

  it("generates codes that normalize to themselves", () => {
    for (let i = 0; i < 500; i++) {
      const code = generateCode();
      expect(code).toHaveLength(5);
      expect(normalizeCode(code)).toBe(code);
    }
  });

  it("accepts lowercase and surrounding space from typed URLs", () => {
    expect(normalizeCode(" test2 ")).toBe("TEST2");
  });

  it("rejects wrong lengths and excluded characters", () => {
    for (const bad of ["AB2", "ABCDEFG", "AB0C", "ABIC", "", "AB/C"]) expect(normalizeCode(bad)).toBeNull();
  });

  it("only generates lengths 4–6", () => {
    expect(() => generateCode(3)).toThrow(RangeError);
    expect(() => generateCode(7)).toThrow(RangeError);
  });
});
