import passport from "passport";
import { userList } from "../../models/user";
import { jwtToken } from "./jwt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { secret } from "../config/secretkey";

const env = process.env;
if (env.USER === "ec2-user") {
  dotenv.config({ path: env.PWD + "/.env" }); //dep
} else {
  dotenv.config(); //local
}

const Strategy = require("passport-42");

passport.serializeUser(function (user: any, done: any) {
  return done(null, user);
});
passport.deserializeUser(function (user: any, done: any) {
  return done(null, user);
});

const FortyTwoOpt = {
  clientID: env.FORTYTWO_APP_ID,
  clientSecret: env.FORTYTWO_APP_SECRET,
  callbackURL: env.CALLBACK_URL,
  passReqToCallback: true,
};

const FortyTwoVerify = async (
  req: any,
  accessToken: any,
  refreshToken: any,
  profile: any,
  cb: any
) => {
  try{
    console.log('forty two - ');
    const userInfo = {
      user_id: profile.id,
      intra_id: profile.username,
      // email: profile.emails[0].value,
      // access: accessToken,
      // refresh: refreshToken,
    };
    const result = await jwtToken.sign(userInfo);
    // console.log(result);
    req.res.cookie("accessToken", result.accessToken, { httpOnly: true, secure: true });
    req.res.cookie("refreshToken", result.refreshToken, {httpOnly: true, secure: true });
    // console.log('cookkiiiiiiiiiieeeeeeeeeeeee');
    // console.log(req.cookies);
    return cb(null, userInfo);
  } catch (e:any) {
    console.log('fortyTwo', e);
  }
};

export default function passportUse() {
  passport.use(new Strategy(FortyTwoOpt, FortyTwoVerify));
}
