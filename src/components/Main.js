import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import earning from "../Assests/earning.png";
import orders from "../Assests/orders.png";
import balance from "../Assests/balance.png";
import totalorder from "../Assests/totalorder.png";

export default function Main() {
  return (
    <div className="pt-4 px-6">
      <div className="grid grid-cols-4 gap-8 mt-6 pb-4">
        <div className="h-32 rounded-lg bg-white border-l-2 flex items-center justify-center px-8 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center">
            <img
              src={earning}
              alt="earning-img"
              className="-ml-7"
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <h4 className="text-slate-300 text-md leading-4 font-semibold">
                Earning
              </h4>
              <h2 className="text-lg leading-6 font-bold mt-1">$198k</h2>
              <div className="flex items-center">
                <AiOutlineArrowUp className="text-green-600 text-lg" />
                <span className="text-green-600 font-bold text-xs">
                  37.8%
                </span>{" "}
                <span className="text-xs">this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-white border-l-2 flex items-center justify-center px-8 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center">
            <img
              src={orders}
              alt="earning-img"
              className="-ml-7"
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <h4 className="text-slate-300 text-md leading-4 font-semibold">
                Orders
              </h4>
              <h2 className="text-lg leading-6 font-bold mt-1">$2.4k</h2>
              <div className="flex items-center">
                <AiOutlineArrowDown className="text-pink-600 text-lg" />
                <span className="text-pink-600 font-bold text-xs">2%</span>{" "}
                <span className="text-xs ml-1">this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-white border-l-2 flex items-center justify-center px-8 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center">
            <img
              src={balance}
              alt="earning-img"
              className="-ml-8"
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <h4 className="text-slate-300 text-md leading-4 font-semibold">
                Balance
              </h4>
              <h2 className="text-lg leading-6 font-bold mt-1">$2.4k</h2>
              <div className="flex items-center">
                <AiOutlineArrowDown className="text-pink-600 text-lg" />
                <span className="text-pink-600 font-bold text-xs">2%</span>
                <span className="text-xs ml-1">this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-white border-l-2 flex items-center justify-center px-8 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div className="flex items-center">
            <img
              src={totalorder}
              alt="earning-img"
              className="-ml-7"
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <h4 className="text-slate-300 text-md leading-4 font-semibold">
                Total Sales
              </h4>
              <h2 className="text-lg leading-6 font-bold mt-1">$89k</h2>
              <div className="flex items-center">
                <AiOutlineArrowUp className="text-green-600 text-lg" />
                <span className="text-green-600 font-bold text-xs">11%</span>
                <span className="text-xs ml-1">this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
