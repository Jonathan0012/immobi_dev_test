"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_jabatan extends Model {
    static associate(models) {
      table_jabatan.hasMany(models.table_karyawan, {
        foreignKey: "id_jabatan",
      });
      table_jabatan.belongsTo(models.table_department, {
        foreignKey: "id_department",
      });
    }
  }
  table_jabatan.init(
    {
      id_department: DataTypes.INTEGER,
      nama_jabatan: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Nama Jabatan tidak boleh kosong` },
          notEmpty: { message: `Nama Jabatan tidak boleh kosong` },
        },
      },
    },
    {
      sequelize,
      modelName: "table_jabatan",
    }
  );
  return table_jabatan;
};
