const express = require("express");
const router2 = express.Router();
const { getUsers } = require("./controller2");
const Use = require("./model1");
router2.get("/getUsers", getUsers);
module.exports = router2;
