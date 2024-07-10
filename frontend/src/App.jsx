import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/ui/Navbar/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  const { user, role, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  const UserRoutes = () =>
    user && role === "user" ? (
      <UserDashboard />
    ) : (
      <Navigate to="/login" replace />
    );

  const AdminRoutes = () =>
    user && role === "admin" ? (
      <AdminDashboard />
    ) : (
      <Navigate to="/admin" replace />
    );

  return (
    <>
      {!location.pathname.startsWith("/admin" && "/dashboard") && <Navbar />}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminRoutes />} />
          <Route path="dashboard" element={<UserRoutes />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
