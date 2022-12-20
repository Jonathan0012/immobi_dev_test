const { table_department } = require("../models");

class Department {
  static async createDepartment(req, res) {
    const { nama_department } = req.body;
    try {
      const department = await table_department.create({ nama_department });
      res.status(201).json({ message: "Department created", department });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async getAllDepartment(req, res) {
    try {
      const department = await table_department.findAll();
      res.status(200).json(department);
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async editDepartment(req, res) {
    const { id } = req.params;
    const { nama_department } = req.body;
    try {
      await table_department.update({ nama_department }, { where: { id: id } });
      res.status(200).json({ message: "Department updated" });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }

  static async deleteDepartment(req, res) {
    const { id } = req.params;
    try {
      await table_department.destroy({ where: { id: id } });
      res.status(200).json({ message: "Department deleted" });
    } catch (err) {
      res.status(500).json({ message: "ISE" });
    }
  }
}

module.exports = Department;
