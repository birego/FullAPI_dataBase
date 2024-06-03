-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'APPRENANT', 'GUEST');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "apprenant" ADD CONSTRAINT "apprenant_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coach" ADD CONSTRAINT "coach_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
