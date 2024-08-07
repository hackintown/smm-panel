import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
import { VscPercentage } from "react-icons/vsc";
import TextEditor from "../ui/TextEditor";
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
const PaymentModals = ({ isPaymentModalOpen, setIsPaymentModalOpen }) => {
  console.log(`Its me modal: ${isPaymentModalOpen}`);
  const [inputValue, setInputValue] = useState({
    methodName: "",
    minimumAmount: "",
    maximumAmount: "",
    feePercentage: "",
    bonusPercentage: "",
    bonusStartAmount: "",
    merchantId: "",
    gmailAddress: "",
    appPassword: "",
    apiPublicKey: "",
    apiSecretKey: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [status, setStatus] = useState("Inactive");
  const closeOutClick = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleProviderClose = () => {
    setIsPaymentModalOpen(false);
  };
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  const handleStatusClick = (option) => {
    setStatus(option);
  };

  const handleClickOutside = (event) => {
    if (
      closeOutClick.current &&
      !closeOutClick.current.contains(event.target)
    ) {
      setIsPaymentModalOpen(false);
    } else {
      console.log("Clicked inside modal");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {isPaymentModalOpen && (
        <div  className="fixed z-10 inset-0 overflow-y-auto w-full">
          <div className="flex items-center justify-center min-h-screen text-center sm:block">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block"></span>
            &#8203;
            <div ref={closeOutClick} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white">
                <div className="">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 border-b border-border px-3.5 py-2.5">
                      {isPaymentModalOpen === "paytm"
                        ? "Paytm Integration"
                        : isPaymentModalOpen === "phonepay"
                        ? "PhonePay Integration"
                        : isPaymentModalOpen === "razorpay"
                        ? "RazorPay Integration"
                        : ""}
                    </h3>
                    <div className="my-5 px-3.5">
                      <form>
                        <label
                          htmlFor="apiUrl"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Method Name
                        </label>
                        <input
                          type="text"
                          id="methodName"
                          name="methodName"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter API URL"
                          value={inputValue.methodName}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor="apiKey"
                          className="block text-sm font-medium text-gray-700 mt-4"
                        >
                          Minimum Amount
                        </label>
                        <input
                          type="number"
                          id="minimumAmount"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          name="minimumAmount"
                          value={inputValue.minimumAmount}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor="apiKey"
                          className="block text-sm font-medium text-gray-700 mt-4"
                        >
                          Maximum Amount
                        </label>
                        <input
                          type="number"
                          id="maximumAmount"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          name="maximumAmount"
                          value={inputValue.maximumAmount}
                          onChange={handleInputChange}
                        />
                        <div className="">
                          <label
                            htmlFor="apiKey"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Fee Percentage
                          </label>
                          <div className="relative mt-1 flex items-center">
                            <input
                              type="number"
                              id="feePercentage"
                              name="feePercentage"
                              value={inputValue.feePercentage}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <VscPercentage className="absolute right-5 size-5 w-[30px] text-gray-500" />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="apiKey"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Bonus Percentage
                          </label>
                          <div className="relative mt-1 flex items-center">
                            <input
                              type="number"
                              id="bonusPercentage"
                              name="bonusPercentage"
                              value={inputValue.bonusPercentage}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <VscPercentage className="absolute right-5 size-5 w-[30px] text-gray-500" />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="apiKey"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Bonus Start Amount
                          </label>
                          <div className="relative mt-1 flex items-center">
                            <input
                              type="number"
                              id="bonusStartAmount"
                              name="bonusStartAmount"
                              value={inputValue.bonusStartAmount}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <VscPercentage className="absolute right-5 size-5 w-[30px] text-gray-500" />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1.5 mb-2 mt-2.5">
                          <label className="block text-foreground font-medium">
                            Status
                          </label>
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md px-3 py-2 font-medium text-sm bg-card text-card-foreground shadow-sm border border-border">
                                {status}
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
                                    onClick={() => handleStatusClick("Active")}
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                  >
                                    Active
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      handleStatusClick("Inactive")
                                    }
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                  >
                                    Inactive
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </Menu>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="instructions"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Instructions
                          </label>
                          <TextEditor
                            value={editorValue}
                            onChange={handleEditorChange}
                            modules={modules}
                            formats={formats}
                          />
                        </div>
                        {isPaymentModalOpen === "paytm" ? (
                          <>
                            <label
                              htmlFor="apiKey"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              Merchant ID
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="merchantId"
                              name="merchantId"
                              value={inputValue.merchantId}
                              onChange={handleInputChange}
                            />
                          </>
                        ) : isPaymentModalOpen === "phonepay" ? (
                          <>
                            <label
                              htmlFor="apiKey"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              Gmail Address
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="gmailAddress"
                              name="gmailAddress"
                              value={inputValue.gmailAddress}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="apiKey"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              App Password
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="appPassword"
                              name="appPassword"
                              value={inputValue.appPassword}
                              onChange={handleInputChange}
                            />
                          </>
                        ) : isPaymentModalOpen === "razorpay" ? (
                          <>
                            <label
                              htmlFor="apiKey"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              API Public Key
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="apiPublicKey"
                              name="apiPublicKey"
                              value={inputValue.apiPublicKey}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="apiKey"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              API Secret Key
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="apiSecretKey"
                              name="apiSecretKey"
                              value={inputValue.apiSecretKey}
                              onChange={handleInputChange}
                            />
                          </>
                        ) : (
                          ""
                        )}
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
    </div>
  );
};

export default PaymentModals;
