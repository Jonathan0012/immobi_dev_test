"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    static associate(models) {
      table_karyawan.belongsTo(models.table_jabatan, {
        foreignKey: "id_jabatan"
      });
    }
  }
  table_karyawan.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Nama Karyawan tidak boleh kosong` },
          notEmpty: { message: `Nama Karyawan tidak boleh kosong` },
        },
      },
      id_jabatan: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { message: `Jabatan tidak boleh kosong` },
          notEmpty: { message: `Jabatan tidak boleh kosong` },
        },
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { message: `Usia tidak boleh kosong` },
          notEmpty: { message: `Usia tidak boleh kosong` },
        },
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Gender tidak boleh kosong` },
          notEmpty: { message: `Gender tidak boleh kosong` },
        },
      },
      tanggal_lahir: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Tanggal Lahir tidak boleh kosong` },
          notEmpty: { message: `Tanggal Lahir tidak boleh kosong` },
        },
      },
      alamat: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { message: `Alamat tidak boleh kosong` },
          notEmpty: { message: `Alamat tidak boleh kosong` },
        },
      },
    },
    {
      sequelize,
      modelName: "table_karyawan",
    }
  );
  return table_karyawan;
};
