-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "completeStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "remarks" TEXT NOT NULL DEFAULT '';
