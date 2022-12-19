"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_department extends Model {
    static associate(models) {
      table_department.hasMany(models.table_jabatan, {
        foreignKey: "id_department",
      });
    }
  }
  table_department.init(
    {
      nama_department: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "table_department",
    }
  );
  return table_department;
};
