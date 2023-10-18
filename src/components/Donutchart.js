import React from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const data = [{ name: "Donut", value: 1 }];

const COLORS = ["url(#blueToPurple)", "url(#purpleToPink)", "url(#pinkToGray)"];

const DonutChart = () => {
  return (
    <PieChart width={400} height={250}>
      <defs>
        <linearGradient id="blueToPurple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "blue" }} />
          <stop offset="100%" style={{ stopColor: "purple" }} />
        </linearGradient>
        <linearGradient id="purpleToPink" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "purple" }} />
          <stop offset="100%" style={{ stopColor: "pink" }} />
        </linearGradient>
        <linearGradient id="pinkToGray" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "pink" }} />
          <stop offset="100%" style={{ stopColor: "gray" }} />
        </linearGradient>
      </defs>
      {data.map((entry, index) => (
        <Pie
          key={`pie-${entry.name}`}
          data={[entry]}
          // cx={200}
          // cy={200}
          startAngle={0}
          endAngle={360}
          innerRadius={80}
          outerRadius={100}
          fill={COLORS[index]}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell key={`cell-${entry.name}`} fill={COLORS[index]} />
        </Pie>
      ))}
    </PieChart>
  );
};

export default DonutChart;
