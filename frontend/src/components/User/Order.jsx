import React from "react";
import { useSelector } from "react-redux";
import { getOrderStatus } from "../../features/servicesSlice";

const Order = () => {
  const { loading, error, orderStatus } = useSelector((state) => state.services);

  if (!orderStatus) return null; // Handle case where orderStatus is null or undefined

  return (
    <div className="overflow-x-auto p-6">
      <div className="mt-4 border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Order Status
        </h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">Charge</th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">Start Count</th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">Status</th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">Remains</th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{orderStatus.charge}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{orderStatus.start_count}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{orderStatus.status}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{orderStatus.remains}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{orderStatus.currency}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
