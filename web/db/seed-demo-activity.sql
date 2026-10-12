-- Sample activity for demo cafes only, so the dashboard has something to show
-- in pitches. Replaces previous demo taps and feedback each run; never touches
-- real cafes. Usage: npm run db:seed-demo-activity
delete from feedback where cafe_id in (select id from cafes where is_demo);
delete from taps where cafe_id in (select id from cafes where is_demo);

-- 30 days of visits, 6–24 a day between 8am and 8pm Philippine time.
insert into taps (artifact_code, cafe_id, action, created_at)
select (array['CARD7', 'BADG3', 'STND4'])[1 + floor(random() * 3)::int],
  c.id, 'open',
  least(now(), ((current_date - d) + time '08:00' + random() * interval '12 hours') at time zone 'Asia/Manila')
from cafes c
cross join generate_series(0, 29) as d
cross join lateral generate_series(1, 6 + floor(random() * 19)::int + 0 * d) as n
where c.is_demo;

-- Some visits go on to choose an action a few seconds later. The random draws
-- sit in the select list so each visit gets its own (a join filter would not).
with visits as (
  select artifact_code, cafe_id, created_at, random() as r1, random() as r2, random() as r3
  from taps
  where action = 'open' and cafe_id in (select id from cafes where is_demo)
)
insert into taps (artifact_code, cafe_id, action, created_at)
select v.artifact_code, v.cafe_id, a.action, v.created_at + interval '20 seconds'
from visits v
cross join lateral (values ('review', v.r1 < 0.35), ('menu', v.r2 < 0.45), ('wifi', v.r3 < 0.30)) as a (action, chosen)
where a.chosen;

insert into feedback (cafe_id, artifact_code, rating, message, contact, created_at)
select c.id, 'CARD7', f.rating, f.message, f.contact, now() - f.ago
from cafes c,
  (values
    (5, 'Ang sarap ng iced spanish latte! Babalik kami.', null, interval '6 hours'),
    (3, 'Coffee was good but the wait was almost 20 minutes.', null, interval '1 day 3 hours'),
    (4, 'Cozy place, WiFi was fast. More outlets please.', null, interval '2 days 5 hours'),
    (2, 'Aircon was too weak this afternoon.', 'gab@example.com', interval '4 days 2 hours'),
    (5, 'Friendly barista, great ube cheesecake.', null, interval '6 days'),
    (4, null, null, interval '9 days 4 hours'),
    (1, 'Order was wrong and no one checked on us.', '0917 000 0000', interval '12 days 1 hour'),
    (5, 'Best study spot near campus.', null, interval '15 days 7 hours'),
    (3, 'Pastries were a bit dry today.', null, interval '21 days 2 hours')
  ) as f (rating, message, contact, ago)
where c.is_demo;
