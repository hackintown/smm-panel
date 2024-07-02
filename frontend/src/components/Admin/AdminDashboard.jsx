import React from "react";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const admin = useSelector((state) => state.auth.admin);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {admin?.username}</p>
    </div>
  );
};

export default AdminDashboard;
