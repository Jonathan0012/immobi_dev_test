'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    static associate(models) {
      table_karyawan.belongsTo(models.table_jabatan);
    }
  }
  table_karyawan.init({
    name: DataTypes.STRING,
    id_jabatan: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table_karyawan',
  });
  return table_karyawan;
};