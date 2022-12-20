import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchJabatan = createAsyncThunk(
  "jabatan/fetchSuccess",
  async () => {
    const { data } = await instance.get("/jabatan");
    return data;
  }
);

const jabatanSlice = createSlice({
  name: "jabatan",
  initialState: {
    jabatan: [],
    satuJabatan: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJabatan.fulfilled, (state, action) => {
      state.jabatan = action.payload;
    });
  },
});

export default jabatanSlice.reducer;
