// Prints applied migrations, row counts, and row-level security per table.
// Usage: node --env-file=<env file> scripts/db-status.mjs
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");
const sql = postgres(url, { prepare: false, max: 1 });

try {
  const migrations = await sql`select name from schema_migrations order by name`;
  const tables = await sql`
    select c.relname as table, c.relrowsecurity as rls
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relkind = 'r' order by 1`;
  const cafes = await sql`select slug, is_demo from cafes order by slug`;
  const taps = await sql`select action, count(*)::int as n from taps group by 1 order by 1`;
  const [{ n: feedback }] = await sql`select count(*)::int as n from feedback`;

  console.log("migrations:", migrations.map((m) => m.name).join(", "));
  console.log("row-level security:", tables.map((t) => `${t.table}=${t.rls ? "on" : "OFF"}`).join(", "));
  console.log("cafes:", cafes.map((c) => `${c.slug}${c.is_demo ? " (demo)" : ""}`).join(", ") || "none");
  console.log("taps:", taps.map((t) => `${t.action}=${t.n}`).join(", ") || "none");
  console.log("feedback:", feedback);
} finally {
  await sql.end();
}
