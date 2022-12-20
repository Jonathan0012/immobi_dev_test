import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../bin/axios";

export const fetchKaryawan = createAsyncThunk(
  "karyawan/fetchSuccess",
  async () => {
    const { data } = await instance.get("/karyawan");
    return data;
  }
);

export const fetchKaryawanById = createAsyncThunk(
  "karyawan/fetchByIdSuccess",
  async (id) => {
    const { data } = await instance.get(`/karyawan/${id}`);
    console.log(data, "di store");
    return data;
  }
);

export const addKaryawan = createAsyncThunk(
  "karyawan/addSuccess",
  async (formKaryawan) => {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } =
      formKaryawan;
    const { data } = await instance.post("/karyawan", {
      name: name,
      id_jabatan: Number(id_jabatan),
      age: Number(age),
      gender: gender,
      tanggal_lahir: tanggal_lahir,
      alamat: alamat,
    });
    return data;
  }
);
export const updateKaryawan = createAsyncThunk(
  "karyawan/editSuccess",
  async ({id, formEditKaryawan}) => {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } =
      formEditKaryawan;
      console.log(id, formEditKaryawan);
    const { data } = await instance.put(`/karyawan/${id}`, {
      name: name,
      id_jabatan: Number(id_jabatan),
      age: Number(age),
      gender: gender,
      tanggal_lahir: tanggal_lahir,
      alamat: alamat,
    });
    return data;
  }
);

export const deleteKaryawan = createAsyncThunk(
  "karyawan/deleteSuccess",
  async (id) => {
    const { data } = await instance.delete(`/karyawan/${id}`);
    return data;
  }
);

const karyawanSlice = createSlice({
  name: "karyawan",
  initialState: {
    karyawan: [],
    satuKaryawan: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchKaryawan.fulfilled, (state, action) => {
      state.karyawan = action.payload;
    });
    builder.addCase(fetchKaryawanById.fulfilled, (state, action) => {
      state.satuKaryawan = action.payload;
    });
    
  },
});

export default karyawanSlice.reducer;
