import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/Button";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import AdminDashboard from "./components/Admin/AdminDashboard";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
export default App;
