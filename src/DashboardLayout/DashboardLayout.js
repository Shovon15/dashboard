import React, { useContext } from "react";
import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";
import { DashboardContext } from "../Context/DashboardContext";

const DashboardLayout = () => {
  const { open } = useContext(DashboardContext);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-[100px] md:w-[365px]" : "w-[100px] md:w-[85px]"
        } duration-500`}
      >
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
