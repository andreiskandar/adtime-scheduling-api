DROP TABLE IF EXISTS upvotes CASCADE;
CREATE TABLE upvotes (
  user_id INTEGER REFERENCES users(id),
  contribution_id INTEGER REFERENCES contributions(id) ON DELETE CASCADE,
  active BOOLEAN DEFAULT true,
  PRIMARY KEY(user_id, contribution_id)
)
DROP TABLE IF EXISTS contributions CASCADE;
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories(id),
  user_id INTEGER REFERENCES users(id),
  chapter_number INTEGER,
  accepted boolean DEFAULT false,
  ctext TEXT
)
-- Drop and recreate stories table (Example)
DROP TABLE IF EXISTS stories CASCADE;

DROP TYPE IF EXISTS story_status;
CREATE TYPE story_status AS ENUM ('complete', 'open', 'closed');

CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  text TEXT,
  status story_status DEFAULT 'open'
);
-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255)
);

