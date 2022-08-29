import Usuario from "../models/Usuario.js";

//GET Devuelve formuario de login ala vista
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
//POST Resibiendo data del formulario de login de la vista
const logeado = (req, res) => {
  //res.json({ ok: "Registrado" });
};
//GET Devuelve El formulario de registro a la vista
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

//POST  Resibiendo datos del formulario para persistir datos de la vista
const registrar = async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

//GET Devolviendo el formulario de olvide password a la vista
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

//POST Resibiendo data del formulario de olvide_password
const olvidePassword = (req, res) => {
  res.json({ ok: "Password recuperada con exito" });
};
export {
  formularioLogin,
  logeado,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
  olvidePassword,
};
