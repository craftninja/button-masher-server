CREATE TABLE IF NOT EXISTS "devices"(
  "id"                              SERIAL            PRIMARY KEY  NOT NULL,
  "creatorId"                       INT               REFERENCES "users",
  "name"                            VARCHAR(100)      NOT NULL,
  "createdAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP
);
