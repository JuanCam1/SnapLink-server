import { check } from "express-validator";

export const loginSchema = [
	check("email").isEmail().withMessage("Invalid email"),
	check("password")
		.isLength({ min: 6, max: 16 })
		.withMessage("Password must be at least 6 characters"),
];

export const registerSchema = [
	check("name")
		.isLength({ min: 2, max: 32 })
		.withMessage("Name must be at least 2 characters"),
	check("email").isEmail().withMessage("Invalid email"),
	check("password")
		.isLength({ min: 6, max: 16 })
		.withMessage("Password must be at least 6 characters"),
];

export const forgotPasswordSchema = [
	check("email").isEmail().withMessage("Invalid email"),
];
