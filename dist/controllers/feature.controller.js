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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeature = exports.updateFeature = exports.getFeature = exports.checkHasFeaturePermission = exports.createUpdateFeaturePermission = exports.createFeature = void 0;
const FeatureService = __importStar(require("../services/feature.service"));
const createFeature = (req, res) => { };
exports.createFeature = createFeature;
const createUpdateFeaturePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield FeatureService.createUpdateFeaturePermission({
            featureName: req.body.featureName,
            email: req.body.email,
            enable: req.body.enable,
        });
        return res.status(200);
    }
    catch (err) {
        console.log(err);
        return res.status(304).json({ message: err });
    }
});
exports.createUpdateFeaturePermission = createUpdateFeaturePermission;
const checkHasFeaturePermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const featurePermission = yield FeatureService.getFeaturePermission(req.query.featureName, req.query.email);
        return res.status(200).json({ canAccess: featurePermission === null || featurePermission === void 0 ? void 0 : featurePermission.enable });
    }
    catch (err) {
        console.log(err);
        return res.status(304).json({ message: err });
    }
});
exports.checkHasFeaturePermission = checkHasFeaturePermission;
// export const getFeaturePermission = (req: Request, res: Response) => {
//     try {
//       FeatureService.createFeaturePermission(req.body);
//     } catch (err) {
//       return res.status(304).json({ message: err });
//     }
//     return res.status(200);
//   };
const getFeature = () => { };
exports.getFeature = getFeature;
const updateFeature = () => { };
exports.updateFeature = updateFeature;
const deleteFeature = () => { };
exports.deleteFeature = deleteFeature;
