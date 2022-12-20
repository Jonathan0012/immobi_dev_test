import { Table } from "react-bootstrap";

export default function HomeTable() {
  return (
    <>
      <h3>Data Karyawan</h3>
      <Table responsive hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>User</th>
            <th>Tag</th>
            <th>Difficulty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
}
