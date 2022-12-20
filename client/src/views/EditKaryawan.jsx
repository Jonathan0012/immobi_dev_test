import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { fetchDepartment } from "../store/slices/department";
import { fetchJabatan } from "../store/slices/jabatan";
import { addKaryawan } from "../store/slices/karyawan";

export default function EditKaryawan() {
    return (
      <>
        <h1>Edit Karyawan</h1>
      </>
    );
  }
  