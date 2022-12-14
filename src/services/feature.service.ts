import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Feature

export const createFeature = async (newFeature: Feature) => {
  await prisma.feature.create({
    data: newFeature,
  });

  return;
};

export const getFeature = async (feature: Feature) => {
  const aFeature = await prisma.feature.findUnique({
    where: {
      name: feature.name,
    },
  });

  return aFeature;
};

export const getAllFeatures = async () => {
  const features = await prisma.feature.findMany({
    include: {
      featurePermissions: {
        select: {
          id: true,
          email: true,
          enable: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return features;
};

//Feature Permission

export const createUpdateFeaturePermission = async (
  newFeaturePermission: FeaturePermission
) => {
  const exist = await getFeaturePermission(
    newFeaturePermission.featureName,
    newFeaturePermission.email
  );
  if (!exist) {
    //create new fp
    await prisma.featurePermission.create({
      data: {
        email: newFeaturePermission.email,
        enable: newFeaturePermission.enable,
        featureName: newFeaturePermission.featureName,
      },
    });
  } else {
    //update exist fp
    await prisma.featurePermission.update({
      data: { enable: newFeaturePermission.enable },
      where: {
        featurePermissionIdentifier: {
          featureName: newFeaturePermission.featureName,
          email: newFeaturePermission.email,
        },
      },
    });
  }
};

export const getFeaturePermission = async (
  featureName: string,
  email: string
) => {
  const featurePermission = await prisma.featurePermission.findUnique({
    where: {
      featurePermissionIdentifier: {
        featureName: featureName,
        email: email,
      },
    },
  });

  return featurePermission;
};
