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
      nama_department: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Nama Department tidak boleh kosong` },
          notEmpty: { message: `Nama Department tidak boleh kosong` },
        },
      },
    },
    {
      sequelize,
      modelName: "table_department",
    }
  );
  return table_department;
};
