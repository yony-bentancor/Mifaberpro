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
    /* 
    try {
      const usuario = req.body.usuario;
      const newUsuario = await Usuario.findOne({ username: usuario });

      if (!newUsuario) {
        return res.redirect(
          "https://mifaber-ea429db0ea4c.herokuapp.com/?error=UsuarioIncorrecto"
        );
      }

      const match = await bcrypt.compare(usuario.password, newUsuario.hash);

      if (!match) {
        return res.redirect(
          "https://mifaber-ea429db0ea4c.herokuapp.com/?error=ContraseñaIncorrecta"
        );
      }

      const usuarioRes = {
        username: newUsuario.username,
        telefono: newUsuario.telefono,
        direccion: newUsuario.direccion,
        email: newUsuario.email,
        id: newUsuario.id,
      };

      if (usuarioRes.username === "ADMINISTRADOR") {
        const token = jwt.sign(usuarioRes, CLAVE_SECRETA);
        const users = await Usuario.find().sort({ username: 1 });

        // Nuevo código para el caso de usuario "ADMINISTRADOR"
        try {
          return res.render("home.njk");
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }

      // Agrega lógica adicional aquí para usuarios que no son "ADMINISTRADOR"
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }, */
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
