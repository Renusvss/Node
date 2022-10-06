const loginto = (req, res) => {
  return res.json([{ name: "logged in" }]);
};
const logoutto = (req, res) => {
  return res.json([{ name: "logged out" }]);
};
const signin = (req, res) => {
  return res.json([{ name: "sign in" }]);
};
module.exports = { loginto, logoutto, signin };
