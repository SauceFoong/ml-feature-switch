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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturePermission = exports.createUpdateFeaturePermission = exports.getAllFeatures = exports.getFeature = exports.createFeature = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Feature
const createFeature = (newFeature) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.feature.create({
        data: newFeature,
    });
    return;
});
exports.createFeature = createFeature;
const getFeature = (feature) => __awaiter(void 0, void 0, void 0, function* () {
    const aFeature = yield prisma.feature.findUnique({
        where: {
            name: feature.name,
        },
    });
    return aFeature;
});
exports.getFeature = getFeature;
const getAllFeatures = () => __awaiter(void 0, void 0, void 0, function* () {
    const features = yield prisma.feature.findMany({
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
});
exports.getAllFeatures = getAllFeatures;
//Feature Permission
const createUpdateFeaturePermission = (newFeaturePermission) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = yield (0, exports.getFeaturePermission)(newFeaturePermission.featureName, newFeaturePermission.email);
    if (!exist) {
        //create new fp
        yield prisma.featurePermission.create({
            data: {
                email: newFeaturePermission.email,
                enable: newFeaturePermission.enable,
                featureName: newFeaturePermission.featureName,
            },
        });
    }
    else {
        //update exist fp
        yield prisma.featurePermission.update({
            data: { enable: newFeaturePermission.enable },
            where: {
                featurePermissionIdentifier: {
                    featureName: newFeaturePermission.featureName,
                    email: newFeaturePermission.email,
                },
            },
        });
    }
});
exports.createUpdateFeaturePermission = createUpdateFeaturePermission;
const getFeaturePermission = (featureName, email) => __awaiter(void 0, void 0, void 0, function* () {
    const featurePermission = yield prisma.featurePermission.findUnique({
        where: {
            featurePermissionIdentifier: {
                featureName: featureName,
                email: email,
            },
        },
    });
    return featurePermission;
});
exports.getFeaturePermission = getFeaturePermission;
