import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AdminLogin from "./components/Admin/AdminLogin";
import { useSelector } from "react-redux";
// import { authSlice } from './features/authSlice';

function App() {
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);
  const loading = useSelector((state) => state.auth.loading);

  // Define private route components for authenticated users and admin
  const UserRoutes = () => {
    if (!user || role !== "user") {
      return <Navigate to="/login" replace />;
    }
    return (
      <Routes>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    );
  };

  const AdminRoutes = () => {
    if (!user || role !== "admin") {
      return <Navigate to="/admin" replace />;
    }
    return (
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    );
  };

  console.log("Current user:", user);
  console.log("Current role:", role);

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserRoutes />}>
            <Route path="*" element={<Outlet />} />
          </Route>
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path="*" element={<Outlet />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
