const { table_karyawan, table_jabatan } = require("../models");

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
      res.status(500).json({ message: err });
    }
  }

  static async getAllKaryawan(req, res) {
    try {
      const karyawan = await table_karyawan.findAll({
        include: {
          model: table_jabatan,
          attributes: ["nama_jabatan"],
        },
      });
      res.status(200).json(karyawan);
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async getKaryawanById(req, res) {
    try {
      const { id } = req.params;
      const karyawan = await table_karyawan.findByPk(id,{
        include: {
          model: table_jabatan,
          attributes: ["nama_jabatan"],
        },
      });
      res.status(200).json(karyawan);
    } catch (err) {
      res.status(500).json({ message: "ISE" });
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
      await table_karyawan.update(process, { where: { id: id } });
      res.status(200).json({ message: "Karyawan updated" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  static async deleteKaryawan(req, res) {
    const { id } = req.params;
    try {
      await table_karyawan.destroy({ where: { id: id } });
      res.status(200).json({ message: "Karyawan deleted" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

module.exports = Karyawan;
