import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNavbarItem,
  updateNavbarItem,
  removeNavbarItem,
} from "../../features/sideNavbarSlice";
import * as FaIcons from "react-icons/fa";

const iconMap = {
  FaTachometerAlt: FaIcons.FaTachometerAlt,
  FaShoppingBag: FaIcons.FaShoppingBag,
  FaClipboardList: FaIcons.FaClipboardList,
  FaCogs: FaIcons.FaCogs,
  FaMoneyBillWave: FaIcons.FaMoneyBillWave,
  FaTicketAlt: FaIcons.FaTicketAlt,
  FaBook: FaIcons.FaBook,
  FaChild: FaIcons.FaChild,
  FaGift: FaIcons.FaGift,
  FaExclamationTriangle: FaIcons.FaExclamationTriangle,
  FaBlog: FaIcons.FaBlog,
};

const AdminPanel = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.sideNavbar.menuItems);

  const [newItem, setNewItem] = useState({
    label: "",
    icon: "FaTachometerAlt",
  });
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = () => {
    dispatch(addNavbarItem({ id: Date.now(), ...newItem }));
    setNewItem({ label: "", icon: "FaTachometerAlt" });
  };

  const handleEdit = () => {
    dispatch(updateNavbarItem(editingItem));
    setEditingItem(null);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add Menu Item</h3>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newItem.label}
            onChange={(e) =>
              setNewItem({ ...newItem, label: e.target.value })
            }
            placeholder="Label"
            className="px-4 py-2 border rounded-md w-1/2"
          />
          <select
            value={newItem.icon}
            onChange={(e) =>
              setNewItem({ ...newItem, icon: e.target.value })
            }
            className="px-4 py-2 border rounded-md w-1/2"
          >
            {Object.keys(iconMap).map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Edit Menu Items</h3>
        <ul>
          {menuItems.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center space-x-2">
                  <IconComponent />
                  {editingItem && editingItem.id === item.id ? (
                    <>
                      <input
                        type="text"
                        value={editingItem.label}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            label: e.target.value,
                          })
                        }
                        className="px-4 py-2 border rounded-md w-1/2"
                      />
                      <select
                        value={editingItem.icon}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            icon: e.target.value,
                          })
                        }
                        className="px-4 py-2 border rounded-md w-1/2"
                      >
                        {Object.keys(iconMap).map((icon) => (
                          <option key={icon} value={icon}>
                            {icon}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <span className="text-xl">{item.label}</span>
                  )}
                </div>
                <div className="space-x-2">
                  {editingItem && editingItem.id === item.id ? (
                    <button
                      onClick={handleEdit}
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingItem(item)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => dispatch(removeNavbarItem(item.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
