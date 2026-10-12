-- Only demo cafes may show a dashboard without login (October demo, I-5).
-- Real cafes' feedback stays private until owner login exists.
alter table cafes add column is_demo boolean not null default false;
