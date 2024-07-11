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
      <div className="fixed-header w-full">
        <UserNavbar
          handleToggleMenu={handleToggleMenu}
          mobileToggle={mobileToggle}
          selectedCurrency={selectedCurrency}
          handleCurrencyChange={handleCurrencyChange}
        />
      </div>
      <div className="flex">
        <div
          className={`fixed-sidebar w-full ${
            mobileToggle ? "block" : "hidden"
          } md:block`}
        >
          <SideNavbar
            mobileToggle={mobileToggle}
            selectedCurrency={selectedCurrency}
            handleCurrencyChange={handleCurrencyChange}
          />
        </div>
        <div className="flex-1 md:ml-[290px] mt-[60px] md:mt-20">
          <Content />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
