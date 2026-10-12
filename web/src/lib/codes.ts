import { randomInt } from "node:crypto";

// Excludes look-alikes 0/O, 1/I/L so codes survive being read aloud or typed.
export const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
const CODE_PATTERN = new RegExp(`^[${CODE_ALPHABET}]{4,6}$`);

export function normalizeCode(raw: string): string | null {
  const code = raw.trim().toUpperCase();
  return CODE_PATTERN.test(code) ? code : null;
}

export function generateCode(length = 5): string {
  if (length < 4 || length > 6) throw new RangeError("code length must be 4–6");
  let code = "";
  for (let i = 0; i < length; i++) code += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
  return code;
}
