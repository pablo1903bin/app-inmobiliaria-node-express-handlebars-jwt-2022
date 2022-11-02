import Usuario from "../models/Usuario.js";
import { generateId } from "../helpers/tokens.js";
//GET Devuelve formuario de login ala vista es mi pagina principal
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
//aqui terminan mis datos del formulario se guardan
const registrar = async (req, res) => {
  //Validar que si el usuario existe
  const { nombre, email, password } = req.body; //esyo es destructuring
  const existeUsuario = await Usuario.findOne({ where: { email: email } });

  if (existeUsuario) {
    return res.render("auth/registro", {
      pagina: "Crear cuenta",
      errores: [{ msg: "Este usuario ya esta registrado" }],
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
  }
  //const {nombre, email, password ,token} = req.body;
  const usuario = await Usuario.create({
    nombre,
    email,
    password,
    token: generateId(),
  });
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
