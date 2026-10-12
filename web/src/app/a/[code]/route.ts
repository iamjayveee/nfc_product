import type { NextRequest } from "next/server";
import { isCountableVisit } from "@/lib/bots";
import { normalizeCode } from "@/lib/codes";
import { tempRedirect } from "@/lib/http";
import { findArtifactTarget, recordTap } from "@/lib/repo";

// The permanent short URL on every chip and QR code: bizkonek.com/a/<code>.
export async function GET(request: NextRequest, ctx: RouteContext<"/a/[code]">) {
  const code = normalizeCode((await ctx.params).code);
  const target = code ? await findArtifactTarget(code) : null;
  if (!code || !target) return tempRedirect("/", request.url);

  if (isCountableVisit(request.method, request.headers.get("user-agent"))) {
    try {
      await recordTap(target.cafeId, code, "open");
    } catch (error) {
      // A lost tap row must never stop the customer reaching the hub.
      console.error("tap not recorded", error);
    }
  }
  return tempRedirect(`/h/${target.slug}?a=${code}`, request.url);
}
