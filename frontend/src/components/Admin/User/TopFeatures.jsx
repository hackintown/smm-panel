import React from "react";

const TopFeatures = () => {
  return (
    <div>
      <div className="flex gap-3">
        <button className="bg-accent text-primary-foreground py-1 px-3 rounded-md">
          Add User
        </button>
        <button className="bg-primary text-primary-foreground py-1 px-3 rounded-md">
          Backup Users
        </button>
        <button className="bg-primary text-primary-foreground py-1 px-3 rounded-md">
          Send Notifications
        </button>
        <button className="bg-primary text-primary-foreground py-1 px-3 rounded-md">
          Contact Informations
        </button>
        <button className="bg-primary text-primary-foreground py-1 px-3 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
};

export default TopFeatures;
