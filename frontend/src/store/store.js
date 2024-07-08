// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authSlice from "../features/authSlice"; // Assuming you have a rootReducer

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

// Create Redux store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persisted store object
const persistor = persistStore(store);

export { store, persistor };
