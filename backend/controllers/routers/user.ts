import express from "express";
import {
  cabinetList,
  userList,
  userInfo,
  lentCabinetInfo,
} from "../../models/user";
import {
  createLentLog,
  createLent,
  getLentUser,
  getUser,
  activateExtension,
} from "../../models/query";

export const userRouter = express.Router();

// 전체 사물함에 대한 정보
// TODO : get으로 바꿔야하지 않을까?
userRouter.post("/api/cabinet", (req: any, res: any) => {
  if (!cabinetList) {
    res.status(400).send({ error: "no cabinet information" });
  } else {
    res.send(cabinetList);
  }
});

// 현재 모든 대여자들의 정보
userRouter.post("/api/lent_info", async (req: any, res: any) => {
  try {
    if (!req.session || !req.session.passport || !req.session.passport.user) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    getLentUser().then((resp: any) => {
      // isLent : 빌린 사물함 인덱스. 빌린게 없다면 -1 리턴
      const isLent = resp.lentInfo.findIndex(
        (cabinet: any) =>
          cabinet.lent_user_id == req.session.passport.user.user_id
      );
      res.send({ lentInfo: resp.lentInfo, isLent: isLent });
    });
  } catch (err: any) {
    console.log(err);
    res.status(400);
    throw err;
  }
});

// 특정 사물함을 빌릴 때 요청
userRouter.post("/api/lent", async (req: any, res: any) => {
  let errno: number;
  try {
    if (!req.session || !req.session.passport || !req.session.passport.user) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    await getUser(userList[idx]).then(async (resp: any) => {
      if (resp.lent_id === -1) {
        await createLent(req.body.cabinet_id, req.session.passport.user).then(
          (response: any) => {
            if (response && response.errno === -1) {
              errno = -2;
            } else {
              errno = req.body.cabinet_id;
            }
          }
        );
        res.send({ cabinet_id: errno });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ cabinet_id: req.cabinet_id });
    throw err;
  }
});

// 특정 사용자가 현재 대여하고 있는 사물함의 정보
userRouter.post("/api/return_info", async (req: any, res: any) => {
  try {
    if (!req.session || !req.session.passport || !req.session.passport.user) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    // 로그인한 유저 index 찾기
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access // accessToken
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" }); // 토큰 만료 에러 아닌가??
      return;
    }
    getUser(userList[idx]).then((resp: any) => {
      // resp: lentCabinetInfo 해도 되는건가?
      res.send(resp);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});

// 특정 사물함을 반납할 때 요청
userRouter.post("/api/return", (req: any, res: any) => {
  try {
    if (!req.session || !req.session.passport || !req.session.passport.user) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    createLentLog(userList[idx]).then((resp: any) => {
      res.sendStatus(200);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});

// 적절한 유저가 페이지를 접근하는지에 대한 정보
userRouter.post("/api/check", async (req: any, res: any) => {
  if (!req.session || !req.session.passport || !req.session.passport.user) {
    res.status(400).send({ error: "Permission Denied" });
  } else {
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    } else await res.send({ user: userList[idx] });
  }
});

userRouter.post("/api/extension", async (req: any, res: any) => {
  try {
    if (!req.session || !req.session.passport || !req.session.passport.user) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    const idx = userList.findIndex(
      (user: userInfo) => user.access === req.session.passport.user.access
    );
    if (idx === -1) {
      res.status(400).send({ error: "Permission Denied" });
      return;
    }
    activateExtension(userList[idx]).then((resp: any) => {
      res.sendStatus(200);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});
