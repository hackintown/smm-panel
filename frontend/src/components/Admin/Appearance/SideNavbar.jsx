import React, { useState } from "react";

const sidebarItems = [
  { id: 1, label: "Theme" },
  { id: 2, label: "Pages" },
  { id: 3, label: "Announcement" },
  { id: 4, label: "Meta(SEO) Settings" },
  { id: 5, label: "Modules" },
  { id: 6, label: "Blogs" },
  { id: 7, label: "Menu" },
  { id: 8, label: "Languages" },
  { id: 9, label: "Integrations" },
  { id: 9, label: "Uploaded Images" },
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
          className={`text-md font-light py-2 my-1 px-2 whitespace-nowrap hover:bg-primary hover:text-primary-foreground rounded-md ${
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
