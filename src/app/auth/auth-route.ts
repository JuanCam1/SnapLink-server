import { Router } from "express";
import {
	login,
	register,
} from "./auth-controller";
import {
	loginSchema,
	registerSchema,
} from "./auth-middleware";
import { validationErrors } from "../../middleware/validation-middleware";

const authRouter = Router();

authRouter.post("/login", loginSchema, validationErrors, login);
authRouter.post("/register", registerSchema, validationErrors, register);
// authRouter.post(
// 	"/forgot-password",
// 	forgotPasswordSchema,
// 	validationErrors,
// 	forgotPassword,
// );
// authRouter.post(
// 	"/reset-password",
// 	loginSchema,
// 	validationErrors,
// 	resetPassword,
// );

export default authRouter;
