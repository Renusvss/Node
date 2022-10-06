const mongoose = require("mongoose");
const dbConnection = require("./utils/db");
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
});
const Users = dbConnection.model("Users", userSchema);
module.exports = Users;
