import { verifyLent } from "../routers/route";
import { jwtToken } from "./jwt";
import { verify } from "./token";
import { JwtPayload } from "./token";

export default async function authCheck(req: any, res: any, next: any) {
  // console.log('authCheck!');
  if (!req.cookies || !req.cookies.accessToken) {
    next();
  } else {
    const result = await jwtToken.verify(req.cookies.accessToken) as JwtPayload;
    if (typeof result === "number" || typeof result === "undefined" || typeof result === "string") {
      next();
    } else {
      // console.log('result = ', result);
      verifyLent(res, result);
    }
  }
}

export const authUtil = async (req:any, res:any, next:any) => {
  try {
    // console.log('authUtil');
    let token = req.cookies.accessToken;
    // console.log(req.cookies);
    // console.log(req.session.passport);
    if (!token) {
      return res.status(400).json({ error: "Permission Denied" });
    }
    if (!verify(req, res)){
      return ;
    }
    next();
  } catch (e) {
    console.log('authUtil', e);
  }
}
