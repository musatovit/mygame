const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Cards }) {
      this.hasMany(Cards, {
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
