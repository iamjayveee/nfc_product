import { notFound } from "next/navigation";
import { normalizeCode } from "@/lib/codes";
import { getCafeBySlug, type Cafe } from "@/lib/repo";

type HubProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

// Resolves the cafe for any hub page and the artifact code carried in ?a=.
export async function loadHub({ params, searchParams }: HubProps): Promise<{
  cafe: Cafe;
  code: string | null;
  query: string;
}> {
  const [{ slug }, search] = await Promise.all([params, searchParams]);
  const cafe = await getCafeBySlug(slug);
  if (!cafe) notFound();
  const code = typeof search.a === "string" ? normalizeCode(search.a) : null;
  return { cafe, code, query: code ? `?a=${code}` : "" };
}
