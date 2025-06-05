import { userData } from "./user";

export const dataInit = async () => {
	try {
		await userData();
	} catch (error) {
		console.log(error);
		throw new Error("Error al inicializar la base de datos");
	}
};
