"use strict";
// import { Request, Response, NextFunction } from 'express'
// import { validationResult, check } from 'express-validator';
// import apiResponse from '../common/apiResponse';
// import messages from '../common/messages';
// export const createValidationFor = (route: string) => {
//     switch (route) {
//         case 'createUpdateFeaturePermission':
//             return [
//                 check('username').not().isEmpty().withMessage(messages.OMS0007),
//                 check('password').not().isEmpty().withMessage(messages.OMS0008)
//             ];
//         case 'signup':
//             return [
//                 check('email').not().isEmpty().withMessage(messages.OMS0009),
//                 check('username').not().isEmpty().withMessage(messages.OMS0010),
//                 check('password').not().isEmpty().withMessage(messages.OMS0008),
//                 check('firstName').not().isEmpty().withMessage(messages.OMS0011),
//                 check('lastName').not().isEmpty().withMessage(messages.OMS0012)
//             ];
//         case 'updateProfile':
//             return [
//                 check('firstName').not().isEmpty().withMessage(messages.OMS0011),
//                 check('lastName').not().isEmpty().withMessage(messages.OMS0012)
//             ];
//         case 'changePassword':
//             return [
//                 check('oldPassword').not().isEmpty().withMessage(messages.OMS0015),
//                 check('newPassword').not().isEmpty().withMessage(messages.OMS0016)
//                     .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/)
//                     .withMessage(messages.OMS0017),
//                 check('newPasswordConfirmation').not().isEmpty().withMessage(messages.OMS0018)
//                     .custom((value, { req }) => value === req.body.newPassword)
//                     .withMessage(messages.OMS0019)
//             ];
//         case 'createBroker':
//             return [
//                 check('shortName').not().isEmpty().withMessage(messages.OMS0023),
//                 check('fullName').not().isEmpty().withMessage(messages.OMS0024),
//                 check('officeCode').not().isEmpty().withMessage(messages.OMS0094),
//                 check('commissionRate').not().isEmpty().withMessage(messages.OMS0026),
//             ];
//         case 'createCommission':
//             return [
//                 check('amount').not().isEmpty().withMessage(messages.OMS0029),
//                 check('currency').not().isEmpty().withMessage(messages.OMS0030),
//                 check('trade').not().isEmpty().withMessage(messages.OMS0031),
//                 check('broker').not().isEmpty().withMessage(messages.OMS0032),
//             ];
//         case 'createAccount':
//         case 'updateAccount':
//             return [
//                 check('accountCode').not().isEmpty().withMessage(messages.OMS0052),
//                 check('accountName').not().isEmpty().withMessage(messages.OMS0053),
//                 check('accountType').not().isEmpty().withMessage(messages.OMS0054),
//                 check('officeCode').not().isEmpty().withMessage(messages.OMS0094),
//                 check('inceptionDate').not().isEmpty().withMessage(messages.OMS0163),
//             ];
//         case 'createSecurity':
//         case 'updateSecurity':
//             return [
//                 check('name').not().isEmpty().withMessage(messages.OMS0066),
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0067),
//             ]
//         case 'createTrade':
//             return [
//                 check('trade.accountType').not().isEmpty().withMessage(messages.OMS0074),
//                 check('trade.accountsConcerned').not().isEmpty().withMessage(messages.OMS0075),
//                 check('trade.tradeDirection').not().isEmpty().withMessage(messages.OMS0076),
//                 check('trade.orderType').not().isEmpty().withMessage(messages.OMS0077),
//                 check('trade.security').not().isEmpty().withMessage(messages.OMS0078),
//                 check('trade.quantity').not().isEmpty().withMessage(messages.OMS0079),
//                 check('trade.pricePerShare').not().isEmpty().withMessage(messages.OMS0080),
//                 check('trade.totalPrice').not().isEmpty().withMessage(messages.OMS0081),
//                 check('trade.currency').not().isEmpty().withMessage(messages.OMS0082),
//                 check('trade.broker').not().isEmpty().withMessage(messages.OMS0083),
//                 check('trade.refXRate').not().isEmpty().withMessage(messages.OMS0132),
//                 check('trade.quantityAllocation').not().isEmpty().withMessage(messages.OMS0133),
//                 //allocationBasis validator
//                 check('allocationBasis.allocationTypes').not().isEmpty().withMessage(messages.OMS0136),
//                 check('allocationBasis.totalCashBase').not().isEmpty().withMessage(messages.OMS0137),
//                 check('allocationBasis.totalMktValue').not().isEmpty().withMessage(messages.OMS0138),
//                 check('allocationBasis.totalShareAllocation').not().isEmpty().withMessage(messages.OMS0139),
//                 check('allocationBasis.totalCashRatioBeforeAllocation').not().isEmpty().withMessage(messages.OMS0140),
//                 check('allocationBasis.totalCashRatioAfterAllocation').not().isEmpty().withMessage(messages.OMS0141),
//                 check('allocationBasis.totalQtyBeforeAllocation').not().isEmpty().withMessage(messages.OMS0142),
//                 check('allocationBasis.totalQtyAfterAllocation').not().isEmpty().withMessage(messages.OMS0143),
//                 check('allocationBasis.allocationRows').not().isEmpty().withMessage(messages.OMS0144),
//             ]
//         case 'createComment':
//             return [
//                 check('message').not().isEmpty().withMessage(messages.OMS0088)
//             ]
//         case 'createCurrency':
//             return [
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0095),
//                 check('name').not().isEmpty().withMessage(messages.OMS0096),
//                 check('conversionRate').not().isEmpty().withMessage(messages.OMS0097)
//             ]
//         case 'verifyDailyReport':
//             return [
//                 check('status').not().isEmpty().withMessage(messages.OMS0100),
//             ]
//         case 'createSecurityLink':
//             return [
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0117),
//                 check('securityId').not().isEmpty().withMessage(messages.OMS0118),
//                 check('officeId').not().isEmpty().withMessage(messages.OMS0119),
//             ]
//         case 'updateSecurityLink':
//             return [
//                 check('id').not().isEmpty().withMessage(messages.OMS0127),
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0117),
//                 check('securityId').not().isEmpty().withMessage(messages.OMS0118),
//                 check('officeId').not().isEmpty().withMessage(messages.OMS0119),
//             ]
//         case 'createCurrencyLink':
//             return [
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0191),
//                 check('currencyId').not().isEmpty().withMessage(messages.OMS0189),
//             ]
//         case 'updateCurrencyLink':
//             return [
//                 check('id').not().isEmpty().withMessage(messages.OMS0190),
//                 check('symbol').not().isEmpty().withMessage(messages.OMS0191),
//                 check('currencyId').not().isEmpty().withMessage(messages.OMS0189),
//             ]
//         default:
//             return [];
//     }
// }
// export const checkValidationResult = (req: Request, res: Response, next: NextFunction) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//         return next();
//     }
//     let errorMessages = ''
//     result.array().forEach(error => {
//         errorMessages += error.msg + '. '
//     });
//     return res.status(403).json({ ...apiResponse.error, responseCode: 403, message: errorMessages });
// }
