/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `ipi` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price` DECIMAL(65, 30) NOT NULL,
    MODIFY `ipi` DECIMAL(65, 30) NOT NULL;
