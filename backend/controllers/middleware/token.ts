import passport from "passport";
import { userInfo } from "../../models/user";
import { successLogin } from "../routers/route";
import { jwtToken } from "./jwt";

const TOKEN_EXPIRED: number = -3;
const TOKEN_INVALID: number = -2;

interface JwtPayload {
  user_id: number;
  intra_id: string;
  auth?: boolean | undefined;
  email: string;
  phone?: string | undefined;
  access: string;
  refresh: string;
}

export const signin = async (req: any, res: any) => {
  try{
    // console.log('siginin - ', req.headers);
    // console.log(req.cookies);
    // console.log(req.session);
    if (!req.cookies || !req.cookies.accessToken) {
      passport.authenticate("42")(req, res);
    } else {
      const result = await jwtToken.verify(req.cookies.accessToken);
      // console.log(result);
      if (typeof result === "number") {
        return passport.authenticate("42")(req, res);
      } else {
        // return res.redirect("/auth/login/callback"); //slow
        return successLogin(req, res);
      }
    }
  } catch (e) {
    console.log('signin - ', e);
  }
}

export const verify = async (req:any, res: any): Promise<JwtPayload | undefined> => {
  try {
    // console.log("token - verify", req.session, req.cookies);
    const decoded = await jwtToken.verify(req.cookies.accessToken) as JwtPayload;
    if (typeof decoded === "number"){
      if (decoded === TOKEN_EXPIRED) {
        res.status(419).send({ error: "Expired token" });
      } else if (decoded === TOKEN_INVALID) {
        res.status(401).send({ error: "Invalid token" });
      }
      return undefined;
    } else {
      return decoded;
    }
  } catch (e) {
    console.log('verify - ', e);
  }
}

export const verifyAndRedirect = async (req:any, res: any): Promise<JwtPayload | undefined> => {
  try {
    console.log(req.cookies);
    const decoded = await jwtToken.verify(req.cookies.accessToken) as JwtPayload;
    if (typeof decoded === "number"){
      if (decoded === TOKEN_EXPIRED) {
        res.status(419).redirect("/");
      } else if (decoded === TOKEN_INVALID) {
        res.status(401).redirect("/");
      }
    } else {
      return decoded;
    }
    return undefined;
  } catch (e) {
    console.log('verify - ', e);
  }
}