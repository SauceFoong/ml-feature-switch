-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturePermission" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL,
    "featureName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturePermission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_name_key" ON "Feature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FeaturePermission_featureName_email_key" ON "FeaturePermission"("featureName", "email");

-- AddForeignKey
ALTER TABLE "FeaturePermission" ADD CONSTRAINT "FeaturePermission_featureName_fkey" FOREIGN KEY ("featureName") REFERENCES "Feature"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
