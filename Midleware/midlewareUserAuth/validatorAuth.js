import { body, validationResult } from "express-validator";

//Si todo lo resibido es bien valido  pasara al siguiente codigo con next
const validationResultExpress = (req, res, next) => {
  const resultado = validationResult(req);
  console.log("Estos son los result" + resultado.array());
  //Si no esta vacio entonces si hay errores  y mandamos algo al front
  if (!resultado.isEmpty()) {
    return res.render("auth/registro", {
      pagina: "Crear cuenta",
      errores: resultado.array(),
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
    // return res.status(400).json({ errors: errors.array() });
  }

  next();
};
//MID validacion de data del formulario de Login
const bodyLoginValidator = [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
  validationResultExpress,
];
//MID Validacion de data del formulario de registro
const bodyRegisterValidator = [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
  body("password", "Formato de password incorrecta").custom(
    (value, { req, res }) => {
      //Aqui veo que me manda el formulario de registro;
      console.log(req.body);
      console.log(value);
      if (value !== req.body.repetir_password) {
        throw new Error("No coinciden las contraseñas");
      }
      return value;
    }
  ),
  validationResultExpress,
];

export { bodyLoginValidator, bodyRegisterValidator, validationResultExpress };
