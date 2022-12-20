import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { fetchDepartment } from "../store/slices/department";
import { fetchJabatan } from "../store/slices/jabatan";
import { updateKaryawan, fetchKaryawanById, fetchKaryawan } from "../store/slices/karyawan";

export default function EditKaryawan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idDpt, setIdDpt] = useState(2);
  const [formEditKaryawan, setFormEditKaryawan] = useState({
    name: "",
    age: 0,
    gender: "",
    tanggal_lahir: "",
    alamat: "",
    id_jabatan: 2,
  });

  const { satuKaryawan } = useSelector((state) => {
    console.log(id, state.karyawan);
    return state.karyawan;
  });
  const { department } = useSelector((state) => {
    return state.department;
  });

  const { jabatan } = useSelector((state) => {
    return state.jabatan;
  });

  const changeSelectHandler = (e) => {
    const value = e.target.value;
    const newIdDpt = value;
    setIdDpt(newIdDpt);
  };
  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormEditKaryawan = {
      ...formEditKaryawan,
    };
    newFormEditKaryawan[field] = value;
    setFormEditKaryawan(newFormEditKaryawan);
  };

  useEffect(() => {
    dispatch(fetchKaryawanById(id));
    setFormEditKaryawan({
      name: satuKaryawan?.name,
      age: satuKaryawan?.age,
      gender: satuKaryawan?.gender,
      tanggal_lahir: satuKaryawan?.tanggal_lahir,
      alamat: satuKaryawan?.alamat,
      id_jabatan: satuKaryawan?.id_jabatan,
    });
    dispatch(fetchDepartment());
    dispatch(fetchJabatan());
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateKaryawan({id, formEditKaryawan}));
      dispatch(fetchKaryawan());
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
            <h1 className="display-6">Edit Karyawan</h1>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="text-start">Name</Form.Label>
              <Form.Control
                placeholder="Enter Name"
                name="name"
                type="text"
                value={formEditKaryawan.name}
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
                value={formEditKaryawan.age}
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
                value={formEditKaryawan.tanggal_lahir}
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
                value={formEditKaryawan.alamat}
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
                value={formEditKaryawan.id_jabatan}
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
