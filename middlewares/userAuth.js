const { Cart } = require("../models");

function authorization(req, res, next) {
  Cart.findByPk(req.params.id)
    .then((data) => {
      if (data.UserId === req.loggedInUser.id) {
        next();
      } else {
        throw { name: "Not Authorized" };
      }
    })
    .catch((err) => {
      next(err);
    });
}
module.exports = authorization;
