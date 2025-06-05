import { check } from "express-validator";

export const updateCompanySchema = [
	check("id").exists(),
	check("name").exists(),
	check("address").optional(),
	check("description").optional(),
	check("logo").optional(),
	check("city").exists(),
	check("phone").exists(),
	check("email").exists(),
	check("website").optional(),
	check("nit").exists(),
	check("postalCode").optional(),
	check("randomId").optional(),
];
