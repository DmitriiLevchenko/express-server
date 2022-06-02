import { Result, ValidationError } from "express-validator";

export class ApiResHelper extends Error {
  public status_code: number
  public message: string
  public errors: Array<string>
  constructor(status_code: number = 200, message: string = '', errors: Array<string> | Result<ValidationError> = null) {
    super(message)
  }

  static BadRequest(message = "", errors = []) {
    return new ApiResHelper(400, message, errors);
  }

  static UnauthorizedError(errors = []) {
    return new ApiResHelper(401, "User not authorized", errors);
  }

  static ForbiddenError(message = "Incorrect credentials", errors = []) {
    return new ApiResHelper(403, message, errors);
  }

  static InternalError(message = "Something went wrong", errors = []) {
    return new ApiResHelper(500, message, errors);
  }

}