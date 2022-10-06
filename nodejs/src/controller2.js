const Use = require("./model1");
const uuid = require("uuid");
const CryptoJS = require("crypto-js");

const { response } = require("express");
const getUsers = (req, res) => {
  var newUser = Use({
    name: "renu",
    username: "Renu",
    password: "1290",
  });
  newUser.save().then((response) => {
    return res.send([response]);
  });
};

module.exports = { getUsers };
