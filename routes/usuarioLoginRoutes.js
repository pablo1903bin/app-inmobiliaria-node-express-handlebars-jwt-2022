import { body, validationResult } from "express-validator";
import { Router } from "express";
//Controladores de Auth
import {
  formularioLogin,
  logeado,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
  olvidePassword,
} from "../controllers/userController.js";
//Midlewares Auth
import {
  bodyRegisterValidator,
  bodyLoginValidator,
} from "../Midleware/midlewareUserAuth/validatorAuth.js";

const router = Router();

//Ruta principal de la vista de login esto es lo primero k se  carga
router.get("/login", formularioLogin);

//Esta ruta manda data del formulario de login
router.post("/login", bodyLoginValidator, logeado);


//Ruta de la vista de Registros de nuevos usuarios
router.get("/registro", formularioRegistro);

//Aqui llegan nuevos registro de usuarios desde el front registrar nuevo usuario "/api/v1/auth/registro
//En esta url con el metodo post Resibo data del formulario de registro
router.post("/registro", bodyRegisterValidator, registrar);

//Ruta de Vista de olvide password
router.get("/olvide-password", formularioOlvidePassword);


//Captura data del formulario de olvide password
router.post("/olvide-password", olvidePassword);

export default router;