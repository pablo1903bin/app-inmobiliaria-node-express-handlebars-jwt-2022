import { body, validationResult } from "express-validator";

//Si todo se resibio bien pasara al siguiente codigo con next
const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

const bodyRegisterValidator = [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
  body("password", "Formato de password incorrecta").custom(
    (value, { req }) => {
      //Aqui veo que me manda el formulario de registro
      console.log(req.body);
      if (value !== req.body.repetir_password) {
        throw new Error("No coinciden las contraseñas");
      }
      return value;
    }
  ),
  validationResultExpress,
];

export { bodyRegisterValidator, validationResultExpress };
