import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
const ServicesIndex = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-3">
        <button className="px-3 py-1 bg-transparent text-foreground border border-border rounded-sm">
          New Services
        </button>
        <button className="px-3 py-1 bg-transparent text-foreground border border-border rounded-sm">
          New Subsription
        </button>
        <button className="px-3 py-1 bg-transparent text-foreground border border-border rounded-sm">
          New Category
        </button>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="relative flex border border-border rounded-md">
          <input
            type="search"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          />
          <label
            htmlFor="exampleFormControlInput"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Search
          </label>
          <button
            className="relative bg-primary px-2 text-primary-foreground font-medium shadow-sm rounded-sm"
            type="button"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </button>
        </div>
        <button className="flex items-center gap-x-1 bg-primary text-primary-foreground py-[0.32rem] px-3 rounded-sm shadow-sm">
          <FaCirclePlus className="size-5" /> Import Services
        </button>
      </div>
    </div>
  );
};

export default ServicesIndex;
