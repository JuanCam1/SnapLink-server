import { Router } from "express";
import authRouter from "../app/auth/auth-route";

const router = Router();

router.use("/auth", authRouter);

export default router;
