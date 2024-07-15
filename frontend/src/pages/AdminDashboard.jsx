import React from "react";
import AdminPanel from "../components/Admin/AdminPanel";
import AdminNavbar from "../components/Admin/AdminNavbar";

const AdminDashboard = () => {
  return (
    <>
      <div className="fixed-header w-full">
        <AdminNavbar />
      </div>
      <AdminPanel />
    </>
  );
};

export default AdminDashboard;
