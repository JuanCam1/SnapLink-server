import { Router } from "express";
import { updateCompany, getCompany } from "./company-controller";
import { updateCompanySchema } from "./company-middleware";
import { validationErrors } from "../../middleware/validation-middleware";

const companyRouter = Router();

companyRouter.get("/", getCompany);
companyRouter.patch("/", updateCompanySchema, validationErrors, updateCompany);

export default companyRouter;
