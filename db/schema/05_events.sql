DROP TABLE IF EXISTS events CASCADE;

SET timezone = 'posix/Canada/Pacific';

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  shift_id INTEGER REFERENCES shifts(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  event_date TIMESTAMP not null default CURRENT_DATE,
  isPublished BOOLEAN DEFAULT FALSE,
  UNIQUE (user_id, shift_id, event_date)
);