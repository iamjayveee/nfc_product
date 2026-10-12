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

update cafes set is_demo = true where slug = 'demo-cafe';

-- Unlocked development sticker plus the demo set (card, badge, 3D model).
insert into artifacts (code, cafe_id, label)
select v.code, c.id, v.label
from cafes c,
  (values ('TEST2', 'Unlocked test sticker'),
          ('CARD7', 'Demo card'),
          ('BADG3', 'Demo badge'),
          ('STND4', 'Demo 3D model')) as v (code, label)
where c.slug = 'demo-cafe'
on conflict (code) do nothing;
