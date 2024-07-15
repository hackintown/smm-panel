import React, { useState } from "react";

const sidebarItems = [
  { id: 1, label: "General Settings" },
  { id: 2, label: "Sellers" },
  { id: 3, label: "Payment Methods" },
  { id: 4, label: "Bank Accounts" },
  { id: 5, label: "Modules" },
  { id: 6, label: "Support Settings" },
  { id: 7, label: "Payment Bonuses" },
  { id: 8, label: "Currency Manager" },
  { id: 9, label: "Notification Setting" },
];

const SideNavbar = () => {
  const [isActive, setIsActive] = useState(1); // Defaulting id: 1 to be active

  const handleActive = (id) => {
    setIsActive(id);
  };

  return (
    <ul className="p-3 rounded-md max-w-max flex flex-col bg-card border border-border">
      {sidebarItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleActive(item.id)}
          className={`text-base font-normal py-2 my-1 px-2 whitespace-nowrap hover:bg-primary hover:text-primary-foreground rounded-md ${
            isActive === item.id
              ? "bg-primary text-primary-foreground"
              : "hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default SideNavbar;
