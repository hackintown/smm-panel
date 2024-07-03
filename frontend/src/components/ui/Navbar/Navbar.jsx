import React, { useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HamburgerMenuIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import {
  navbarRootStyles,
  navbarListStyles,
  navbarItemStyles,
  navbarTriggerStyles,
  navbarContentStyles,
} from "../../../lib/navbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <NavigationMenu.Root className={navbarRootStyles()}>
      <div className="text-xl font-semibold">SMM PANEL</div>
      <NavigationMenu.List className={navbarListStyles()}>
        <NavigationMenu.Item>
          <Link to="/" className={navbarItemStyles()}>
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link to="/about" className={navbarItemStyles()}>
            About
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link to="/services" className={navbarItemStyles()}>
            Services
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link to="/contact" className={navbarItemStyles()}>
            Contact
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={navbarTriggerStyles()}
            onClick={toggleMenu}
          >
            <HamburgerMenuIcon className="w-6 h-6" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className={navbarContentStyles({ open: isOpen })}
          >
            <Link to="/" className={navbarItemStyles()} onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className={navbarItemStyles()}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={navbarItemStyles()}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={navbarItemStyles()}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
