import type { Request, Response } from "express";
import { matchedData } from "express-validator";
import { StatusCodes } from "http-status-codes";

import { validateErrorCatch } from "../../util/validateError";
import { sendResponse } from "../../util/sendResponse";
import { loggerInfo } from "../../lib/logger";
import { deleteUserService, getByIdUserService, stateChangeUserService, updateUserService } from "./user-service";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = matchedData<UserUpdateModelI>(req);
    const userUpdated = await updateUserService(user);
    sendResponse(res, "success", StatusCodes.OK, "Usuario actualizado", userUpdated);
    loggerInfo("Usuario actualizado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}


export const getByIdUserController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const link = await getByIdUserService(id);
    sendResponse(res, "success", StatusCodes.OK, "Usuario encontrado", link);
    loggerInfo("Usuario encontrado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const stateChangeUserController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const state = await stateChangeUserService(id);
    sendResponse(res, "success", StatusCodes.OK, "Estado cambiado", state);
    loggerInfo("Estado cambiado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const state = await deleteUserService(id);
    sendResponse(res, "success", StatusCodes.OK, "Usuario eliminado", state);
    loggerInfo("Usuario eliminado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
} 