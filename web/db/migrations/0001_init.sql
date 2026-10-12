-- Cafes, artifacts, taps, and private feedback.
-- Cafes and artifacts are configuration, edited directly by Madrid (no admin UI).

create table cafes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]{2,40}$'),
  name text not null,
  google_review_url text not null,
  menu_image_url text,
  wifi_ssid text,
  wifi_password text,
  created_at timestamptz not null default now()
);

-- The short URL identifies the artifact; cafe_id is the reassignable mapping.
-- A null cafe_id means the artifact is not currently assigned.
create table artifacts (
  code text primary key check (code ~ '^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{4,6}$'),
  cafe_id uuid references cafes (id),
  label text,
  created_at timestamptz not null default now()
);

-- One row per visit ('open') and per hub action. Recorded against both the
-- artifact and the cafe it pointed to at that moment, so reassignment keeps history.
create table taps (
  id bigint generated always as identity primary key,
  artifact_code text references artifacts (code),
  cafe_id uuid not null references cafes (id),
  action text not null check (action in ('open', 'review', 'menu', 'wifi')),
  created_at timestamptz not null default now()
);

create index taps_cafe_created_idx on taps (cafe_id, created_at);

create table feedback (
  id bigint generated always as identity primary key,
  cafe_id uuid not null references cafes (id),
  artifact_code text references artifacts (code),
  rating smallint not null check (rating between 1 and 5),
  message text,
  contact text,
  created_at timestamptz not null default now()
);

create index feedback_cafe_created_idx on feedback (cafe_id, created_at);
