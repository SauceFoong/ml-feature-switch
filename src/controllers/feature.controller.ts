import { Request, Response } from "express";
import messages from "../common/messages";
import * as FeatureService from "../services/feature.service";
import { getFeature } from "../services/feature.service";

//Create Features
export const createFeature = async (req: Request, res: Response) => {
  try {
    const exist = await getFeature(req.body);
    if (exist) {
      return res.status(500).json({ message: messages.MSG0003 });
    }
    await FeatureService.createFeature(req.body);
    return res.status(200).send();
  } catch (err) {
    return res.status(304).send();
  }
};

//Get All Features
export const getAllFeatures = async (req: Request, res: Response) => {
  try {
    const features: Array<Feature> = await FeatureService.getAllFeatures();
    return res.status(200).send({ features: features });
  } catch (err) {
    return res.status(500).send();
  }
};

//Create or Update Feature Permission
export const createUpdateFeaturePermission = async (
  req: Request,
  res: Response
) => {
  try {
    await FeatureService.createUpdateFeaturePermission({
      featureName: req.body.featureName as string,
      email: req.body.email as string,
      enable: req.body.enable as boolean,
    } as FeaturePermission);
    return res.status(200).send();
  } catch (err) {
    return res.status(304).send();
  }
};

//Check if has the permission to acess the feature
export const checkHasFeaturePermission = async (
  req: Request,
  res: Response
) => {
  try {
    //check if feature exist
    const featureExist = await FeatureService.getFeature({
      name: req.query.featureName,
    } as Feature);

    if (!featureExist) {
      //if feature not exist
      return res.status(500).json({ message: messages.MSG0005 });
    }

    const featurePermission = await FeatureService.getFeaturePermission(
      req.query.featureName as string,
      req.query.email as string
    );

    return featurePermission
      ? res.status(200).json({ canAccess: featurePermission.enable })
      : res.status(500).json({ canAccess: false, message: messages.MSG0004 });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
