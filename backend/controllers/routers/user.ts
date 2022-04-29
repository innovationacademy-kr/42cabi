import express from "express";
import { cabinetList } from "../../models/user";
import {
  createLentLog,
  createLent,
  getLentUser,
  getUser,
  activateExtension,
} from "../../models/query";
import { authUtil } from "../middleware/auth";
import { verify } from "../middleware/token";

export const userRouter = express.Router();

// 전체 사물함에 대한 정보
userRouter.post("/api/cabinet", authUtil, (req: any, res: any) => {
  if (!cabinetList) {
    res.status(400).send({ error: "no cabinet information" });
  } else {
    res.send(cabinetList);
  }
});

// 현재 모든 대여자들의 정보
userRouter.post("/api/lent_info", authUtil, async (req: any, res: any) => {
  try {
    getLentUser().then(async (resp: any) => {
      const decoded = await verify(req, res);
      if (decoded === undefined) {
        return ;
      }
      const isLent = resp.lentInfo.findIndex((cabinet: any) => cabinet.lent_user_id == decoded.user_id);
      res.send({ lentInfo: resp.lentInfo, isLent: isLent });
    });
  } catch (err: any) {
    console.log(err);
    res.status(400);
    throw err;
  }
});

// 특정 사물함을 빌릴 때 요청
userRouter.post("/api/lent", authUtil, async (req: any, res: any) => {
  let errno: number;
  try {
    const decoded = await verify(req, res);
    if (decoded === undefined) {
      return ;
    }
    await getUser(decoded).then(async (resp: any) => {
      if (resp.lent_id === -1) {
        await createLent(req.body.cabinet_id, decoded).then(
          (response: any) => {
            if (response && response.errno === -1) {
              errno = -2;
            } else {
              errno = req.body.cabinet_id;
            }
          }
        );
        res.send({ cabinet_id: errno });
      } else {
        res.send({ cabinet_id: -1 });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ cabinet_id: req.cabinet_id });
    throw err;
  }
});

// 특정 사용자가 현재 대여하고 있는 사물함의 정보
userRouter.post("/api/return_info", authUtil, async (req: any, res: any) => {
  try {
    const decoded = await verify(req, res);
    if (decoded === undefined) {
      return ;
    }
    getUser(decoded).then((resp: any) => {
      res.send(resp);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});

// 특정 사물함을 반납할 때 요청
userRouter.post("/api/return", authUtil, async (req: any, res: any) => {
  try {
    const decoded = await verify(req, res);
    if (decoded === undefined) {
      return ;
    }
    createLentLog(decoded).then((resp: any) => {
      res.sendStatus(200);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});

// 적절한 유저가 페이지를 접근하는지에 대한 정보
userRouter.post("/api/check", authUtil);

userRouter.post("/api/extension", authUtil, async (req: any, res: any) => {
  try {
    const decoded = await verify(req, res);
    if (decoded === undefined) {
      return ;
    }
    activateExtension(decoded).then((resp: any) => {
      res.sendStatus(200);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
    throw err;
  }
});
