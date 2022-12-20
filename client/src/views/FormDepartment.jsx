import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormDepartment() {
  const navigate = useNavigate();
  const [formDepartment, setFormDepartment] = useState({
    nama_department: "",
  });

  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormDepartment = {
      ...formDepartment,
    };
    newFormDepartment[field] = value;
    setFormDepartment(newFormDepartment);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log(formDepartment);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3">
        <Row className="mb-3">
          <h1 className="display-6">Add Department</h1>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label className="text-start">Nama Department</Form.Label>
            <Form.Control
              placeholder="Enter Name"
              name="nama_jabatan"
              type="text"
              value={formDepartment.nama_department}
              onChange={changeInputHandler}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  </>
  );
}
