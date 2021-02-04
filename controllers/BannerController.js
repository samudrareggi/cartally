const { Banner } = require("../models")

class BannerController {
  static addBanner(req, res, next){
    const { title, image, status } = req.body

    Banner.create({ title, image, status })
      .then(data => {
        res.status(201).json({ title, image, status })
      })
      .catch(err => {
        next(err)
      })
  }

  static putBannerById(req, res, next) {
    const { title, image, status } = req.body

    Banner.update({ title, image, status }, { where: { id: req.params.id }, returning: true })
      .then(data => {
        if (data[0] === 0) {
          throw { name: "Banner Not Found", status: 404 }
        } else {
          res.status(200).json(data[1][0])
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static getBanner(req, res, next) {
    Banner.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static getBannerById(req, res, next) {
    Banner.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (!data) {
          throw { msg: "Banner Not Found", status: 404 }
        } else {
          res.status(200).json(data)
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static deleteBannerById(req, res, next) {
    Banner.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        throw { msg: "Banner Not Found", status: 404 }
      } else {
        res.status(201).json({ msg: "Banner success to delete" })
      }
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = BannerController