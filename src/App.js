import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboardview from "./components/Dashboardview";
import Main from "./components/Main";
import Chart from "./components/Chart";
import Productsell from "./components/Productsell";

function App() {
  return (
    <div className="flex">
      <div className="basis-[15%]">
        <Sidebar />
      </div>

      <div className="basis-[85%]  bg-slate-200">
        <Dashboardview />
        <Main />
        <Chart />
        <Productsell />
      </div>
    </div>
  );
}

export default App;
