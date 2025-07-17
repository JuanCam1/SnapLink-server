import { check, query } from "express-validator";

export const linkSchema = [
  check("title").exists().withMessage("El campo nombre es obligatorio"),
  check("description")
    .exists()
    .withMessage("El campo descripcion es obligatorio"),
  check("userId").exists().withMessage("El campo usuario es obligatorio"),
  check("originalUrl").exists().withMessage("El campo url es obligatorio"),
  check("expiresAt").exists().withMessage("El campo fecha de caducidad es obligatorio"),
  check("password").optional(),
  check("time").exists().withMessage("El campo tiempo es obligatorio"),
];

export const queryLinkSchema = [
  query("page")
    .isInt({ min: 1 })
    .withMessage("La página debe ser un número mayor a 0"),
  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("El límite debe ser un número mayor a 0"),

  query("title").optional().isString().withMessage("El campo titulo es obligatorio"),
  query("originalUrl").optional().isString().withMessage("El campo url es obligatorio"),
  query("id").optional().isString().withMessage("El campo id es obligatorio"),
];