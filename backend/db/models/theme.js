const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card }) {
      this.hasMany(Card, {
        foreignKey: "themeId",
      });
    }
  }
  Theme.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
