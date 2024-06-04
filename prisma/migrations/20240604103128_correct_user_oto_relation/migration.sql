/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `apprenant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `coach` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `apprenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `coach` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "apprenant" DROP CONSTRAINT "apprenant_matricule_fkey";

-- DropForeignKey
ALTER TABLE "coach" DROP CONSTRAINT "coach_matricule_fkey";

-- AlterTable
ALTER TABLE "apprenant" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "coach" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "apprenant_user_id_key" ON "apprenant"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "coach_user_id_key" ON "coach"("user_id");

-- AddForeignKey
ALTER TABLE "apprenant" ADD CONSTRAINT "apprenant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coach" ADD CONSTRAINT "coach_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
