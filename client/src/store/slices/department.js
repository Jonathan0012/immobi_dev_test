import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchDepartment = createAsyncThunk(
  "department/fetchSuccess",
  async () => {
    const { data } = await instance.get("/department");
    return data;
  }
);

export const addDepartment = createAsyncThunk(
  "department/addSuccess",
  async (nama_department) => {
    const { data } = await instance.post("/department", {
      nama_department: nama_department,
    });
    return data;
  }
);
const departmentSlice = createSlice({
  name: "department",
  initialState: {
    department: [],
    satudepartment: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDepartment.fulfilled, (state, action) => {
      state.department = action.payload;
    });
  },
});

export default departmentSlice.reducer;
