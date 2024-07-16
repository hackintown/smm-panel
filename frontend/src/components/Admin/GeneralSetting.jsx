import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
const GeneralSetting = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [selectedOption, setSelectedOption] = useState("Inactive");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <label className="block text-foreground font-medium">Site Logo</label>
        <input
          type="file"
          className="file:bg-accent file:text-accent-foreground file:rounded-md file:outline-none file:border file:border-border file:px-2"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <label className="block text-foreground font-medium">
          Site Favicon
        </label>
        <input
          type="file"
          className="file:bg-accent file:text-accent-foreground file:rounded-md file:outline-none file:border file:border-border file:px-2"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <label className="block text-foreground font-medium">
          Maintenance Mode
        </label>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
              {selectedOption}
              <FaCaretDown className="-mr-1 h-5 w-5 text-foreground" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1.5">
              <MenuItem>
                <a
                  href="#"
                  onClick={() => handleOptionClick("Inactive")}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  InActive
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  onClick={() => handleOptionClick("Active")}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Active
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <label className="block text-foreground font-medium">Panel Name</label>
        <input
          type="text"
          className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-background text-foreground outline-none"
          placeholder="Eg: Hackintown"
        />
      </div>
    </div>
  );
};

export default GeneralSetting;
