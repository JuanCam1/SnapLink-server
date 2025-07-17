import type { User } from "../../../prisma/generated/prisma/client";
import { InactiveUserError } from "../../error/inactive-user-error";
import { NotFoundError } from "../../error/not-found-error";
import { UnauthorizedError } from "../../error/un-authorized-error";
import { currentDate } from "../../lib/current-date-hour";
import { prisma } from "../../lib/prisma";
import { generateToken } from "../../lib/token";
import { comparePassword, hashPassword } from "../../util/hash-password";

export const loginDao = async (
  login: LoginModelI,
): Promise<ResponseLoginModelI> => {
  console.log("loginDao", login);

  const user = await prisma.user.findUnique({
    where: {
      email: login.email,
    },
  });

  console.log("user", user);

  if (!user) {
    throw new NotFoundError("user not found");
  }

  if (!user.isActive) {
    throw new InactiveUserError("user inactivo");
  }

  const isPasswordValid = await comparePassword(login.password, user.password);

  if (!isPasswordValid) throw new UnauthorizedError("credentials invalid");

  const userPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = generateToken(userPayload);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};

export const registerDao = async (register: UserModelI): Promise<User> => {
  const dateNow = currentDate();
  const user = await prisma.user.findUnique({
    where: {
      email: register.email,
    },
  });

  if (user) throw new Error("user already exists");

  const passwordHash = await hashPassword(register.password);

  const userCreate = await prisma.user.create({
    data: {
      name: register.name,
      email: register.email,
      password: passwordHash,
      createdAt: dateNow,
      updatedAt: dateNow,
    },
  });

  return userCreate;
};

// export const forgotPassword = async (email: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (!user) throw new NotFoundError("user not found");

//   const resetToken = crypto.randomUUID();
//   const resetExpires = new Date(Date.now() + 60 * 60 * 1000);

//   const userUpdate = await prisma.user.update({
//     where: { id: user.id },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       isActive: true,
//     },
//     data: {
//       resetPasswordToken: resetToken,
//       resetPasswordExpires: resetExpires,
//     },
//   });

//   // await sendPasswordResetEmail(email, resetToken);
//   return userUpdate;
// };

// export const resetPassword = async (email: string, password: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (!user) throw new NotFoundError("user not found");

//   const passwordHash = await hashPassword(password);

//   const userUpdate = await prisma.user.update({
//     where: { id: user.id },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       isActive: true,
//     },
//     data: {
//       password: passwordHash,
//       resetPasswordToken: null,
//       resetPasswordExpires: null,
//     },
//   });

//   return userUpdate;
// };
