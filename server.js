const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const db = require("./db");
const app = express();
const pageRoutes = require("./routes/page.routes");

// Configurar Nunjucks como motor de plantillas
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// Establecer la carpeta de vistas
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
db();
// Establecer el motor de plantillas
app.set("view engine", "nunjucks");

// Rutas de tu aplicación
app.use("/", pageRoutes); // Todas las rutas en pageRoutes están bajo /

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
