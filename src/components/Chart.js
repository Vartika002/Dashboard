import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";
import Donutchart from "./Donutchart";

const data = [
  { id: 1, month: "Jan", quater: 2.5 },
  { id: 2, month: "Feb", quater: 2 },
  { id: 3, month: "Mar", quater: 4 },
  { id: 4, month: "Apr", quater: 3.5 },
  { id: 5, month: "May", quater: 3.7 },
  { id: 6, month: "Jun", quater: 1.5 },
  { id: 7, month: "Jul", quater: 3.5 },
  { id: 8, month: "Aug", quater: 4 },
  { id: 9, month: "Sep", quater: 3.8 },
  { id: 10, month: "Oct", quater: 3.5 },
  { id: 11, month: "Nov", quater: 3.4 },
  { id: 12, month: "Dec", quater: 3.5 },
];

export default function Chart() {
  return (
    <div className="flex w-full gap-8 pl-6">
      <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold pl-4">Overview</h2>
            <h4 className="text-slate-300 text-xs font-bold pl-4">
              Monthly Earning
            </h4>
          </div>
          <div className="mr-4">
            <select
              className="bg-slate-100 text-slate-400 text-sm font-semibold rounded-md cursor-pointer"
              type="text"
            >
              <option>Quaterly</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={730} height={250} data={data}>
            <XAxis
              dataKey="month"
              className="text-xs font-bold"
              tickLine={false}
              axisLine={false}
            />
            {/* <Tooltip /> */}
            <Bar
              dataKey="quater"
              fill="#ddd7d7"
              radius={10}
              onMouseEnter={(e) => {
                e.fill = "#8884d8"; // Change the fill color on hover
              }}
              onMouseLeave={(e) => {
                e.fill = "#ddd7d7"; // Reset the fill color on hover out
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-lg mr-6">
        <div>
          <h2 className="font-bold pl-4">Customers</h2>
          <h4 className="text-slate-300 text-xs font-bold pl-4">
            Customers that buy products
          </h4>
          <div>
            <Donutchart />
          </div>
        </div>
      </div>
    </div>
  );
}
