import React, { useState } from "react";
import Content from "../components/User/Content";
import UserNavbar from "../components/User/UserNavbar";
import SideNavbar from "../components/User/SideNavbar";

const UserDashboard = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  };
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const handleCurrencyChange = (currencyType) => {
    setSelectedCurrency(currencyType);
  };
  return (
    <>
      <UserNavbar
        handleToggleMenu={handleToggleMenu}
        mobileToggle={mobileToggle}
        selectedCurrency={selectedCurrency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <div className="flex">
        <SideNavbar
          mobileToggle={mobileToggle}
          selectedCurrency={selectedCurrency}
          handleCurrencyChange={handleCurrencyChange}
        />
        <div className="w-full">
          <Content />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
