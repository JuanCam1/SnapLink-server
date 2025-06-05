import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { companyService, updateCompanyService } from "./company-service";
import { sendResponse } from "../../util/sendResponse";
import { matchedData } from "express-validator";
import { validateErrorCatch } from "../../util/validateError";

export const getCompany = async (_req: Request, res: Response) => {
	try {
		const company = await companyService();
		sendResponse(
			res,
			"success",
			StatusCodes.OK,
			"Información de la empresa",
			company,
		);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const updateCompany = async (req: Request, res: Response) => {
	try {
		const payload = matchedData<CompanyI>(req);
		const company = await updateCompanyService(payload);
		sendResponse(
			res,
			"success",
			StatusCodes.OK,
			"Información de la empresa actualizada",
			company,
		);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};
