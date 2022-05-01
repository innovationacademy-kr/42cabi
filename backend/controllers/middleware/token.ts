import { jwtToken } from "./jwt";

export const TOKEN_EXPIRED: number = -3;
export const TOKEN_INVALID: number = -2;

export interface JwtPayload {
  user_id: number;
  intra_id: string;
  auth?: boolean | undefined;
  email?: string;
  phone?: string | undefined;
  access?: string;
  refresh?: string;
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
    }
    return decoded;
  } catch (e) {
    console.log('verify - ', e);
    res.status(400).send({ error: e });
  }
}

export const verifyAndRedirect = async (req:any, res: any): Promise<JwtPayload | undefined> => {
  try {
    // console.log(req.cookies);
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
    res.state(400).redirect("/");
  }
}