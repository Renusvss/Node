const mongoose = require("mongoose");
var dbConnection = mongoose.createConnection(
  "mongodb+srv://prateek:asdqwe123@cluster0.aymw0vw.mongodb.net/blog?retryWrites=true&w=majority"
);
dbConnection.on("connected", () => {
  console.log("connected with db");
});

dbConnection.on("error", () => {
  console.log("error");
});
module.exports = dbConnection;
