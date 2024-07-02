import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AdminLogin from "./components/Admin/AdminLogin";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "./features/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const admin = useSelector((state) => state.auth.admin);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user]);

  // Define private routes for authenticated users and admin
  const userRoutes = (
    <>
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Navigate to="/login" replace />
    </>
  );

  const adminRoutes = (
    <>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Navigate to="/admin" replace />
    </>
  );

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user ? userRoutes : null}
          {admin ? adminRoutes : null}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
