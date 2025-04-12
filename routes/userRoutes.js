const express = require("express");
const User = require("../models/User");
const router = express.Router();
// Ruta para crear un usuario
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.json(user);
});
// Ruta para obtener todos los usuarios
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
module.exports = router;
