import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const apiUrl = config.apiBaseUrl;

export const login = createAsyncThunk(
  "admin/login",
  async (adminData, thunkAPI) => {
    try {
      const response = await axios.post(`${apiUrl}/api/admin/login`, adminData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "admin/updatePassword",
  async (passwordData, thunkAPI) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/admin/update-password`,
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().admin.admin.token}`,
          },
        }
      );
      thunkAPI.dispatch(logout());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.admin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = adminSlice.actions;

export default adminSlice.reducer;
