import { check, validationResult } from "express-validator";

import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", {
    post: {
      pagina: "Inicia Sesion",
      author: "Janith Kasun",
      image: "https://picsum.photos/500/500",
      comments: [],
    },
  });
};

//Devuelve El formulario de registro
const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    post: {
      pagina: "Regístrate",
      author: "Janith Kasun",
      image: "https://picsum.photos/500/500",
      comments: [],
    },
  });
};

//Resibiendo datos del formulario para guardar registros
const registrar = async (req, res) => {
  res.json({ ok: "Registrado" });
};

//Devolviendo el formulario de Recuperar cuenta
const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", {
    post: {
      pagina: "Recuperar password",
      author: "Janith Kasun",
      image: "https://picsum.photos/500/500",
      comments: [],
    },
  });
};
export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
};
