CREATE TABLE "user_types" (
  "id" int PRIMARY KEY,
  "name" string
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "name" string,
  "user_type_id" int,
  "email" string,
  "password" string,
  "avatar" string,
  "slack_user_id" string,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" string
);

CREATE TABLE "shifts" (
  "id" int PRIMARY KEY,
  "category_id" int,
  "date" datetime,
  "slot" int
);

CREATE TABLE "user_shifts" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "shift_id" int,
  "created_at" datetime,
  "updated_at" datetime, 
  isPublished boolean
);





ALTER TABLE "users" ADD FOREIGN KEY ("user_type_id") REFERENCES "user_types" ("id");

ALTER TABLE "shifts" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "user_shifts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_shifts" ADD FOREIGN KEY ("shift_id") REFERENCES "shifts" ("id");
