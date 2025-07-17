import { Router } from "express";
import authRouter from "../app/auth/auth-route";
import linkRouter from "../app/link/link-route";
import userRouter from "../app/user/user-route";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/link", linkRouter);

export default router;
