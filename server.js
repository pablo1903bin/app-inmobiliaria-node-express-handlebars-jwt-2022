import app from "./app.js";

const port = app.get("port");

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
