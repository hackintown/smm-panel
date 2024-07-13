import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const apiUrl = config.apiBaseUrl;

export const fetchNavbarItems = createAsyncThunk(
  "/navbar/fetchNavbarItems",
  async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/navbar-items`);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const addNavbarItem = createAsyncThunk(
  "/navbar/addNavbarItem",
  async (newItem) => {
    try {
      const response = await axios.post(`${apiUrl}/api/navbar-items`, newItem);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const updateNavbarItem = createAsyncThunk(
  "/navbar/updateNavbarItem",
  async (updatedItem) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/navbar-items/${updatedItem._id}`,
        updatedItem
      );
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const removeNavbarItem = createAsyncThunk(
  "navbar/removeNavbarItem",
  async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/navbar-items/${id}`);
      return { id };
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

const initialState = {
  menuItems: [],
  status: "idle",
  error: null,
};

const sideNavbarSlice = createSlice({
  name: "sideNavbar",
  initialState,
  reducers: {
    addNavbarItem: (state, action) => {
      state.menuItems.push(action.payload);
      localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
    },
    updateNavbarItem: (state, action) => {
      const index = state.menuItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.menuItems[index] = action.payload;
        localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
      }
    },
    removeNavbarItem: (state, action) => {
      state.menuItems = state.menuItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNavbarItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menuItems = action.payload;
      })
      .addCase(fetchNavbarItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNavbarItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNavbarItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menuItems.push(action.payload);
        localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
      })
      .addCase(addNavbarItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateNavbarItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateNavbarItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.menuItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.menuItems[index] = action.payload;
          localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
        }
      })
      .addCase(updateNavbarItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeNavbarItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeNavbarItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menuItems = state.menuItems.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
      })
      .addCase(removeNavbarItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default sideNavbarSlice.reducer;
