import { Router } from "express";

import { linkSchema, queryLinkSchema } from "./link-middleware";
import { validationErrors } from "../../middleware/validation-middleware";
import { createLinkController, deleteLinkController, getLinkByIdUserController, stateChangeLinkController, updateLinkController } from "./link-controller";
import { idSchema } from "../../middleware/id-middleware";


const linkRouter = Router();

linkRouter.post("/", linkSchema, validationErrors, createLinkController);
linkRouter.put("/", idSchema, linkSchema, validationErrors, updateLinkController);
linkRouter.get("/", queryLinkSchema, validationErrors, getLinkByIdUserController);
linkRouter.get("/:id", idSchema, validationErrors, stateChangeLinkController);
linkRouter.delete("/:id", idSchema, validationErrors, deleteLinkController);

export default linkRouter;