const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret key", async (err, decodedToken) => {
      if (err) {
        return res.json({ status: false });
        next();
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) {
          req.user = user;
          next();
        } else return res.json({ status: false });
      }
    });
  } else {
    if (req.headers.authorization) {
      const apiToken = req.headers.authorization;
      const token = apiToken.split(" ")[1];
      jwt.verify(token, "secret key", async (err, decodedToken) => {
        if (err) {
          return res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) {
            req.user = user;
            next();
          } else return res.json({ status: false });
        }
      });
    } else {
      return res.json({ status: false });
    }
  }
};
