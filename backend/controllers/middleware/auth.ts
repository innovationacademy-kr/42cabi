import { jwtToken } from "./jwt";

const TOKEN_EXPIRED: number = -3;
const TOKEN_INVALID: number = -2;

export default function authCheck(req: any, res: any, next: any) {
  if (req.user) {
    console.log(req.user);
    console.log("success auth");
    next();
  } else {
    console.log("failed to auth");
    res.status(401).json({
      authenticated: false,
      message: "User has not been authenticated",
    });
  }
}

export const authUtil = async (req:any, res:any, next:any) => {
  try {
    console.log('authUtil');
    let token = req.cookies.accessToken;
    // console.log(req.cookies);
    // console.log(req.session.passport);
    if (!token) {
      return res.status(400).json({ error: "Permission Denied" });
    }
    const user = await jwtToken.verify(token);
    console.log(user);
    if (user === TOKEN_EXPIRED) {
      return res.status(419).send({ error: "Expired token" });
    } else if (user === TOKEN_INVALID) {
      return res.status(401).send({ error: "Invalid token" });
    }
    next();
  } catch (e) {
    console.log('authUtil', e);
  }
}
