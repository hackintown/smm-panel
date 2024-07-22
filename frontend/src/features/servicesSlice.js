import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const apiUrl = config.apiBaseUrl;

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await axios.get(`${apiUrl}/api/services`);
    return response.data;
  }
);

//Create New Order
export const addOrder = createAsyncThunk(
  "services/addOrder",
  async (orderData) => {
    try {
      const response = await axios.post(`${apiUrl}/api/addOrder`, orderData);
      return response.data;
    } catch (error) {
      console.error("Error adding order:", error);
      throw error;
    }
  }
);

//Get Order Status
export const getOrderStatus = createAsyncThunk(
  "services/getOrderStatus",
  async (orderId) => {
    try {
      const response = await axios.post(`${apiUrl}/api/orderStatus`, {
        order: orderId,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching order status:", error);
      throw error;
    }
  }
);

//Get User Balance
export const getUserBalance = createAsyncThunk(
  "services/getUserBalance",
  async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/userBalance`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user balance:", error);
      throw error;
    }
  }
);

// Create Refill
export const createRefill = createAsyncThunk(
  "services/createRefill",
  async (orderId) => {
    try {
      const response = await axios.post(`${apiUrl}/api/createRefill`, {
        order: orderId,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating refill:", error);
      throw error;
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    categories: [], // Array to hold unique categories
    services: [], // Array to hold services fetched from the API
    selectedCategory: "", // Selected category for filtering services
    selectedServices: [], // Array to hold selected services for display
    loading: false, // Loading state for API calls
    error: null, // Error state for API calls
    orderCreated: false, // Flag to indicate if an order has been created
    orderStatus: null,
    balance: null,
    refillStatus: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload; // Set the selected services
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload; /// Store fetched services
        // Extract unique categories from services
        state.categories = [
          ...new Set(action.payload.map((service) => service.category)),
        ];
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderCreated = true; // Set flag to indicate order creation
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.orderStatus = action.payload;
      })
      .addCase(getOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload;
      })
      .addCase(getUserBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createRefill.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRefill.fulfilled, (state, action) => {
        state.loading = false;
        state.refillStatus = action.payload;
      })
      .addCase(createRefill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer

export const { setSelectedCategory, setSelectedServices } =
  servicesSlice.actions;
export default servicesSlice.reducer;
