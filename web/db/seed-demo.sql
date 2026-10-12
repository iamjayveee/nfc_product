-- Demo cafe for the pitch set. Safe to re-run. Usage: npm run db:seed-demo
-- Replace the Google URL with a real write-a-review link before pitching.
insert into cafes (slug, name, google_review_url, menu_image_url, wifi_ssid, wifi_password)
values (
  'demo-cafe',
  'Demo Cafe',
  'https://search.google.com/local/writereview?placeid=REPLACE_WITH_PLACE_ID',
  null,
  'DemoCafe-Guest',
  'kape-tayo-2026'
)
on conflict (slug) do nothing;

-- Test artifact code for the unlocked development sticker.
insert into artifacts (code, cafe_id, label)
select 'TEST2', id, 'Unlocked test sticker' from cafes where slug = 'demo-cafe'
on conflict (code) do nothing;
