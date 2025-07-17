import { Router } from "express";

import { validationErrors } from "../../middleware/validation-middleware";
import { idSchema } from "../../middleware/id-middleware";
import { userUpdateSchema } from "./user-middleware";
import { deleteUserController, getByIdUserController, stateChangeUserController, updateUserController } from "./user-controller";


const userRouter = Router();

userRouter.put("/", userUpdateSchema, validationErrors, updateUserController);
userRouter.get("/:id", idSchema, validationErrors, getByIdUserController);
userRouter.get("/state/:id", idSchema, validationErrors, stateChangeUserController);
userRouter.delete("/:id", idSchema, validationErrors, deleteUserController);

export default userRouter;