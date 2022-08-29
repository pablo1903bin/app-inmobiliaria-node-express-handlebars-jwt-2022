import express from "express";
import { engine } from "express-handlebars";
//import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routerUsuario from "./routes/usuarioLoginRoutes.js";
import db from "./config/db.js";

const app = express();
//Configuraciones para node
app.set("port", process.env.PORT || 6000);

//Sirviendo archivos estaticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//Configurando a express donde esta la carpeta views

//Conexion a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexion Exitosa a la Base de Datos");
} catch (error) {
  console.log(error);
}

//
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

//Routing de primer nivel
app.use("/api/v1/auth", routerUsuario);

//Configurando un motor de plantilla de handelbars
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
//Soportar datos desde un formulario
app.use(express.urlencoded({ extended: false }));

export default app;
