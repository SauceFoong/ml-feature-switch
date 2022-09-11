import { Request, Response, NextFunction } from "express";
import { validationResult, check } from "express-validator";
import messages from "../common/messages";

//A middleware to validate API ReqeustBody

export const createValidationFor = (route: string) => {
  switch (route) {
    case "createUpdateFeaturePermission":
      return [
        check("featureName").not().isEmpty().withMessage(messages.MSG0000),
        check("email").not().isEmpty().withMessage(messages.MSG0001),
        check("enable").not().isEmpty().withMessage(messages.MSG0002),
      ];

    case "createFeature":
      return [check("name").not().isEmpty().withMessage(messages.MSG0000)];

    case "checkFeatureAccess":
      return [
        check("featureName").not().isEmpty().withMessage(messages.MSG0000),
        check("email").not().isEmpty().withMessage(messages.MSG0001),
      ];

    default:
      return [];
  }
};

export const checkValidationResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  let errorMessages = "";
  result.array().forEach((error) => {
    errorMessages += error.msg + ". ";
  });

  return res.status(403).json({ message: errorMessages });
};
