/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TagsOnLinks` DROP FOREIGN KEY `TagsOnLinks_linkId_fkey`;

-- DropForeignKey
ALTER TABLE `TagsOnLinks` DROP FOREIGN KEY `TagsOnLinks_tagId_fkey`;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `TagsOnLinks`;
