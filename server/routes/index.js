//"use strict";
const express = require("express");
let router = express.Router();
const storeController = require("../controllers/storeController.js");

router.use("/store", storeController)

module.exports = router;
