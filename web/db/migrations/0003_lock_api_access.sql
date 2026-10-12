-- Supabase exposes the public schema through its Data API using a public key.
-- Row-level security with no policies denies that API everything; the app
-- connects directly as the database owner and is unaffected. Harmless on a
-- plain Postgres host.
alter table cafes enable row level security;
alter table artifacts enable row level security;
alter table taps enable row level security;
alter table feedback enable row level security;
alter table schema_migrations enable row level security;
