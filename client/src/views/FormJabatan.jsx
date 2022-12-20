import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDepartment } from "../store/slices/department";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addJabatan } from "../store/slices/jabatan";

export default function FormJabatan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { department } = useSelector((state) => {
    return state.department;
  });

  const [formJabatan, setFormJabatan] = useState({
    id_department: 1,
    nama_jabatan: "",
  });

  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormJabatan = {
      ...formJabatan,
    };
    newFormJabatan[field] = value;
    setFormJabatan(newFormJabatan);
  };

  useEffect(() => {
    dispatch(fetchDepartment());
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(addJabatan(formJabatan));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Form className="rounded p-4 p-sm-3">
          <Row className="mb-3">
            <h1 className="display-6">Add Jabatan</h1>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Nama Jabatan</Form.Label>
              <Form.Control
                placeholder="Enter Name"
                name="nama_jabatan"
                type="text"
                value={formJabatan.nama_jabatan}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Department</Form.Label>
              <Form.Select
                value={formJabatan.id_department}
                onChange={changeInputHandler}
              >
                {department.map((el) => {
                  return (
                    <option value={el.id} key={el.id}>
                      {el.nama_department}
                    </option>
                  );
                })}
              </Form.Select>
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
