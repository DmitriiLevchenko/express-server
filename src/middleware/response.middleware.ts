import { ServerErrEnum } from "../common";
import { ApiResHelper } from "../helpers";



export const responseMiddleware = (req, res, next) => {
  try {
    if (!res.data) {
      throw new ApiResHelper(500, ServerErrEnum.SERVER_RESPONSE_EMPTY)
    } else {
      res.status(200).json(res.data);
    }
  } catch (e) {
    next(e);
  }
}
