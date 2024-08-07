import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  getOrderStatus,
  getUserBalance,
  createRefill,
} from "../../features/servicesSlice";
const Dashboard = () => {
  const { loading, error, selectedServices, balance, refillStatus, orderId } =
    useSelector((state) => state.services);
  const categories = Object.keys(selectedServices);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState(0);
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

  const handleNewOrder = async (e) => {
    e.preventDefault();
    if (!selectedService) return;
    const orderData = {
      service: selectedService.id,
      link,
      quantity,
    };
    console.log(orderData);
    try {
      const result = await dispatch(addOrder(orderData)).unwrap();
      dispatch(getOrderStatus(result.order)); // Fetch order status with the new order ID
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  const handleGetOrderStatus = () => {
    dispatch(getOrderStatus(orderId));
  };

  const handleGetUserBalance = () => {
    dispatch(getUserBalance());
  };

  const handleCreateRefill = () => {
    dispatch(createRefill(orderId));
  };

  return (
    <div>
      <div className="border border-border bg-card p-4 flex items-center justify-between rounded-lg mb-6 shadow-sm">
        <h2 className="text-card-foreground text-md font-semibold">
          Total Order
        </h2>
        <button className="flex items-center text-base font-semibold italic gap-2 py-2 px-3 bg-info rounded-xl shadow-sm border border-border text-info-foreground hover:bg-accent hover:text-accent-foreground">
          <FaUsers size={20} /> 100
        </button>
      </div>
      <div className="rounded-lg shadow-lg border border-border w-full max-w-[950px] bg-card py-2">
        <form onSubmit={handleNewOrder}>
          <ul className="p-5 flex flex-col gap-y-4">
            <li className="flex flex-col gap-y-2">
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
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
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
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
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
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
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
                Link
              </label>
              <div className="">
                <input
                  type="text"
                  className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
                  placeholder="Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </li>
            <li className="flex flex-col gap-y-2">
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
                Quantity
              </label>
              <div className="">
                <input
                  type="text"
                  id="quantity"
                  className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-card text-card-foreground outline-none"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
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
              <label
                htmlFor="category"
                className="text-foreground font-semibold"
              >
                Charges
              </label>
              <div className="">
                <input
                  type="text"
                  value={
                    selectedService ? `₹ ${selectedService.rate}` : "₹ 0.00"
                  }
                  readOnly
                  className="border border-border px-2 py-1.5 w-full rounded-md shadow-sm bg-muted text-muted-foreground outline-none"
                />
              </div>
            </li>
            <li>
              <button
                type="submit"
                disabled={!selectedService}
                className="w-full bg-primary text-primary-foreground px-3 py-2.5 rounded-lg shadow-sm"
              >
                New Order
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
