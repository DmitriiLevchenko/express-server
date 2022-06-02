import express from 'express'

import { UserEntity } from '../../database/entities';
import { ApiResHelper, tokenHelper } from '../../helpers';


export default (req: express.Request, res: express.Response, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return next(ApiResHelper.UnauthorizedError());
  }
  const accessToken = authHeader.split(" ")[1]; // Bearer token

  if (!accessToken) {
    return next(ApiResHelper.UnauthorizedError());
  }
  const userData: Partial<UserEntity> = tokenHelper.validateAccessToken(accessToken);

  if (!userData) {
    return next(ApiResHelper.ForbiddenError());
  }

  // @ts-ignore: error message
  req.user = userData
  next()


}


