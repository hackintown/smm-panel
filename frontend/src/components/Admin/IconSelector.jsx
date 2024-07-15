import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
const iconMap = Object.keys(FaIcons).reduce((acc, icon) => {
  acc[icon] = FaIcons[icon];
  return acc;
}, {});

const IconSelector = ({ selectedIcon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = (icon) => {
    onSelect(icon);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border rounded-md bg-gray-200"
      >
        {selectedIcon}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-card p-4 rounded-md max-w-[8-00px] max-h-[500px] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Choose an Icon</h3>
              <IoIosCloseCircle onClick={() => setIsOpen(false)} className="size-7 cursor-pointer" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Object.keys(iconMap).map((icon) => {
                const IconComponent = iconMap[icon];
                return (
                  <button
                    key={icon}
                    onClick={() => handleIconClick(icon)}
                    className="flex flex-col items-center p-2 border rounded-md hover:bg-gray-100"
                  >
                    <IconContext.Provider value={{ size: "1.5em" }}>
                      <IconComponent />
                    </IconContext.Provider>
                    <span className="text-xs mt-2">{icon}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconSelector;
