/*
  Warnings:

  - You are about to drop the column `totalClicks` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `totalClicks` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Click` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Click` DROP FOREIGN KEY `Click_linkId_fkey`;

-- AlterTable
ALTER TABLE `Link` DROP COLUMN `totalClicks`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `totalClicks`;

-- DropTable
DROP TABLE `Click`;
