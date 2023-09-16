-- CreateTable
CREATE TABLE "inventory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "barcode" TEXT,
    "name" TEXT,
    "quantity" INTEGER,
    "sellPrice" INTEGER,
    "cost" INTEGER,
    "productType" TEXT,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserId" TEXT,
    "name" TEXT,
    "isComplete" BOOLEAN DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "balance" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER,
    "userId" TEXT,
    "status" TEXT,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "email" TEXT,
    "picture" TEXT,
    "bio" TEXT,
    "id" SERIAL NOT NULL,
    "userId" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
