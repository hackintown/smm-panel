import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserServices = () => {
  const { selectedServices } = useSelector((state) => state.services);
  const categories = Object.keys(selectedServices);

  return (
    <div className="bg-card p-2 shadow-sm border border-border rounded-sm">
      <div className="">
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-gray-800">{category}</h2>
            <table className="w-full border border-border rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border px-4 py-2 text-left font-medium">
                    ID
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Service Name
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Rate per 1000
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Min Order
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Max Order
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Average Time
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-medium text-nowrap">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedServices[category].map((service) => (
                  <tr
                    key={service.id}
                    className="hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    <td className="border border-border px-4 py-2 text-base">
                      {service.id}
                    </td>
                    <td className="border border-border px-4 py-2 text-base">
                      {service.name}
                    </td>
                    <td className="border border-border px-4 py-2 text-base">
                      ₹ {service.rate}
                    </td>

                    <td className="border border-border px-4 py-2 text-base">
                      {service.min}
                    </td>
                    <td className="border border-border px-4 py-2 text-base">
                      {service.max}
                    </td>
                    <td className="border border-border px-4 py-2 text-base">
                      {service.time}
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      <button className="text-xs text-primary-foreground bg-primary px-2 py-1 rounded-sm shadow-lg">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserServices;
