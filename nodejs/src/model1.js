const mongoose = require("mongoose");
const dbConnection = require("./utils/db");
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  details: Object,
  password: Number,
});

// const arr{} = mongoose.Schema({
//   name: String,
//   username: String,
//   password: String,
// });
const Use = dbConnection.model("User", userSchema);
//const array = dbConnection.model("User", arr{},);
module.exports = Use;
module.expo;
