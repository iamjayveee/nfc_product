// Link-preview fetchers and crawlers that open a shared short URL without a
// person behind them. Their requests still redirect, but are not counted as taps.
// In-app browsers (e.g. Messenger's FBAN/FBAV) are real people and stay counted.
const NON_HUMAN =
  /bot\b|bot\/|crawler|spider|facebookexternalhit|facebookcatalog|whatsapp|telegrambot|slackbot|discordbot|linkedinbot|skypeuripreview|embedly|vkshare|preview/i;

export function isCountableVisit(method: string, userAgent: string | null): boolean {
  if (method === "HEAD") return false;
  if (!userAgent) return false;
  return !NON_HUMAN.test(userAgent);
}
