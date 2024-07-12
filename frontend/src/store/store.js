import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import sideNavbarReducer from "../features/sideNavbarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sideNavbar: sideNavbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["auth/loginUser/pending", "auth/loginUser/fulfilled"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload"],
        // Ignore these paths in the state
        ignoredPaths: ["auth.applyMiddleware"],
      },
    }),
});

export default store;
