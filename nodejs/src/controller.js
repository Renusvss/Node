const Users = require("./model");
const registerNewUser = (req, res) => {
  console.log(req);
  return res.json({ status: true });
};

module.exports = { registerNewUser };
