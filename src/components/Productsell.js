import React from "react";
import { FaSearch } from "react-icons/fa";
import threed from "../Assests/threed.png";
import image from "../Assests/image.png";

export default function Productsell() {
  return (
    <div className="flex mt-6 pl-6">
      <div className="w-full h-38 mr-4 border bg-white shadow-md cursor-pointer rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold pt-1 pl-4">Product Sell</h2>
            <h4 className="text-slate-300 text-xs font-bold pt-6 pl-4">
              Product Name
            </h4>
          </div>
          <div>
            <div className="relative pr-8">
              <input
                type="text"
                className="bg-slate-100 text-slate-400 h-7 outline-none pl-8 w-32 rounded-md leading-5 font-semibold text-sm mb-4 ml-auto"
                placeholder="Search"
              />
              <div className="text-gray-500 text-sm absolute left-4 top-1/4 transform -translate-y-1/2">
                <FaSearch />
              </div>
              <select
                className="bg-slate-100 text-slate-400 h-7 text-sm font-semibold rounded-md cursor-pointer mt-2"
                type="text"
              >
                <option>Last 30 days</option>
              </select>
              <div className="flex items-center">
                <div className="mt-4 text-slate-300 font-semibold text-sm mr-11">
                  Stock
                </div>
                <div className="mt-4 text-slate-300 font-semibold text-sm mr-11">
                  Price
                </div>
                <div className="mt-4 text-slate-300 font-semibold text-sm">
                  Total Sales
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 pl-2 flex items-center">
            <img src={threed} alt="3d-img" className="w-12 h-12" />
            <div className="ml-0">
              <h2 className="font-bold pl-4">Abstract 3D</h2>
              <h4 className="text-slate-300 text-xs font-bold pl-4">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
            <div className="flex ml-auto ">
              {/* Added 'ml-auto' to move items to the right */}
              <h4 className="text-xs pl-4 mr-9">32 in Stock</h4>
              <h4 className="font-bold text-sm pl-4 mr-9">$ 45.99</h4>
              <h4 className="text-xs pl-4 mr-9">20</h4>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 pl-2 flex items-center">
            <img src={image} alt="img" className="w-12 h-12" />
            <div className="ml-0">
              <h2 className="font-bold pl-4">Sarphens Illustration</h2>
              <h4 className="text-slate-300 text-xs font-bold pl-4">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
            </div>
            <div className="flex ml-auto ">
              {/* Added 'ml-auto' to move items to the right */}
              <h4 className="text-xs pl-4 mr-9">32 in Stock</h4>
              <h4 className="font-bold text-sm pl-4 mr-9">$ 45.99</h4>
              <h4 className="text-xs pl-4 mr-9">20</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
