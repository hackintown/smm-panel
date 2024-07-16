import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { id: 1, label: "General Settings", path: "general-settings" },
  { id: 2, label: "Sellers", path: "sellers" },
  { id: 3, label: "Payment Methods", path: "payment-methods" },
  { id: 4, label: "Bank Accounts", path: "bank-accounts" },
  { id: 5, label: "Modules", path: "modules" },
  { id: 6, label: "Support Settings", path: "support-settings" },
  { id: 7, label: "Payment Bonuses", path: "payment-bonuses" },
  { id: 8, label: "Currency Manager", path: "currency-manager" },
  { id: 9, label: "Notification Setting", path: "notification-settings" },
];

const SideNavbar = () => {
  const [isActive, setIsActive] = useState(1); // Defaulting id: 1 to be active
  const navigate = useNavigate();

  const handleActive = (id, path) => {
    setIsActive(id);
    navigate(path);
  };

  return (
    <ul className="p-3 rounded-md max-w-max flex flex-col bg-card border border-border">
      {sidebarItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleActive(item.id, item.path)}
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
