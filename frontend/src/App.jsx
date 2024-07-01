import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/Button";
import AdminLoginPage from "./pages/AdminLoginPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
