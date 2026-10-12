import postgres from "postgres";

let client: postgres.Sql | undefined;

// Plain Postgres so the same code runs against Supabase now and a VPS later.
// prepare: false is required by Supabase's transaction-mode pooler.
export function sql(): postgres.Sql {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    client = postgres(url, { prepare: false, max: 5 });
  }
  return client;
}
