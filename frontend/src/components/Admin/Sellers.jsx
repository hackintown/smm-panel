import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import config from "../../config";

const apiUrl = config.apiBaseUrl;
const data = [
  { id: 1, provider: "SMM Panel-1", balance: "20" },
  { id: 2, provider: "SMM Panel-2", balance: "10" },
];

const Sellers = () => {
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [inputApiUrl, setInputApiUrl] = useState("");
  const [inputApiKey, setInputApiKey] = useState("");
  const [selectedOption, setSelectedOption] = useState("No");
  const closeOutClick = useRef(null);
  const handleApiUrlChange = (e) => {
    setInputApiUrl(e.target.value);
  };
  const handleApiKeyChange = (e) => {
    setInputApiKey(e.target.value);
  };

  const handleProviderOpen = () => {
    setIsProviderOpen(true);
  };

  const handleProviderClose = () => {
    setIsProviderOpen(false);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleClickOutside = (event) => {
    if (
      closeOutClick.current &&
      !closeOutClick.current.contains(event.target)
    ) {
      console.log("Clicked outside modal");
      setIsProviderOpen(false);
    } else {
      console.log("Clicked inside modal");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/add-provider`, {
        apiUrl: inputApiUrl,
        apiKey: inputApiKey,
      });
      console.log(response.data);
      setIsProviderOpen(false);
    } catch (error) {
      console.error("Error adding provider:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mb-2">
        <button
          onClick={handleProviderOpen}
          className="shadow-sm bg-transparent text-foreground px-3 border border-border rounded-md py-1 text-base"
        >
          Add new Provider
        </button>
      </div>
      {isProviderOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto w-full">
          <div className="flex items-center justify-center min-h-screen text-center sm:block">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block"></span>
            &#8203;
            <div
              ref={closeOutClick}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white">
                <div className="">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 border-b border-border px-3.5 py-2.5">
                      Add New Provider
                    </h3>
                    <div className="my-5 px-3.5">
                      <form onSubmit={handleSubmit}>
                        <label
                          htmlFor="apiUrl"
                          className="block text-sm font-medium text-gray-700"
                        >
                          API URL
                        </label>
                        <input
                          type="text"
                          id="apiUrl"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter API URL"
                          value={inputApiUrl}
                          onChange={handleApiUrlChange}
                        />
                        <label
                          htmlFor="apiKey"
                          className="block text-sm font-medium text-gray-700 mt-4"
                        >
                          API Key
                        </label>
                        <input
                          type="text"
                          id="apiKey"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter API Key"
                          value={inputApiKey}
                          onChange={handleApiKeyChange}
                        />
                        <div className="flex flex-col space-y-1.5 mb-2 mt-2.5">
                          <label className="block text-foreground font-medium">
                            Disable Sync
                          </label>
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                                {selectedOption}
                                <FaCaretDown className="-mr-1 h-5 w-5 text-foreground" />
                              </MenuButton>
                            </div>

                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                              <div className="py-1.5">
                                <MenuItem>
                                  <a
                                    href="#"
                                    onClick={() => handleOptionClick("Yes")}
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                  >
                                    Yes
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    onClick={() => handleOptionClick("No")}
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                  >
                                    No
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </Menu>
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                          <button
                            type="button"
                            onClick={handleProviderClose}
                            className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-card shadow-md rounded-lg">
          <thead className="bg-secondary">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider"
              >
                Provider
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider"
              >
                Balance
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-6 py-3 whitespace-nowrap text-sm text-foreground">
                  {item.provider}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-foreground">
                  {item.balance}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-foreground">
                  <button className="flex items-center gap-x-1">
                    <MdEditSquare className="size-5 text-primary" />
                    <MdDelete className="size-5 text-destructive" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sellers;
