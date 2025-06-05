import { NotFoundError } from "../../error/not-found-error";
import { capitalizeText } from "../../lib/capitalize";
import { prisma } from "../../lib/prisma";

export const companyDao = async (): Promise<CompanyI> => {
	const company = await prisma.company.findUnique({
		where: {
			id: 1,
		},
	});

	if (!company) throw new NotFoundError("No se encontró la data");

	return company;
};

export const updateCompanyDao = async (
	payload: CompanyI,
): Promise<CompanyI> => {
	const dataCapitalize: CompanyI = {
		id: Number(payload.id),
		name: capitalizeText(payload.name),
		address: payload.address ? capitalizeText(payload.address) : null,
		description: payload.description
			? capitalizeText(payload.description)
			: null,
		logo: payload.logo ? payload.logo : null,
		city: payload.city ? capitalizeText(payload.city) : null,
		phone: payload.phone,
		email: payload.email,
		website: payload.website ? capitalizeText(payload.website) : null,
		nit: payload.nit,
		postalCode: payload.postalCode ? payload.postalCode : null,
		randomId: payload.randomId ? payload.randomId : null,
	};

	const company = await prisma.company.update({
		where: {
			id: Number(payload.id),
		},
		data: dataCapitalize,
	});

	return company;
};
