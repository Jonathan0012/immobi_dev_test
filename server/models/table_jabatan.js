"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_jabatan extends Model {
    static associate(models) {
      table_jabatan.hasMany(models.table_karyawan, {
        foreignKey: "id_jabatan",
      });
      table_jabatan.belongsTo(models.table_department);
    }
  }
  table_jabatan.init(
    {
      id_department: DataTypes.INTEGER,
      nama_jabatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "table_jabatan",
    }
  );
  return table_jabatan;
};
