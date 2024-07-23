import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/authSlice";
import sideNavbarReducer from "../features/sideNavbarSlice";
import servicesReducer from "../features/servicesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "sideNavbar", "services"], // store the entire services state
};

const rootReducer = combineReducers({
  auth: authReducer,
  sideNavbar: sideNavbarReducer,
  services: servicesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
