import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
const ApiServices = () => {
  const [selectAPi, setSelectedApi] = useState("A");

  const handleSelectAPi = (api) => {
    setSelectedApi(api);
  };
  return (
    <div className="max-w-screen-sm mx-auto rounded-lg shadow-lg border border-border w-full bg-card py-2 mt-10">
      <ul className="p-5 flex flex-col gap-y-4">
        <li className="flex flex-col gap-y-2">
          <label htmlFor="category" className="text-foreground font-semibold">
            Select API
          </label>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                {selectAPi}
                <FaCaretDown className="-mr-1 h-5 w-5 text-foregrousnd" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1.5">
                <MenuItem>
                  <a
                    onClick={() => handleSelectAPi("A")}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    A
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    onClick={() => handleSelectAPi("B")}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    B
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </li>
        <li className="flex flex-col gap-y-2">
          <label htmlFor="category" className="text-foreground font-semibold">
            Profit Percent
          </label>
          <div className="">
            <input
              type="text"
              className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
              placeholder="Quantity"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ApiServices;
