import React from "react";
import { FaUsers } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
const Content = () => {
  return (
    <div className="mx-5">
      <div className="border border-border bg-card p-4 flex items-center justify-between my-8 rounded-lg shadow-sm">
        <h2 className="text-card-foreground text-md font-semibold">
          Total Order
        </h2>
        <button className="flex items-center text-base font-semibold italic gap-2 py-2 px-3 bg-info rounded-xl shadow-sm border border-border text-info-foreground hover:bg-accent hover:text-accent-foreground">
          <FaUsers size={20} /> 100
        </button>
      </div>
      <div className="rounded-lg shadow-lg border border-border w-full max-w-[950px] bg-card py-2">
        <ul className="p-5 flex flex-col gap-y-4">
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Category
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                  Options
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
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Support
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Services
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                  Options
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
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Support
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Avgerage Time
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                  Options
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
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Support
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Link
            </label>
            <div className="">
              <input
                type="text"
                className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
                placeholder="Link"
              />
            </div>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Quantity
            </label>
            <div className="">
              <input
                type="text"
                className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
                placeholder="Quantity"
              />
            </div>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Charges
            </label>
            <div className="">
              <input
                type="text"
                className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-muted text-muted-foreground outline-none"
                placeholder="₹ 0.00"
              />
            </div>
          </li>
          <li>
            <button className="w-full bg-primary text-primary-foreground px-3 py-2.5 rounded-lg shadow-sm">
              New Order
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
