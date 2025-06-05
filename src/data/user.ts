import { prisma } from "../lib/prisma";
import { hashPassword } from "../util/hash-password";

export const userData = async () => {
	const password = await hashPassword("Password123.");
	const count = await prisma.user.count();
	if (count > 0) return;

	await prisma.user.create({
		data: {
			id: "1",
			email: "juanc@gmail.com",
			name: "Juan Carlos",
			password: password,
			isActive: true,
		},
	});
};
