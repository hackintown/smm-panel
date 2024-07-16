import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/ui/Navbar/Navbar";
import UserDashboard from "./pages/User/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AdminLogin from "./components/Admin/AdminLogin";
import Settings from "./pages/Admin/Settings";
import Clients from "./pages/Admin/Clients";
import Order from "./pages/Admin/Order";
import Services from "./pages/Admin/Services";
import Ticket from "./pages/Admin/Ticket";
import Appearance from "./pages/Admin/Appearance";
import AdminNavbar from "./components/Admin/AdminNavbar";
import Owner from "./pages/Admin/Owner";
import Account from "./pages/Admin/Account";
import Task from "./pages/Admin/Task";
import UpdatePrice from "./pages/Admin/UpdatePrice";
import CategorySort from "./pages/Admin/CategorySort";
import Error404 from "./pages/Admin/Error404";
import Sellers from "./components/Admin/Sellers";
import GeneralSetting from "./components/Admin/GeneralSetting";
import PaymentMethod from "./components/Admin/PaymentMethod";

const Loading = () => <p>Loading...</p>;

const UserRoutes = ({ user, role }) =>
  user && role === "user" ? (
    <UserDashboard />
  ) : (
    <Navigate to="/login" replace />
  );

const AdminRoutes = ({ user, role }) =>
  user && role === "admin" ? (
    <AdminDashboard />
  ) : (
    <Navigate to="/admin" replace />
  );

const App = () => {
  const { user, role, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  const isAdminPath = location.pathname.startsWith("/admin");
  const isAdminLoginPage =
    location.pathname === "/admin" || location.pathname === "/admin/login";

  return (
    <>
      {!isAdminPath && !isAdminLoginPage && <Navbar />}
      {isAdminPath && !isAdminLoginPage && <AdminNavbar />}
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={<AdminRoutes user={user} role={role} />}
          />
          <Route
            path="/dashboard"
            element={<UserRoutes user={user} role={role} />}
          />
          <Route path="/admin/settings/*" element={<Settings />}>
            <Route index element={<GeneralSetting />} />
            <Route path="general-settings" element={<GeneralSetting />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="payment-methods" element={<PaymentMethod />} />
          </Route>
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/orders" element={<Order />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/tickets" element={<Ticket />} />
          <Route path="/admin/appearance" element={<Appearance />} />
          <Route path="/admin/owner" element={<Owner />} />
          <Route path="/admin/accounts" element={<Account />} />
          <Route path="/admin/tasks" element={<Task />} />
          <Route path="/admin/update-price" element={<UpdatePrice />} />
          <Route path="/admin/category-sort" element={<CategorySort />} />
          {isAdminLoginPage && (
            <Route path="/admin/login" element={<AdminLogin />} />
          )}
          <Route path="/admin/*" element={<Error404 />} />
        </Routes>
      )}
    </>
  );
};

export default App;
