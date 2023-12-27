const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
/* const jwt = require("jsonwebtoken"); */
const { CLAVE_SECRETA } = require("../config");

module.exports = {
  index: async (req, res) => {
    res.render("index.njk");
  },
  showTecnicos: async (req, res) => {
    res.render("index.njk");
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const usuario = await Usuario.findOne({ username });

      if (usuario) {
        // Comparar la contraseña proporcionada con la contraseña almacenada hasheada
        const passwordMatch = await bcrypt.compare(password, usuario.password);

        if (passwordMatch) {
          res.send("¡Inicio de sesión exitoso!");
        } else {
          res.send("Credenciales incorrectas");
        }
      } else {
        res.send("Credenciales incorrectas");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
  },
};
