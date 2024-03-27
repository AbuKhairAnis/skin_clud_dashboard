import React from "react";
import Sidebar from "./../ui/dashboard/Sidebar/Sidebar";
import Navbar from "../ui/dashboard/Navbar/Navbar";
import TItlebar from "../ui/dashboard/Titlebar/TItlebar";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <Sidebar />
      </div>
      <div>
        <div className="flex flex-col">
          <Navbar />
        </div>
        <div>
          <TItlebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
