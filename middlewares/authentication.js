const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

function authentication(req, res, next) {
  const { access_token } = req.headers;
  if (!access_token) {
    throw { msg: "Authentication Failed", status: 401 };
  } else {
    const decoded = verifyToken(access_token);
    User.findOne({
      where: {
        email: decoded.email,
      },
    })
      .then((data) => {
        if (!data) {
          throw { msg: "Authentication Failed", status: 401 };
        } else {
          req.loggedInUser = decoded;
          next();
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = authentication