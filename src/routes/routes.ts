import { Router } from "express";
import authRouter from "../app/auth/auth-route";
import linkRouter from "../app/link/link-route";

const router = Router();

router.use("/auth", authRouter);
router.use("/link", linkRouter);

export default router;
