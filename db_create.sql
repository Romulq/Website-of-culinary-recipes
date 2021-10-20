PRAGMA foreign_keys=OFF;

CREATE TABLE IF NOT EXISTS "django_migrations" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "app" varchar(255) NOT NULL, 
    "name" varchar(255) NOT NULL, 
    "applied" datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS "auth_group_permissions" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "group_id" integer NOT NULL REFERENCES "auth_group" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "auth_user_groups" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "group_id" integer NOT NULL REFERENCES "auth_group" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "auth_user_user_permissions" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "django_admin_log" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "action_time" datetime NOT NULL, 
    "object_id" text NULL, 
    "object_repr" varchar(200) NOT NULL, 
    "change_message" text NOT NULL, 
    "content_type_id" integer NULL REFERENCES "django_content_type" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "action_flag" smallint unsigned NOT NULL CHECK ("action_flag" >= 0)
);

CREATE TABLE IF NOT EXISTS "django_content_type" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "app_label" varchar(100) NOT NULL, "model" varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "auth_permission" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "content_type_id" integer NOT NULL REFERENCES "django_content_type" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "codename" varchar(100) NOT NULL, "name" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "auth_group" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "name" varchar(150) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "auth_user" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "password" varchar(128) NOT NULL, 
    "last_login" datetime NULL, 
    "is_superuser" bool NOT NULL, 
    "username" varchar(150) NOT NULL UNIQUE, 
    "last_name" varchar(150) NOT NULL, 
    "email" varchar(254) NOT NULL, 
    "is_staff" bool NOT NULL, 
    "is_active" bool NOT NULL, 
    "date_joined" datetime NOT NULL, 
    "first_name" varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS "django_session" (
    "session_key" varchar(40) NOT NULL PRIMARY KEY, 
    "session_data" text NOT NULL, 
    "expire_date" datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS "recept_category" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "nameCategory" varchar(255) NOT NULL, 
    "slugCategory" varchar(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "recept_kitchen" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "nameKitchen" varchar(255) NOT NULL, 
    "imageKitchen" varchar(100) NOT NULL, 
    "slugKitchen" varchar(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "recept_stage" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "titleStage" varchar(255) NOT NULL, 
    "discription" text NOT NULL, 
    "imageStage" varchar(100) NOT NULL, 
    "slugStage" integer unsigned NOT NULL CHECK ("slugStage" >= 0), 
    "recipe_id" integer NOT NULL REFERENCES "recept_recipe" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "recept_ingredient" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "nameIngredient" varchar(255) NOT NULL, 
    "count" varchar(255) NOT NULL, 
    "recipe_id" integer NOT NULL REFERENCES "recept_recipe" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "recept_comment" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "text" text NOT NULL, 
    "time" datetime NOT NULL, 
    "recipe_id" integer NOT NULL REFERENCES "recept_recipe" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE IF NOT EXISTS "recept_recipe" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "date" datetime NOT NULL, 
    "nameRecipe" varchar(255) NOT NULL, 
    "description" text NOT NULL, 
    "timeofCreation" time NOT NULL, 
    "count" smallint NOT NULL, 
    "imageRecipe" varchar(100) NOT NULL, 
    "category_id" integer NOT NULL REFERENCES "recept_category" ("id") DEFERRABLE INITIALLY DEFERRED, 
    "kitchen_id" integer NOT NULL REFERENCES "recept_kitchen" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions" ("group_id", "permission_id");
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions" ("group_id");
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions" ("permission_id");
CREATE UNIQUE INDEX "auth_user_groups_user_id_group_id_94350c0c_uniq" ON "auth_user_groups" ("user_id", "group_id");
CREATE INDEX "auth_user_groups_user_id_6a12ed8b" ON "auth_user_groups" ("user_id");
CREATE INDEX "auth_user_groups_group_id_97559544" ON "auth_user_groups" ("group_id");
CREATE UNIQUE INDEX "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" ON "auth_user_user_permissions" ("user_id", "permission_id");
CREATE INDEX "auth_user_user_permissions_user_id_a95ead1b" ON "auth_user_user_permissions" ("user_id");
CREATE INDEX "auth_user_user_permissions_permission_id_1fbb5f2c" ON "auth_user_user_permissions" ("permission_id");
CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log" ("content_type_id");
CREATE INDEX "django_admin_log_user_id_c564eba6" ON "django_admin_log" ("user_id");
CREATE UNIQUE INDEX "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type" ("app_label", "model");
CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission" ("content_type_id", "codename");
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission" ("content_type_id");
CREATE INDEX "django_session_expire_date_a5c62663" ON "django_session" ("expire_date");
CREATE INDEX "recept_stage_recipe_id_ec23fddd" ON "recept_stage" ("recipe_id");
CREATE INDEX "recept_ingredient_recipe_id_13f898a6" ON "recept_ingredient" ("recipe_id");
CREATE INDEX "recept_comment_recipe_id_68180703" ON "recept_comment" ("recipe_id");
CREATE INDEX "recept_comment_user_id_c3d67af9" ON "recept_comment" ("user_id");
CREATE INDEX "recept_recipe_category_id_4cf55c9b" ON "recept_recipe" ("category_id");
CREATE INDEX "recept_recipe_kitchen_id_816738eb" ON "recept_recipe" ("kitchen_id");