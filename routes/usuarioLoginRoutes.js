import { body, validationResult } from "express-validator";
import { Router } from "express";
import {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
} from "../controllers/userController.js";

import { bodyRegisterValidator } from "../Midleware/validatorAuth.js";

const router = Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);

//En esta url con el metodo post Resibo data del formulario de registro
router.post("/registro", bodyRegisterValidator, registrar);

router.get("/olvide-password", formularioOlvidePassword);
export default router;
