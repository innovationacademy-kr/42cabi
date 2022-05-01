import passport from "passport";
import authCheck from "../middleware/auth";
import { lentCabinetInfo, userInfo } from "../../models/user";
import { checkUser } from "../../models/query";
import { userRouter } from "./user";
import { verify, verifyAndRedirect } from "../middleware/token";
import { jwtToken } from "../middleware/jwt";

export const router = userRouter;

router.get("/auth/login", authCheck, passport.authenticate("42")); // intra 로그인

router.get(
  "/auth/login/callback", // intra 로그인 시도 후 처리
  passport.authenticate("42", {
    failureMessage: "LOGIN FAILED :(",
    failureRedirect: "/",
  }),
  async (req: any, res: any) => {
    console.log('login success - ');
    try {
      // console.log("callback - ", req.session);
      verifyLent(res, req.session.passport.user);
    } catch (err) {
      console.log('success - ', err);
      res.status(400).redirect("/");
    }
  }
);
router.post("/auth/logout", async (req: any, res: any) => {
  try {
    req.logout();
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

export const verifyLent = async (res: any, decoded:userInfo) => {
  try {
    console.log('main redirection');
    const resp:lentCabinetInfo = await checkUser(decoded);
    // console.log(resp);
    if (resp.lent_id !== -1) {
      // lent_id가 -1이 아니라면 -> 빌린 사물함이 있음
      return res.redirect("/return"); // /return으로 이동
    } else {
      return res.redirect("/lent"); // lent_id === -1 -> 빌린 사물함이 없음 -> /lent로 이동
    }
  } catch (err) {
    console.log('successError - ', err);
    res.status(400).redirect("/");
  }
}
