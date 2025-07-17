import type { Request, Response } from "express";
import { matchedData } from "express-validator";
import { StatusCodes } from "http-status-codes";

import { validateErrorCatch } from "../../util/validateError";
import { countLinksService, createLinkService, deleteLinkService, getLinkByIdUserService, stateChangeLinkService, updateLinkService } from "./link-service";
import { sendResponse } from "../../util/sendResponse";
import { loggerInfo } from "../../lib/logger";


export const createLinkController = async (req: Request, res: Response) => {
  try {
    const link = matchedData<LinkModelI>(req);
    const linkCreated = await createLinkService(link);
    sendResponse(res, "success", StatusCodes.OK, "Enlace creado", linkCreated);
    loggerInfo("Enlace creado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const updateLinkController = async (req: Request, res: Response) => {
  try {
    const link = matchedData<LinkUpdateModelI>(req);
    const linkUpdated = await updateLinkService(link);
    sendResponse(res, "success", StatusCodes.OK, "Enlace actualizado", linkUpdated);
    loggerInfo("Enlace actualizado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const getLinkByIdUserController = async (req: Request, res: Response) => {
  try {
    const query = matchedData<getLinksByIdUserModelI>(req);
    const getLinks = await getLinkByIdUserService(query);
    sendResponse(res, "success", StatusCodes.OK, "Enlaces encontrados", getLinks);
    loggerInfo("Enlaces encontrados", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const countLinksController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const link = await countLinksService(id);
    sendResponse(res, "success", StatusCodes.OK, "Enlace actualizado", link);
    loggerInfo("Enlaces encontrados", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const stateChangeLinkController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const state = await stateChangeLinkService(id);
    sendResponse(res, "success", StatusCodes.OK, "Estado cambiado", state);
    loggerInfo("Estado cambiado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
}

export const deleteLinkController = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData<{ id: string }>(req);
    const state = await deleteLinkService(id);
    sendResponse(res, "success", StatusCodes.OK, "Enlace eliminado", state);
    loggerInfo("Enlace eliminado", req, null);
  } catch (error) {
    validateErrorCatch(res, req, error)
  }
} 