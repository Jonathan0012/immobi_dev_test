import { configureStore } from "@reduxjs/toolkit";
import karyawanReducer from "./slices/karyawan";
import jabatanReducer from "./slices/jabatan"
import departmentReducer from "./slices/department"

const store = configureStore({
  reducer: {
    karyawan: karyawanReducer,
    department: departmentReducer,
    jabatan: jabatanReducer
  },
});

export default store;
