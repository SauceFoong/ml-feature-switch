import { PrismaClient } from "@prisma/client";
import users from "./seeders/users";
import features from "./seeders/features";

import bcrypt from "bcryptjs";

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

  //Users
  //   for (let user of users) {
  //     await prisma.user.create({
  //       data: {
  //         email: user.email,
  //         password: bcrypt.hashSync(user.password, 8),
  //         fullName: user.fullName,
  //       },
  //     });
  //   }
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
