import { companyDao, updateCompanyDao } from "./company-dao";

export const companyService = async () => {
	return await companyDao();
};

export const updateCompanyService = async (payload: CompanyI) => {
	return await updateCompanyDao(payload);
};
