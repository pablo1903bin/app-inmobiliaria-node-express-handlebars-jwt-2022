//Definir los tipos de datos de mis modelos
import { DataTypes } from "sequelize";

//
import db from "../config/db.js";
//const sequelize = new Sequelize();

//Definir un nuevo modelo
const Usuario = db.define("usuarios", {
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
});
export default Usuario;
