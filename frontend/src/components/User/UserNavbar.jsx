import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoLogOut } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useTheme } from "../../theme/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";
import axios from "axios";

const UserNavbar = ({
  handleToggleMenu,
  handleCurrencyChange,
  selectedCurrency,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [walletBalance, setWalletBalance] = useState(84); // Example wallet balance in INR
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/de31127b3cb0ec8b1f613481/latest/INR"
        );
        const rate = response.data.conversion_rates.USD;
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching the exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleCurrencySwitch = (currency) => {
    handleCurrencyChange(currency);
  };

  const convertedBalance =
    selectedCurrency === "INR" ? walletBalance : walletBalance * exchangeRate;

  return (
    <nav className="bg-background border-b border-b-border relative">
      <div className="flex flex-wrap items-center justify-between px-4 py-4">
        <Link
          to="/dashboard"
          className="block font-semibold text-2xl text-foreground"
        >
          <span className="flex items-center">
            <FaHackerrank size={40} />
            ackintown
          </span>
        </Link>
        <button
          onClick={handleToggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-background md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="border border-border text-primary-foreground bg-primary hover:bg-accent inline-flex items-center w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-medium shadow-sm ">
                    {selectedCurrency === "INR" ? "₹ INR" : "$ USD"}
                    <FaAngleDown />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-lg bg-card hover:bg-accent"
                >
                  <div className="py-1">
                    <MenuItem>
                      <button
                        onClick={() =>
                          handleCurrencyChange(
                            selectedCurrency === "INR" ? "USD" : "INR"
                          )
                        }
                        className="block px-4 py-2 text-sm text-foreground hover:text-accent-foreground border-border rounded-md"
                      >
                        {selectedCurrency === "INR" ? "$ USD" : "₹ INR"}
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Wallet:</span>
              <span className="font-semibold">
                {selectedCurrency === "INR" ? "₹" : "$"}{" "}
                {convertedBalance.toFixed(2)}
              </span>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center rounded-md bg-background hover:bg-accent hover:text-accent-foreground px-2.5 py-2 text-sm font-medium shadow-sm border border-border"
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
            </li>
            <li>
              <button
                onClick={handleLogout}
                type="button"
                className="flex items-center rounded-md bg-background hover:bg-accent hover:text-accent-foreground px-2.5 py-2 text-sm font-medium shadow-sm border border-border"
              >
                <IoLogOut size={20} className="mx-1" />
                Logout
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center rounded-full bg-background hover:bg-accent hover:text-accent-foreground p-1.5 text-sm font-medium shadow-sm"
              >
                {darkMode ? (
                  <MdOutlineLightMode size={25} />
                ) : (
                  <MdDarkMode size={25} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
