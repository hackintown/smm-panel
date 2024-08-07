import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const AddFund = () => {
  const [method, setMethod] = useState("");
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  const [instructions, setInstructions] = useState("");
  const [history, setHistory] = useState([]);

  const handleAddFund = () => {
    const newEntry = {
      id: history.length + 1,
      date: new Date().toLocaleDateString(),
      method,
      amount,
    };
    setHistory([...history, newEntry]);
    // Reset form fields
    setMethod("");
    setOrderId("");
    setAmount("");
    setInstructions("");
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-bold mb-4">Add Fund</h1>
      <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-foreground text-base font-medium mb-2"
            htmlFor="method"
          >
            Method
          </label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3  text-foreground text-base font-medium leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Paytm">Paytm- QR Code</option>
            <option value="PhonePe">PhonePe QR Code</option>
            <option value="Perfect">Perfect Money Automatic</option>
            <option value="PayPal">PayPal Transfer</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-foreground text-base font-medium mb-2"
            htmlFor="orderId"
          >
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-foreground text-base font-medium mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-foreground text-base font-medium mb-2"
            htmlFor="instructions"
          >
            Instructions
          </label>
          <ReactQuill
            value={instructions}
            onChange={setInstructions}
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handleAddFund}
          className="bg-primary hover:bg-blue-700 text-primary-foreground font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Fund
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-4">Payment History</h2>
      <table className="min-w-full shadow-md text-primary-foreground font-medium rounded-sm">
        <thead className="bg-primary ">
          <tr>
            <th className="py-2 px-2 font-medium">ID</th>
            <th className="py-2 px-2 font-medium">Date</th>
            <th className="py-2 px-2 font-medium">Method</th>
            <th className="py-2 px-2 font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id}>
              <td className="px-2 py-2">{entry.id}</td>
              <td className="px-2 py-2">{entry.date}</td>
              <td className="px-2 py-2">{entry.method}</td>
              <td className="px-2 py-2">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddFund;
