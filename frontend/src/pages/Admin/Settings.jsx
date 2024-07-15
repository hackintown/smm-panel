import React from "react";
import SideNavbar from "../../components/Admin/Setting.jsx/SideNavbar";

const Settings = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto p-4 gap-10">
      <SideNavbar />
      <div className="border border-border p-4 w-full bg-card rounded-md">I am Content</div>
    </div>
  );
};

export default Settings;
