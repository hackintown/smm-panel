import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
const apiUrl = config.apiBaseUrl;
// Helper function to set token in headers and localStorage
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json"; // Set Content-Type for JSON
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["Content-Type"]; // Clear Content-Type if no token
    localStorage.removeItem("token");
  }
};
// Log Axios default headers to verify Authorization header
console.log("Axios Default Headers:", axios.defaults.headers.common);

// On application start, set the token if it exists in localStorage
// On application start, set the token if it exists in localStorage
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token); // Set token in Axios headers
}

// Thunks
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, userData);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (adminData, thunkAPI) => {
    try {
      console.log("Login Admin Data:", adminData); // Log adminData being sent
      const response = await axios.post(
        `${apiUrl}/api/auth/admin/login`,
        adminData
      );
      // Set token in local storage and axios headers
      localStorage.setItem("token", response.data.token);
      console.log("Login Admin Response:", response.data); // Log response data
      setAuthToken(response.data.token);
      console.log("Axios Default Headers:", axios.defaults.headers.common); // Log Axios headers
      return response.data;
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message); // Log error
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}/api/auth/profile`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  user: null,
  admin: null,
  token: token || null,
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.admin = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      setAuthToken(null);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login Admin
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.admin = action.payload.admin;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch User Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
