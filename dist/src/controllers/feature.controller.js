"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.checkHasFeaturePermission = exports.createUpdateFeaturePermission = exports.getAllFeatures = exports.createFeature = void 0;
const messages_1 = __importDefault(require("../common/messages"));
const FeatureService = __importStar(require("../services/feature.service"));
const feature_service_1 = require("../services/feature.service");
//Create Features
const createFeature = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exist = yield (0, feature_service_1.getFeature)(req.body);
        if (exist) {
            return res.status(500).json({ message: messages_1.default.MSG0003 });
        }
        yield FeatureService.createFeature(req.body);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(304).send();
    }
});
exports.createFeature = createFeature;
//Get All Features
const getAllFeatures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const features = yield FeatureService.getAllFeatures();
        return res.status(200).send({ features: features });
    }
    catch (err) {
        return res.status(500).send();
    }
});
exports.getAllFeatures = getAllFeatures;
//Create or Update Feature Permission
const createUpdateFeaturePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield FeatureService.createUpdateFeaturePermission({
            featureName: req.body.featureName,
            email: req.body.email,
            enable: req.body.enable,
        });
        return res.status(200).send();
    }
    catch (err) {
        return res.status(304).send();
    }
});
exports.createUpdateFeaturePermission = createUpdateFeaturePermission;
//Check if has the permission to acess the feature
const checkHasFeaturePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //check if feature exist
        const featureExist = yield FeatureService.getFeature({
            name: req.query.featureName,
        });
        if (!featureExist) {
            //if feature not exist
            return res.status(500).json({ message: messages_1.default.MSG0005 });
        }
        const featurePermission = yield FeatureService.getFeaturePermission(req.query.featureName, req.query.email);
        return featurePermission
            ? res.status(200).json({ canAccess: featurePermission.enable })
            : res.status(500).json({ canAccess: false, message: messages_1.default.MSG0004 });
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.checkHasFeaturePermission = checkHasFeaturePermission;
