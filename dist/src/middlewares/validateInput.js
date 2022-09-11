"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidationResult = exports.createValidationFor = void 0;
const express_validator_1 = require("express-validator");
const messages_1 = __importDefault(require("../common/messages"));
//A middleware to validate API ReqeustBody
const createValidationFor = (route) => {
    switch (route) {
        case "createUpdateFeaturePermission":
            return [
                (0, express_validator_1.check)("featureName").not().isEmpty().withMessage(messages_1.default.MSG0000),
                (0, express_validator_1.check)("email").not().isEmpty().withMessage(messages_1.default.MSG0001),
                (0, express_validator_1.check)("enable").not().isEmpty().withMessage(messages_1.default.MSG0002),
            ];
        case "createFeature":
            return [(0, express_validator_1.check)("name").not().isEmpty().withMessage(messages_1.default.MSG0000)];
        default:
            return [];
    }
};
exports.createValidationFor = createValidationFor;
const checkValidationResult = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (result.isEmpty()) {
        return next();
    }
    let errorMessages = "";
    result.array().forEach((error) => {
        errorMessages += error.msg + ". ";
    });
    return res.status(403).json({ message: errorMessages });
};
exports.checkValidationResult = checkValidationResult;
