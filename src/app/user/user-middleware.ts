import { check } from "express-validator";

export const userUpdateSchema = [
  check("name")
    .isLength({ min: 2, max: 32 })
    .withMessage("Nombre debe tener entre 2 y 32 caracteres"),
  check("email").isEmail().withMessage("EL email ingresado no es valido"),
  check("password")
    .isLength({ min: 5, max: 16 })
    .withMessage("La contraseña debe tener entre 5 y 16 caracteres"),
];