"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const department = require("../data.json").Departments
    department.map(el => {
      el.createdAt = el.updatedAt = new Date();
    });
    const jabatan = require("../data.json").Jabatan
    jabatan.map(el => {
      el.createdAt = el.updatedAt = new Date();
    });
    const karyawan = require("../data.json").Karyawan
    karyawan.map(el => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("table_departments", department);
    await queryInterface.bulkInsert("table_jabatans", jabatan);
    await queryInterface.bulkInsert("table_karyawans", karyawan);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("table_karyawans", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    await queryInterface.bulkDelete("table_jabatans", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    await queryInterface.bulkDelete("table_departments", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
