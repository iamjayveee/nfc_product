// Temporary (302) and uncached: the destination behind a short URL can change
// at any time, so browsers and proxies must never remember it.
export function tempRedirect(path: string, base: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: new URL(path, base).toString(), "Cache-Control": "no-store" },
  });
}
