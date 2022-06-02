import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { TokenRepository } from "../../database/repositories";



dotenv.config();
class TokenHelper {
  generateTokens(payload: any) {
    //console.log('process.env', process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE_TIME || '15m',
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_LIFE_TIME || '14d',
    });

    return {
      refreshToken,
      accessToken,
    };
  }

  async saveToken(refreshToken: string, userId: string) {
    const tokenData = await TokenRepository.findOneBy({ userId });
    return TokenRepository.save({
      ...tokenData,
      refreshToken,
      userId
    });
  }
  async removeToken(refreshToken: string) {
    const response = await TokenRepository.delete({ refreshToken });
    return response;
  }

  validateAccessToken(token: string) {
    console.log('token', token)
    const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return userData;

  }
  validateRefreshToken(token: string) {

    const userData = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    return userData;

  }
}

export const tokenHelper = new TokenHelper()