import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchServices,
  setSelectedCategory,
} from "../../features/servicesSlice";

const ServiceForm = () => {
  const dispatch = useDispatch();
  const { services, categories, selectedCategory, loading, error } =
    useSelector((state) => state.services);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setSelectedCategory(category));
    setSelectedService(null);
  };

  const handleServiceChange = (e) => {
    const serviceId = e.target.value;
    const service = services.find((service) => service.service === serviceId);
    setSelectedService(service);
  };

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : [];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Services</h1>
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
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-1/2 px-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-1/2 px-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="service"
          >
            Service
          </label>
          <select
            id="service"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedService ? selectedService.service : ""}
            onChange={handleServiceChange}
            disabled={!selectedCategory}
          >
            <option value="">Select a service</option>
            {filteredServices.map((service) => (
              <option key={service.service} value={service.service}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedService && (
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-xl font-bold mb-4">{selectedService.name}</h2>
              <p>
                <strong>Type:</strong> {selectedService.type}
              </p>
              <p>
                <strong>Rate:</strong> ${selectedService.rate}
              </p>
              <p>
                <strong>Min:</strong> {selectedService.min}
              </p>
              <p>
                <strong>Max:</strong> {selectedService.max}
              </p>
              <p>
                <strong>Category:</strong> {selectedService.category}
              </p>
              <p>
                <strong>Refill:</strong> {selectedService.refill ? "Yes" : "No"}
              </p>
              <p>
                <strong>Cancel:</strong> {selectedService.cancel ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceForm;
