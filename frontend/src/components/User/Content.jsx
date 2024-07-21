import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Content = () => {
  const { loading, error, selectedServices } = useSelector(
    (state) => state.services
  );
  console.log(selectedServices);
  const categories = Object.keys(selectedServices);
  console.log(categories);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedService(null);
  };

  const handleServiceChange = (e) => {
    const serviceId = e.target.value;
    const service = selectedServices[selectedCategory].find(
      (s) => s.id === serviceId
    );
    setSelectedService(service);
  };

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
      {loading && (
        <div className="flex justify-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="flex justify-center">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {error}
          </div>
        </div>
      )}
      <div className="rounded-lg shadow-lg border border-border w-full max-w-[950px] bg-card py-2">
        <ul className="p-5 flex flex-col gap-y-4">
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Category
            </label>
            <select
              id="category"
              className="block w-full bg-background text-foreground border border-border shadow-sm 
              outline-none focus:border-ring rounded-sm py-2 px-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Services
            </label>
            <select
              id="service"
              className="block w-full bg-background text-foreground border border-border shadow-sm 
              outline-none focus:border-ring rounded-sm py-2 px-2"
              value={selectedService ? selectedService.id : ""}
              onChange={handleServiceChange}
              disabled={!selectedCategory}
            >
              <option value="">Select a service</option>
              {selectedCategory &&
                selectedServices[selectedCategory].map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
            </select>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Avgerage Time
            </label>
            <div className="">
              <input
                type="text"
                value={
                  selectedService ? selectedService.time : "Not enough data"
                }
                className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
              />
            </div>
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
              <div className="flex gap-x-2 my-1 mx-1">
                <p className="text-sm text-foreground">
                  Min: {selectedService ? selectedService.min : 0}{" "}
                </p>
                <p className="text-sm text-foreground">
                  Max: {selectedService ? selectedService.max : 0}
                </p>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-foreground font-semibold">
              Charges
            </label>
            <div className="">
              <input
                type="text"
                value={selectedService ? `₹ ${selectedService.rate}` : "₹ 0.00"}
                readOnly
                className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-muted text-muted-foreground outline-none"
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
