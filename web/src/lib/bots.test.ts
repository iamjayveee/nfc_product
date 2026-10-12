import { describe, expect, it } from "vitest";
import { isCountableVisit } from "./bots";

const phone =
  "Mozilla/5.0 (Linux; Android 14; SM-A155F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36";
const messengerInApp =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/480.0]";

describe("isCountableVisit", () => {
  it("counts phone browsers, including in-app browsers", () => {
    expect(isCountableVisit("GET", phone)).toBe(true);
    expect(isCountableVisit("GET", messengerInApp)).toBe(true);
  });

  it("skips link previews and crawlers", () => {
    for (const ua of [
      "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
      "WhatsApp/2.24.1.0 A",
      "TelegramBot (like TwitterBot)",
      "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)",
    ]) {
      expect(isCountableVisit("GET", ua)).toBe(false);
    }
  });

  it("skips HEAD requests and requests without a user agent", () => {
    expect(isCountableVisit("HEAD", phone)).toBe(false);
    expect(isCountableVisit("GET", null)).toBe(false);
  });
});
