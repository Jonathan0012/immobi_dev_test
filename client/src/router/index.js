import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeTable from "../views/Table";
import FormKaryawan from "../views/FormKaryawan";
import EditKaryawan from "../views/EditKaryawan";
import FormJabatan from "../views/FormJabatan";
import FormDepartment from "../views/FormDepartment";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeTable />,
      },
      {
        path: "/add-karyawan",
        element: <FormKaryawan />,
      },
      {
        path: "/edit-karyawan",
        element: <EditKaryawan />,
      },
      {
        path: "/add-jabatan",
        element: <FormJabatan />,
      },
      {
        path: "/add-department",
        element: <FormDepartment />,
      },
    ],
  },
]);

export default router;
