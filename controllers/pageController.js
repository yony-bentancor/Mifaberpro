const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("n");
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
      const userInfo = req.body;
      password = userInfo.username;
      const hash = await bcrypt.hash(password, saltRounds);
      const newUser = await Usuario.create({
        username: userInfo.username,
        hash: hash,
      });

      const userRes = {
        username: newUser.username,
        id: newUser.id,
      };
      const token = jwt.sign(userRes, CLAVE_SECRETA);

      res.redirect("/home");

      /*res.status(201).json({ useer: userRes, token: token });*/
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
