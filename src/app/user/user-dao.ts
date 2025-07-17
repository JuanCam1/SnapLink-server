import { prisma } from "../../lib/prisma";
import { NotFoundError } from "../../error/not-found-error";
import { capitalizeText } from "../../lib/capitalize";
import { currentDate } from "../../lib/current-date-hour";

export const updateUserDao = async (user: UserUpdateModelI) => {
  const currentNow = currentDate();
  const userDb = await prisma.user.findUnique({
    where: {
      id: user.id
    },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  const nameNew = capitalizeText(user.name) !== userDb.name ? capitalizeText(user.name) : userDb.name;
  const emailNew = user.email !== userDb.email ? user.email : userDb.email;
  const passwordNew = user.password !== userDb.password ? user.password : userDb.password;

  const UserUpdate = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      id: user.id,
      name: nameNew,
      email: emailNew,
      password: passwordNew,
      updatedAt: currentNow,
    }
  });

  return UserUpdate;
};

export const getByIdUserDao = async (id: string) => {
  const userDb = await prisma.user.findUnique({
    where: { id },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  return userDb;
};

export const stateChangeUserDao = async (id: string) => {
  const userDb = await prisma.user.findUnique({
    where: { id },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  const user = await prisma.user.update({
    where: { id },
    data: {
      isActive: !userDb.isActive,
    },
  });

  return user;
};

export const deleteUserDao = async (id: string) => {
  const userDb = await prisma.user.findUnique({
    where: { id },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};
