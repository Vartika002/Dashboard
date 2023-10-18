import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Dashboardview() {
  return (
    <div>
      <div className="flex items-center rounded-sm pt-4">
        <p className="pl-6 font-medium">
          Hello Shahrukh <span className="">&#128075;</span>,
        </p>
        <div className="relative ml-auto pr-8">
          <input
            type="text"
            className="bg-slate-100 h-8 outline-none pl-8 w-52 rounded-md leading-5 font-medium"
            placeholder="Search"
          />
          <div className="text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
