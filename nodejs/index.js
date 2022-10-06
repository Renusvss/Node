const { registerNewUser } = require("./src/controller");
const router = require("./src/router");
const router2 = require("./src/router2");
const express = require("express");
const server = express();
const cors = require("cors");
const dbConnection = require("./src/utils/db");
server.use(cors());
server.use("/api", router);
server.use("/apis", router2);
server.listen(3001, () => {
  console.log("started");
});
