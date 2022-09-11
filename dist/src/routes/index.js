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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FeatureController = __importStar(require("../controllers/feature.controller"));
const validateInput_1 = require("../middlewares/validateInput");
const apiRoutes = express_1.default.Router();
//Feature Routes
apiRoutes.get("/feature/get-all", FeatureController.getAllFeatures);
apiRoutes.get("/feature", (0, validateInput_1.createValidationFor)("checkFeatureAccess"), validateInput_1.checkValidationResult, FeatureController.checkHasFeaturePermission);
apiRoutes.post("/feature", (0, validateInput_1.createValidationFor)("createUpdateFeaturePermission"), validateInput_1.checkValidationResult, FeatureController.createUpdateFeaturePermission);
apiRoutes.post("/feature/create", (0, validateInput_1.createValidationFor)("createFeature"), validateInput_1.checkValidationResult, FeatureController.createFeature);
exports.default = apiRoutes;
