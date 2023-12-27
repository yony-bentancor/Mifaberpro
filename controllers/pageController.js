const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { CLAVE_SECRETA } = require("../config");

module.exports = {
  index: async (req, res) => {
    res.render("index.njk");
  },
  showTecnicos: async (req, res) => {
    res.render("index.njk");
  },

  login: async (req, res) => {
    try {
      const user = req.body;
      const newUser = await Usuario.findOne({ username: user.username });

      if (!newUser) {
        return res.redirect(
          "https://dulce29.herokuapp.com/administrador?error=UsuarioIncorrecto"
        );
      }

      const match = await bcrypt.compare(user.password, newUser.hash);

      if (!match) {
        return res.redirect(
          "https://dulce29.herokuapp.com/administrador?error=ContraseñaIncorrecta"
        );
      }

      const userRes = {
        username: newUser.username,
        id: newUser.id,
      };

      if (userRes.username === "ADMINISTRADOR") {
        const token = jwt.sign(userRes, CLAVE_SECRETA);

        // Nuevo código para el caso de usuario "ADMINISTRADOR"
        try {
          const users = await Usuario.find().sort({ username: 1 });
          return res.redirect("home.njk");
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }
    } catch (error) {
      // Manejo de errores generales
      return res.status(500).json({ error: error.message });
    }
  },
};
