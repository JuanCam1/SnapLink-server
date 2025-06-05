import jwt, { type Secret } from "jsonwebtoken";
import Config from "../util/config";
import { JWTEnum } from "../const/jwt-const";

const config = Config.getInstance();

export const generateToken = (payload: PayloadModelI): string => {
	const secret: Secret = config.get("jwtSecret");

	return jwt.sign(payload, secret, { expiresIn: JWTEnum.EXPIRES_IN });
};

export const generateRefreshToken = (payload: PayloadModelI): string => {
	const secret: Secret = config.get("jwtRefreshSecret");

	return jwt.sign(payload, secret, { expiresIn: JWTEnum.REFRESH_EXPIRES_IN });
};
