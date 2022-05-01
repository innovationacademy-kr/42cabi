import randToken from "rand-token";
import jwt from "jsonwebtoken";
import { secret } from "../config/secretkey";
import { userInfo } from "../../models/user";
import { TOKEN_EXPIRED, TOKEN_INVALID } from "./token";

export const jwtToken = {
  sign : async (user: userInfo) => {
    const result = {
      accessToken: jwt.sign(user, secret.secretKey, secret.options),
      refreshToken: randToken.uid(256),
    };
    // console.log("jwt sign");
    return result;
  },
  verify: async (token: string) => {
    let decoded;
    try {
      // console.log("jwt verify");
      decoded = jwt.verify(token, secret.secretKey);
    } catch (err: any) {
      if (err.message === "jwt expired") {
        // console.log('expired token');
        return TOKEN_EXPIRED;
      } else if (err.message === "invalid token") {
        // console.log('invalid token');
        return TOKEN_INVALID;
      } else {
        // console.log('invalid token');
        return TOKEN_INVALID;
      }
    }
    return decoded;
  }
}