import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

function _hash(data, hashKey) {
  return bcrypt.hashSync(data, Number(hashKey));
}

export function hashPassword(pass) {
  return _hash(pass, process.env.PASS_SALT);
}

export function hashToken(token) {
  return _hash(token, process.env.TOKEN_SALT);
}
