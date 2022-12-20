import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { fetchDepartment } from "../store/slices/department";
import { fetchJabatan } from "../store/slices/jabatan";
import { addKaryawan } from "../store/slices/karyawan";

export default function FormKaryawan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idDpt, setIdDpt] = useState(2);
  const [formKaryawan, setFormKaryawan] = useState({
    name: "",
    age: 0,
    gender: "",
    tanggal_lahir: "",
    alamat: "",
    id_jabatan: 2,
  });

  const { department } = useSelector((state) => {
    return state.department;
  });

  const { jabatan } = useSelector((state) => {
    return state.jabatan;
  });

  useEffect(() => {
    dispatch(fetchDepartment());
    dispatch(fetchJabatan());
  }, []);

  const changeSelectHandler = (e) => {
    const value = e.target.value;
    const newIdDpt = value;
    setIdDpt(newIdDpt);
  };

  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormKaryawan = {
      ...formKaryawan,
    };
    newFormKaryawan[field] = value;
    setFormKaryawan(newFormKaryawan);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(addKaryawan(formKaryawan));
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
            <h1 className="display-6">Add Karyawan</h1>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Name</Form.Label>
              <Form.Control
                placeholder="Enter Name"
                name="name"
                type="text"
                value={formKaryawan.name}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Age</Form.Label>
              <Form.Control
                placeholder="Enter Age"
                name="age"
                type="number"
                value={formKaryawan.age}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Gender :</Form.Label>
              <Form.Check
                inline
                name="gender"
                type="radio"
                label="L"
                value="L"
                onChange={changeInputHandler}
              />
              <Form.Check
                inline
                name="gender"
                type="radio"
                label="P"
                value="P"
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Tanggal Lahir</Form.Label>
              <Form.Control
                name="tanggal_lahir"
                type="date"
                value={formKaryawan.tanggal_lahir}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Alamat</Form.Label>
              <Form.Control
                placeholder="Enter Address"
                name="alamat"
                type="text"
                value={formKaryawan.alamat}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Department</Form.Label>
              <Form.Select value={idDpt} onChange={changeSelectHandler}>
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
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Jabatan</Form.Label>
              <Form.Select
                name="id_jabatan"
                value={formKaryawan.id_jabatan}
                onChange={changeInputHandler}
              >
                {jabatan.map((el) => {
                  if (idDpt == el.id_department) {
                    return (
                      <option value={el.id} key={el.id}>
                        {el.nama_jabatan}
                      </option>
                    );
                  }
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
