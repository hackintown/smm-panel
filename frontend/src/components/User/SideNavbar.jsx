import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdOutlineVerified } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";

const iconMap = {
  FaTachometerAlt: FaIcons.FaTachometerAlt,
  FaShoppingBag: FaIcons.FaShoppingBag,
  FaClipboardList: FaIcons.FaClipboardList,
  FaCogs: FaIcons.FaCogs,
  FaMoneyBillWave: FaIcons.FaMoneyBillWave,
  FaTicketAlt: FaIcons.FaTicketAlt,
  FaBook: FaIcons.FaBook,
  FaChild: FaIcons.FaChild,
  FaGift: FaIcons.FaGift,
  FaExclamationTriangle: FaIcons.FaExclamationTriangle,
  FaBlog: FaIcons.FaBlog,
};
import { fetchNavbarItems } from "../../features/sideNavbarSlice";
const SideNavbar = ({
  mobileToggle,
  handleCurrencyChange,
  selectedCurrency,
}) => {
  const [activeItem, setActiveItem] = useState(2);
  const [dynamicIconMap, setDynamicIconMap] = useState(iconMap);
  const menuItems = useSelector((state) => state.sideNavbar.menuItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbarItems());
  }, [dispatch]);

  useEffect(() => {
    menuItems.forEach((item) => {
      if (!dynamicIconMap[item.icon] && FaIcons[item.icon]) {
        setDynamicIconMap((prevIconMap) => ({
          ...prevIconMap,
          [item.icon]: FaIcons[item.icon],
        }));
      }
    });
  }, [menuItems, dynamicIconMap]);

  const handleClick = (id) => {
    setActiveItem(id);
  };
  return (
    <div
      className={`${
        mobileToggle ? "translate-x-0" : "-translate-x-full"
      } fixed md:relative left-0 top-0 h-full w-72 flex flex-col transition-transform duration-300 ease-in-out z-50 md:translate-x-0`}
    >
      <ul className="space-y-4 w-full bg-primary h-screen text-primary-foreground p-4">
        <li className="flex justify-center md:hidden rounded-3xl bg-background text-primary-foreground">
          <Menu as="div" className="relative inline-block text-left w-full">
            <div className="rounded-xl overflow-hidden shadow-md border border-border">
              <MenuButton className="overflow-hidden text-foreground bg-background inline-flex items-center w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-medium shadow-sm">
                {selectedCurrency === "INR" ? "₹ INR" : "$ USD"}
                <FaAngleDown />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-lg bg-card hover:bg-destructive"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={() =>
                      handleCurrencyChange(
                        selectedCurrency === "INR" ? "USD" : "INR"
                      )
                    }
                    className="block px-4 py-2 text-sm text-foreground border-border rounded-md"
                  >
                    {selectedCurrency === "INR" ? "$ USD" : "₹ INR"}
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </li>
        <li className="flex flex-col items-center py-2 justify-center md:hidden rounded-3xl bg-background text-primary-foreground">
          <div className="flex items-center">
            <h2 className="text-foreground mx-1">Admin</h2>
            <MdOutlineVerified fill="blue" />
          </div>
          <div className="">
            <h2 className="text-foreground">Balance:₹ 500</h2>
          </div>
          <div className="flex items-center gap-2 justify-between my-3">
            <button
              type="button"
              className="flex text-foreground items-center rounded-md bg-background px-2.5 py-1.5 text-sm font-medium shadow-sm border border-border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Account
            </button>
            <button
              type="button"
              className="flex text-foreground items-center rounded-md bg-background px-2.5 py-1.5 text-sm font-medium shadow-sm border border-border"
            >
              <IoLogOut size={20} className="mx-1" />
              Logout
            </button>
          </div>
        </li>
        {menuItems.map((item) => {
          const IconComponent = dynamicIconMap[item.icon];
          return (
            <li key={`${item.id}- ${item.label}`} className="mb-2">
              <NavLink
                href="#"
                onClick={() => handleClick(item.id)}
                className={`flex items-center py-2 px-3 ${
                  activeItem === item.id
                    ? "bg-background text-foreground"
                    : "hover:bg-background hover:text-foreground"
                } rounded-lg w-full text-lg`}
              >
                {IconComponent ? (
                  <IconComponent className="mr-2.5 size-5" />
                ) : (
                  <span>Icon-Missing</span>
                )}
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavbar;
