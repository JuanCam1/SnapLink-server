import {
	loginDao,
	registerDao,
} from "./auth-dao";

export const loginService = async (login: LoginModelI) => {
	return loginDao(login);
};

export const registerService = async (register: UserModelI) => {
	return registerDao(register);
};

// export const forgotPasswordService = async (email: string) => {
// 	return forgotPassword(email);
// };

// export const resetPasswordService = async (email: string, password: string) => {
// 	return resetPassword(email, password);
// };
