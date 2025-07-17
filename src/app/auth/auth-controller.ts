import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
	loginService,
	registerService,
} from "./auth-service";
import { sendResponse } from "../../util/sendResponse";
import { matchedData } from "express-validator";
import { validateErrorCatch } from "../../util/validateError";
import type { User } from "../../../prisma/generated/prisma/client";

export const login = async (req: Request, res: Response) => {
	try {
		const data = matchedData<LoginModelI>(req);

		const dataLogin = await loginService(data);
		sendResponse<ResponseLoginModelI>(
			res,
			"success",
			StatusCodes.OK,
			"dataUser",
			dataLogin,
		);
	} catch (error) {
		validateErrorCatch(res, req, error);
	}
};

export const register = async (req: Request, res: Response) => {
	try {
		const register = matchedData<UserModelI>(req);
		const builders = await registerService(register);
		sendResponse<User>(
			res,
			"success",
			StatusCodes.OK,
			"user created",
			builders,
		);
	} catch (error) {
		validateErrorCatch(res, req, error);
	}
};

// export const forgotPassword = async (req: Request, res: Response) => {
// 	try {
// 		const { email } = matchedData<{ email: string }>(req);
// 		const buildersCreated = await forgotPasswordService(email);
// 		sendResponse(
// 			res,
// 			"success",
// 			StatusCodes.OK,
// 			" Password reseted",
// 			buildersCreated,
// 		);
// 	} catch (error) {
// 		validateErrorCatch(res, req, error);
// 	}
// };

// export const resetPassword = async (req: Request, res: Response) => {
// 	try {
// 		const { email, password } = matchedData<LoginModelI>(req);
// 		const user = await resetPasswordService(email, password);
// 		sendResponse(res, "success", StatusCodes.OK, "Password reseted", user);
// 	} catch (error) {
// 		validateErrorCatch(res, req, error);
// 	}
// };
