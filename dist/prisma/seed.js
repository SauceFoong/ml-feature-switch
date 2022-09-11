"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const features_1 = __importDefault(require("./seeders/features"));
//This file is the logic to go through the db in order to seed our db
const prisma = new client_1.PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //Features
    for (let feature of features_1.default) {
        yield prisma.feature.create({
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
});
main()
    .catch((error) => {
    console.log(error);
    process.exit(1);
})
    .finally(() => {
    prisma.$disconnect;
});
