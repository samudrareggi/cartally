const { User } = require("../models");

function authorization(req, res, next) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((data) => {
      if (data.role === "admin") {
        next();
      } else {
        throw { msg: "Not Authorized", status: 401 };
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = authorization;
