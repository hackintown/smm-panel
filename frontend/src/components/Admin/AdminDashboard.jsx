import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.admin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ newPassword })).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border text-black"
        />
        <button type="submit" disabled={loading}>
          Update Password
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminDashboard;
