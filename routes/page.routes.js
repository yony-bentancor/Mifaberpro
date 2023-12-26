const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const pageController = require("../controllers/pageController");

router.get("/", pageController.index);
router.post("/login", pageController.login);
router.get("/tecnicos", pageController.showTecnicos);

module.exports = router;
