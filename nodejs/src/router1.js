const express = require("express");
const router1 = express.Router();
const { loginto, logoutto, signin } = require("./controller1");
router1.get("/login", loginto);
router1.get("/logout", logoutto);
router1.get("/signin", signin);
module.exports = router1;
