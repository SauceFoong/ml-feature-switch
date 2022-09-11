import { PrismaClient } from "@prisma/client";
import features from "./seeders/features";

//This file is the logic to go through the db in order to seed our db
const prisma = new PrismaClient();

const main = async () => {
  //Features
  for (let feature of features) {
    await prisma.feature.create({
      data: {
        name: feature.name,
      },
    });
  }
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
