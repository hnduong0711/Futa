import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bill, Gbttime, NewsPaper, Schedule, Trip } from "../../../assets";
import { Bus, User, UserCircle } from "lucide-react";

const Sidebar = () => {
  const NavList = [
    // {
    //   id: 1,
    //   name: "Dashboard",
    //   icon: <img src={Gbttime} alt="dashboard" className="size-7" />,
    //   path: "/admin/dashboard",
    // },
    {
      id: 2,
      name: "Lịch trình",
      icon: <img src={Schedule} alt="dashboard" className="size-7" />,
      path: "/admin/lich-trinh",
    },
    {
      id: 3,
      name: "Chuyến xe",
      icon: <img src={Trip} alt="dashboard" className="size-7" />,
      path: "/admin/chuyen-xe",
    },
    {
      id: 4,
      name: "Trạm xe",
      icon: <img src="https://cdn-icons.flaticon.com/svg/2207/2207497.svg?token=exp=1747295750~hmac=2d5deee939fa5e886b2db741a6bec13c" alt="dashboard" className="size-7" />,
      path: "/admin/khoi-hanh",
    },
    // {
    //   id: 5,
    //   name: "Hóa đơn",
    //   icon: <img src={Bill} alt="dashboard" className="size-7" />,
    //   path: "/admin/hoa-don",
    // },
    {
      id: 6,
      name: "Tuyến đường",
      icon: <img src={Schedule} alt="dashboard" className="size-7" />,
      path: "/admin/tuyen-duong",
    },
  ];

  const handleLogout = () => {
    localStorage.setItem("isAdminLoggedIn", "false");
    window.location.reload(); 
  }

  return (
    <div className="w-1/3 p-4 bg-futa-primary border flex flex-col justify-between border-slate-300 shadow-[0_0_4px_4px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col space-y-2">
        {NavList.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "bg-slate-100" : "text-white hover:bg-futa-primary-hover transition-all duration-300 ease-in-out"
              } p-2 rounded-md flex space-x-2 items-center`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-md ">
         <UserCircle size={24} />
         <span>Admin</span>
        </div>
        <button onClick={handleLogout} className="bg-white font-semibold text-futa-primary  p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
