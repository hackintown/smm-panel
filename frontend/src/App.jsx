import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/Button";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
