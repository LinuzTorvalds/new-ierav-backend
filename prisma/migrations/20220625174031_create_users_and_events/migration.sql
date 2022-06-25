-- CreateTable
CREATE TABLE "users" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "birthday" DATE NOT NULL,
    "sex" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "weddingAnniversary" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "events" (
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
