import React from "react";
import { FaUsers } from "react-icons/fa";
const Content = () => {
  return (
    <div className="container">
      <div className="border border-border bg-card p-4 flex items-center justify-between my-8 rounded-lg shadow-sm">
        <h2 className="text-card-foreground text-md font-semibold">Total Order</h2>
        <button className="flex items-center text-base font-semibold italic gap-2 py-2 px-3 bg-info rounded-xl shadow-sm border border-border text-info-foreground hover:bg-accent hover:text-accent-foreground">
          <FaUsers size={20} /> 100
        </button>
      </div>
      <div className="rounded-lg shadow-lg border border-border w-2/3 h-[500px] bg-card"></div>
    </div>
  );
};

export default Content;
