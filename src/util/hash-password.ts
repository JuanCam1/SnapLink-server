export const hashPassword = async (password: string) => {
	return await Bun.password.hash(password, {
		algorithm: "bcrypt",
		cost: 4,
	});
};

export const comparePassword = async (password: string, hash: string) => {
	return await Bun.password.verify(password, hash);
};
