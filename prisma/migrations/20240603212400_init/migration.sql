-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "picture" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
