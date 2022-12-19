const { table_karyawan } = require("../models");

class Karyawan {
  static async createKaryawan(req, res) {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;
    try {
      const karyawan = await table_karyawan.create({
        name,
        id_jabatan,
        age,
        gender,
        tanggal_lahir,
        alamat,
      });
      res.status(201).json({ message: "Karyawan created", karyawan });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }

  static async getAllKaryawan(req, res) {
    try {
      const karyawan = await table_karyawan.findAll();
      res.status(200).json(karyawan);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }

  static async editKaryawan(req, res) {
    const { id } = req.params;
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;
    try {
      const process = {
        name: name,
        id_jabatan: id_jabatan,
        age: age,
        gender: gender,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat,
      };
      await table_karyawan.update(process, { where: id });
      res.status(200).json({ message: "Karyawan updated" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }

  static async deleteKaryawan(req, res) {
    const { id } = req.params;
    try {
      await table_karyawan.destroy({ where: id });
      res.status(200).json({ message: "Karyawan deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }
}

module.exports = Karyawan;
