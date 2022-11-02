//Definir los tipos de datos de mis modelos
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
//
import db from "../config/db.js";
//const sequelize = new Sequelize();

//Definir un nuevo modelo esta es la forma
const Usuario = db.define(
  "usuarios",
  {
    //Configuracion con las diferentes columnas k va a tener este usuario
    //Creando columna Nombre
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Creando columna email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Creando columna password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
  },
  {
    hooks: {
      beforeCreate: async function (Usuario) {
        const salt = await bcrypt.genSalt(10);
        Usuario.password = await bcrypt.hash(Usuario.password, salt);
      },
    },
  }
);
export default Usuario;
