const { Schema, model } = require("mongoose");
const { PORT, DB_CONNECTION_STRING, HOST } = require("../config");

const userSquema = new Schema(
  {
    username: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    email: { type: String, required: true },
    hash: { type: String, require: true },
    createdAt: { type: Date },
  },

  {
    timestamps: true,
  }
);

const Usuario = model("Usuario", userSquema);
module.exports = Usuario;
