import { checkDatabase } from "@/lib/repo";

// Polled by the uptime monitor. Reading the database also keeps the free
// Supabase project from pausing for inactivity.
export async function GET() {
  try {
    await checkDatabase();
    return new Response("ok", { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("health check failed", error);
    return new Response("database unavailable", { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
