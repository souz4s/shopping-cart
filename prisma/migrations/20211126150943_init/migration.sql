/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `ipi` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price` DOUBLE NOT NULL,
    MODIFY `ipi` DOUBLE NOT NULL;
