'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Banner.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Title cannot be empty"}
      }
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};