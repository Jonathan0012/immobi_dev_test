import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchKaryawan } from "../store/slices/karyawan";
import { Link } from "react-router-dom";
import { deleteKaryawan } from "../store/slices/karyawan";

export default function HomeTable() {
  const dispatch = useDispatch();
  const { karyawan } = useSelector((state) => {
    return state.karyawan;
  });

  useEffect(() => {
    dispatch(fetchKaryawan());
  }, []);

  async function deleteKaryawanHandler(id) {
    dispatch(deleteKaryawan(id));
    dispatch(fetchKaryawan());
  }
  return (
    <>
      <h3>Data Karyawan</h3>
      <Table responsive hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Tanggal Lahir</th>
            <th>Alamat</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {karyawan.map((el, index) => {
            return (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.table_jabatan.nama_jabatan}</td>
                <td>{el.age}</td>
                <td>{el.gender}</td>
                <td>{el.tanggal_lahir}</td>
                <td>{el.alamat}</td>
                <td>
                  <Link to="/edit-karyawan" className="px-0 mb-2 align-middle">
                    <span className="ms-1 d-none d-sm-inline">Edit</span>{" "}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteKaryawanHandler(el.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
