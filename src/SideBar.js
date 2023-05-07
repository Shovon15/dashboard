import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DashboardContext } from "./Context/DashboardContext";
import { useRef } from "react";

export default function Sidebar() {
  const { open, setOpen } = useContext(DashboardContext);

  const [openClass, setOpenClass] = useState("w-full");

  const openCheck = useMemo(() => {
    if (open) setOpenClass("w-full ease-in-out duration-500");
    else setOpenClass("w-12 ease-in-out duration-500");
  }, [open]);

  // ---------for click outside nav close--------------------
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(window.innerWidth >= 920);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menus = [
    { name: "Dashboard", link: "", icon: "stats-chart-outline" },
    {
      name: "E-Commerce",
      link: "dashboard/e-commerce",
      icon: "bag-handle-outline",
    },
    {
      name: "Inbox",
      link: "dashboard/inbox",
      icon: "chatbox-ellipses-outline",
    },
    {
      name: "Profile",
      link: "dashboard/profile",
      icon: "person-circle-outline",
      margin: true,
    },
    { name: "Setting", link: "dashboard/setting", icon: "settings-outline" },
    { name: "Log Out", link: "dashboard/logout", icon: "log-out-outline" },
  ];
  return (
    <Card
      className={`fixed ${
        open ? "w-72" : "w-20"
      } min-h-screen bg-[#28dab6] z-10 text-white p-4 shadow-xl duration-500 rounded-none
       shadow-blue-gray-900/5`}
      ref={menuRef}
    >
      <div className="mb-2 p-0 flex justify-between items-center">
        <Typography
          variant="h5"
          className={`${open ? "block" : "hidden"} opacity-1 overflow-hidden`}
        >
          Dashboard
        </Typography>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer mx-3 my-2"
        >
          {open ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <List className="ml-0 pl-0">
        {menus.map((menu, i) => {
          return (
            <NavLink
              key={i}
              to={`${menu.link}`}
              className={({ isActive }) =>
                isActive
                  ? `bg-gray-200 rounded-md ease-in-out duration-100 font-bold ${openClass}`
                  : `${openClass}`
              }
            >
              <Tooltip
                content={menu.name}
                placement="right"
                className={`${open ? "hidden" : "block"}`}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <ListItem key={i}>
                  <ListItemPrefix>
                    <ion-icon
                      name={menu.icon}
                      style={{
                        fontSize: "26px",
                        color: "#2c3e50",
                      }}
                    />
                  </ListItemPrefix>
                  <p
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu.name}
                  </p>
                </ListItem>
              </Tooltip>
            </NavLink>
          );
        })}
      </List>
    </Card>
  );
}
