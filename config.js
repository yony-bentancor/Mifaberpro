// config.js
require("dotenv").config(); // Cargar variables de entorno desde el archivo .env

const CLAVE_SECRETA = process.env.CLAVE_SECRETA || "dulce29";
const PORT = process.env.PORT || 80;
const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://proyectodulce:dulce29@cluster0.bi9aze0.mongodb.net/?retryWrites=true&w=majority";

const uri =
  "mongodb+srv://proyectodulce:dulce29@cluster0.bi9aze0.mongodb.net/?retryWrites=true&w=majority";

const HOST = "https://mifaber-ea429db0ea4c.herokuapp.com/";

module.exports = {
  CLAVE_SECRETA,
  PORT,
  DB_CONNECTION_STRING,
  HOST,
  uri,
};
