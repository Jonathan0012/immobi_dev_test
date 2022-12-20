import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <h3 align="center">Menu</h3>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li>
            <Link to="/" className="nav-link px-0 mb-2 align-middle">
              <span className="ms-1 d-none d-sm-inline">Table</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/add-karyawan" className="nav-link px-0 mb-2 align-middle">
              <span className="ms-1 d-none d-sm-inline">Add Karyawan</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/add-jabatan" className="nav-link px-0 mb-2 align-middle">
              <span className="ms-1 d-none d-sm-inline">Add Jabatan</span>{" "}
            </Link>
          </li>
          <li>
          <Link to="/add-department" className="nav-link px-0 mb-2 align-middle">
              <span className="ms-1 d-none d-sm-inline">Add Department</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
