const { table_jabatan } = require("../models");

class Jabatan {
  static async createJabatan(req, res) {
    const { id_department, nama_jabatan } = req.body;
    try {
      const jabatan = await table_jabatan.create({
        id_department,
        nama_jabatan,
      });
      res.status(201).json({ message: "Jabatan created", jabatan });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async getAllJabatan(req, res) {
    try {
      const jabatan = await table_jabatan.findAll();
      res.status(200).json(jabatan);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "ISE" });
    }
  }

  static async editJabatan(req, res) {
    const { id } = req.params;
    const { id_department, nama_jabatan } = req.body;
    try {
      const process = {
        id_department: id_department,
        nama_jabatan: nama_jabatan,
      };
      await table_jabatan.update(process, { where: { id: id } });
      res.status(200).json({ message: "Jabatan updated" });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async deleteJabatan(req, res) {
    const { id } = req.params;
    try {
      await table_jabatan.destroy({ where: { id: id } });
      res.status(200).json({ message: "Jabatan deleted" });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }
}

module.exports = Jabatan;
