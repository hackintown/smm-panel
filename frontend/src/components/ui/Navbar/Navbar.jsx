import React, { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import {
  navbarRootStyles,
  navbarListStyles,
  navbarItemStyles,
  navbarTriggerStyles,
  navbarContentStyles
} from '../../../lib/navbarStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
      <div className="text-xl font-bold">MyApp</div>
      <NavigationMenu.List className={navbarListStyles()}>
        <NavigationMenu.Item>
          <NavigationMenu.Link className={navbarItemStyles()} href="/">Home</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className={navbarItemStyles()} href="/about">About</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className={navbarItemStyles()} href="/services">Services</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className={navbarItemStyles()} href="/contact">Contact</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200">
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={navbarTriggerStyles()} onClick={toggleMenu}>
            <HamburgerMenuIcon className="w-6 h-6" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={navbarContentStyles({ open: isOpen })}>
            <NavigationMenu.Link className={navbarItemStyles()} href="/">Home</NavigationMenu.Link>
            <NavigationMenu.Link className={navbarItemStyles()} href="/about">About</NavigationMenu.Link>
            <NavigationMenu.Link className={navbarItemStyles()} href="/services">Services</NavigationMenu.Link>
            <NavigationMenu.Link className={navbarItemStyles()} href="/contact">Contact</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
