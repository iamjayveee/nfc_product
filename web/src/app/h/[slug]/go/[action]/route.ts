import type { NextRequest } from "next/server";
import { isCountableVisit } from "@/lib/bots";
import { normalizeCode } from "@/lib/codes";
import { tempRedirect } from "@/lib/http";
import { getCafeBySlug, HUB_ACTIONS, recordTap, type HubAction } from "@/lib/repo";

// Records which hub action was chosen, then continues to that action's page.
export async function GET(request: NextRequest, ctx: RouteContext<"/h/[slug]/go/[action]">) {
  const { slug, action } = await ctx.params;
  if (!HUB_ACTIONS.includes(action as HubAction)) return tempRedirect(`/h/${slug}`, request.url);

  const cafe = await getCafeBySlug(slug);
  if (!cafe) return tempRedirect("/", request.url);

  const code = normalizeCode(request.nextUrl.searchParams.get("a") ?? "");
  if (isCountableVisit(request.method, request.headers.get("user-agent"))) {
    try {
      await recordTap(cafe.id, code, action as HubAction);
    } catch (error) {
      console.error("tap not recorded", error);
    }
  }
  return tempRedirect(`/h/${slug}/${action}${code ? `?a=${code}` : ""}`, request.url);
}
