import { validationResult } from "express-validator";
import { ApiResHelper } from "../../helpers";

export const reqValidationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  console.log('express validation')
  if (!errors.isEmpty()) {
    return next(new ApiResHelper(400, 'Invalid data', errors));
  }
  next();
}
