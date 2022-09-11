import express from "express";
import * as FeatureController from "../controllers/feature.controller";
import {
  createValidationFor,
  checkValidationResult,
} from "../middlewares/validateInput";

const apiRoutes = express.Router();

//Feature Routes
apiRoutes.get("/feature/get-all", FeatureController.getAllFeatures);
apiRoutes.get("/feature", FeatureController.checkHasFeaturePermission);
apiRoutes.post(
  "/feature",
  createValidationFor("createUpdateFeaturePermission"),
  checkValidationResult,
  FeatureController.createUpdateFeaturePermission
);

apiRoutes.post(
  "/feature/create",
  createValidationFor("createFeature"),
  checkValidationResult,
  FeatureController.createFeature
);

export default apiRoutes;
