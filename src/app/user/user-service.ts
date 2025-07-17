import { deleteUserDao, getByIdUserDao, stateChangeUserDao, updateUserDao } from "./user-dao";


export const updateUserService = async (User: UserUpdateModelI) => {
  return await updateUserDao(User);
};

export const getByIdUserService = async (id: string) => {
  return await getByIdUserDao(id);
};

export const stateChangeUserService = async (id: string) => {
  return await stateChangeUserDao(id);
};

export const deleteUserService = async (id: string) => {
  return await deleteUserDao(id);
};
