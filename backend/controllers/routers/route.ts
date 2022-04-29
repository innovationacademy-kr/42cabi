import passport from "passport";
import authCheck, { authUtil } from "../middleware/auth";
import { userList, userInfo, lentCabinetInfo } from "../../models/user";
import { checkUser } from "../../models/query";
import { userRouter } from "./user";
import { signin, verify, verifyAndRedirect } from "../middleware/token";

export const router = userRouter;

// router.get("/auth/login", passport.authenticate("42")); // intra 로그인
router.get("/auth/login", signin); // intra 로그인
router.post("/", authCheck, (req: any, res: any) => {
  res.json({ test: req.user });
});
router.get(
  "/auth/login/callback", // intra 로그인 시도 후 처리
  passport.authenticate("42", {
    failureMessage: "LOGIN FAILED :(",
    failureRedirect: "/",
  }),
  // (req:any, res:any) => successLogin
  async (req: any, res: any) => {
    try {
      // console.log(req.headers);
      // console.log(req.session);
      console.log(req.cookies);
      successLogin(req, res);
      // res.redirect("/lent");
      // const decoded = await verifyAndRedirect(req, res);
      // if (decoded === undefined) {
      //   return ;
      // }
      // const resp:lentCabinetInfo = await checkUser(decoded);
      // if (resp.lent_id !== -1) {
      //   // lent_id가 -1이 아니라면 -> 빌린 사물함이 있음
      //   return res.redirect("/return"); // /return으로 이동
      // } else {
      //   return res.redirect("/lent"); // lent_id === -1 -> 빌린 사물함이 없음 -> /lent로 이동
      // }
    } catch (err) {
      console.log('success - ', err);
      return res.status(400).redirect("/");
    }
  }
  
);
router.post("/auth/logout", async (req: any, res: any) => {
  req.logout();
  
  // await res.cookie("accessToken", "");
  // res.cookie("accessToken", "", "expires: 0");
  // req.cookies.accessToken = null;
  // req.cookies.refreshToken = null;
  // req.session.destroy();
  res.redirect("/");
});

export const successLogin = async (req: any, res: any) => {
  try {
    console.log('successLogin', req.session, req.cookies);
    const decoded = await verify(req, res);
    if (decoded === undefined) {
      return ;
    }
    const resp:lentCabinetInfo = await checkUser(decoded);
    if (resp.lent_id !== -1) {
      // lent_id가 -1이 아니라면 -> 빌린 사물함이 있음
      return res.redirect("/return"); // /return으로 이동
    } else {
      return res.redirect("/lent"); // lent_id === -1 -> 빌린 사물함이 없음 -> /lent로 이동
    }
  } catch (err) {
    console.log('success - ', err);
    return res.status(400).redirect("/");
  }
}