import React from "react";
import { FaChevronRight } from "react-icons/fa";
import dashboard from "../Assests/dashboard.png";
import dashboard1 from "../Assests/dashboard1.png";
import product from "../Assests/product.png";
import customer from "../Assests/customer.png";
import income from "../Assests/income.png";
import promote from "../Assests/promote.png";
import help from "../Assests/help.png";

export default function Sidebar() {
  const dashboardMenu = [
    { id: 1, src: product, title: "Product" },
    { id: 2, src: customer, title: "Customers" },
    { id: 3, src: income, title: "Income" },
    { id: 4, src: promote, title: "Promote" },
    { id: 5, src: help, title: "Help" },
  ];

  return (
    <>
      <div className="bg-[#040440] h-full px-4">
        <div className="flex items-center gap-2 py-5">
          <img className="bg-[#040440]" src={dashboard} alt="dashboard-img" />
          <p className="text-white text-2xl leading-10 font-bold cursor-pointer">
            Dashboard
          </p>
        </div>

        <div className="pt-10">
          <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={dashboard1} alt="dashboard1-img" />
              <p className="leading-5 font-medium text-lg text-white">
                Dashboard
              </p>
            </div>
          </div>

          {dashboardMenu.map(({ id, src, title }) => (
            <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
              <div key={id} className="flex items-center gap-2">
                <img src={src} alt="dashboard1-img" />
                <p className="leading-5 font-medium text-lg text-white">
                  {title}
                </p>
              </div>
              <FaChevronRight color="white" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
