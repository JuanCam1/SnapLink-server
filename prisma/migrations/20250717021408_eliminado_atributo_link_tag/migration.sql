/*
  Warnings:

  - You are about to drop the column `referrer` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `customDomain` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordExpires` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Click` DROP COLUMN `referrer`;

-- AlterTable
ALTER TABLE `Link` DROP COLUMN `customDomain`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `resetPasswordExpires`;
