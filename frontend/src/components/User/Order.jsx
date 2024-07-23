import React from "react";

const Order = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Editor",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Subscriber" },
  ];
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-card border border-border rounded-lg shadow-md">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3 px-6 text-left text-primary-foreground">ID</th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Date
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Link
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Charge
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Start Count
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Quantity
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Service Name
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Status
            </th>
            <th className="py-3 px-6 text-left text-primary-foreground">
              Remains
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-4 px-6 text-foreground">{item.id}</td>
              <td className="py-4 px-6 text-foreground">{item.name}</td>
              <td className="py-4 px-6 text-foreground">{item.email}</td>
              <td className="py-4 px-6 text-foreground">{item.role}</td>
              <td className="py-4 px-6 text-foreground">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
