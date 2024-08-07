import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderStatus } from "../../features/servicesSlice";

const Order = () => {
  const dispatch = useDispatch();
  const { loading, error, orderStatus, orderId, orderDetails } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    const fetchOrderStatus = async () => {
      if (orderId) {
        try {
          await dispatch(getOrderStatus(orderId));
        } catch (error) {
          console.error("Error fetching order status:", error);
        }
      }
    };

    const intervalId = setInterval(fetchOrderStatus, 10000); // Fetch order status every 10 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, orderId]);

  if (!orderStatus) return null; // Handle case where orderStatus is null or undefined
  console.log("order details:", orderDetails);
  return (
    <div className="overflow-x-auto p-2 bg-card rounded-md shadow-sm border border-border">
      <div className="">
        <h3 className="text-lg font-semibold text-card-foreground mb-3">
          Order Status
        </h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-primary border border-border text-primary-foreground">
            <tr>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Order ID
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Link
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Charge
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Start Count
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Status
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Remains
              </th>
              <th className="py-2 px-4 text-left text-primary-foreground font-medium">
                Currency
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderDetails?.link}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderStatus.charge}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderStatus.start_count}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderStatus.status}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderStatus.remains}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {orderStatus.currency}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
