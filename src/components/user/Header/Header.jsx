import React, { useEffect, useRef, useState } from "react";
import {
  VNFlag,
  EngFlag,
  LogoHeader,
  DroplistIcon,
  DownloadApp,
  User,
  AndroidIcon,
  AppleIcon,
  Banner,
} from "../../../assets";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  // state for language
  const [lang, setLang] = useState("vn");
  const [openLang, setOpenLang] = useState(false);
  const langRef = useRef(null);
  // state for download app
  const [openDownApp, setOpenDownApp] = useState(false);
  const downloadRef = useRef(null);
  // state for navbar
  const [content, setContent] = useState("home");
  // nav menu
  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Lịch trình", path: "/lich-trinh" },
    { name: "Tra cứu vé", path: "/tra-cuu-ve" },
    { name: "Tin tức", path: "/tin-tuc" },
    { name: "Hóa đơn", path: "/hoa-don" },
    { name: "Liên hệ", path: "/lien-he" },
    { name: "Về chúng tôi", path: "/ve-chung-toi" },
  ];
  // location
  const location = useLocation();

  // click ra ngoài thì ẩn dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setOpenLang(false);
      }
      if (downloadRef.current && !downloadRef.current.contains(e.target)) {
        setOpenDownApp(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const setLangFunc = (lang) => {
    setLang(lang);
    setOpenLang(false);
  };

  return (
    <div
      className={`${
        location.pathname === "/" ? "h-[220px]" : "h-[150px]"
      } flex flex-col bg-gradient-to-b from-orange-400 to-orange-600 w-full relative`}
    >
      {/* Login section */}
      <div className="px-50 pt-4">
        <div className="flex justify-between items-center">
          {/* lang and download app */}
          <div className="flex space-x-4">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <div
                className="flex space-x-2 items-center cursor-pointer"
                onClick={() => setOpenLang(!openLang)}
              >
                <img
                  src={lang == "vn" ? VNFlag : EngFlag}
                  className="size-7"
                  alt="flag"
                />
                <span className="uppercase text-white text-[14px]">
                  {lang == "vn" ? "VI" : "EN"}
                </span>
                <img src={DroplistIcon} alt="" />
              </div>
              {openLang && (
                <div className="absolute top-1">
                  <div className="absolute top-[30px] left-0 bg-white w-[100px] space-y-2 rounded-md shadow-md">
                    <button
                      className="flex space-x-2 items-center cursor-pointer p-2 rounded-md hover:bg-slate-200 w-full transition-all"
                      onClick={() => setLangFunc("vn")}
                    >
                      <img src={VNFlag} className="size-7" alt="flag" />
                      <span className="text-[14px]">VI</span>
                    </button>
                    <button
                      className="flex space-x-2 items-center cursor-pointer p-2 rounded-md hover:bg-slate-200 w-full transition-all"
                      onClick={() => setLangFunc("en")}
                    >
                      <img src={EngFlag} className="size-7" alt="flag" />
                      <span className="text-[14px]">EN</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <span className="h-[24px] border-l border-white w-0.5"></span>
            {/* Download App */}
            <div className="relative" ref={downloadRef}>
              <div
                className="flex space-x-2 items-center cursor-pointer"
                onClick={() => setOpenDownApp(!openDownApp)}
              >
                <img src={DownloadApp} className="size-7" alt="flag" />
                <span className="text-white text-[14px]">Tải ứng dụng</span>
                <img src={DroplistIcon} alt="" />
              </div>
              {openDownApp && (
                <div className="absolute top-1">
                  <div className="absolute top-[30px] left-0 bg-white w-[100px] cursor-pointer space-y-2 rounded-md shadow-md">
                    <button
                      className="flex space-x-2 items-center cursor-pointer p-2 rounded-md hover:bg-slate-200 w-full transition-all"
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/apps/details?id=client.facecar.com",
                          "_blank"
                        )
                      }
                    >
                      <img src={AndroidIcon} className="size-7" alt="flag" />
                      <span className="text-[14px]">Android</span>
                    </button>
                    <button
                      className="flex space-x-2 items-center cursor-pointer p-2 rounded-md hover:bg-slate-200 w-full transition-all"
                      onClick={() =>
                        window.open(
                          "https://apps.apple.com/vn/app/futa/id1126633800",
                          "_blank"
                        )
                      }
                    >
                      <img src={AppleIcon} className="size-7" alt="flag" />
                      <span className="text-[14px]">iOS</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* logo */}
          <div className="absolute left-[50%] translate-x-[-50%] top-0 w-[300px] h-[70px]">
            <img src={LogoHeader} alt="logo" />
          </div>
          {/* login */}
          <NavLink
            to="/dang-nhap"
            className="bg-slate-200 flex items-center space-x-3 rounded-2xl px-6 py-2 cursor-pointer 
          hover:bg-slate-100 transition-all duration-300 ease-in-out
          "
          >
            <img src={User} className="size-5" alt="" />
            <span className="text-[14px] font-semibold">Đăng nhập</span>
          </NavLink>
        </div>
      </div>

      {/* Navbar */}
      {/* isActive là biến có sẵn nhé +1 kiến thức */}
      <div className="flex items-center uppercase text-white px-72 pt-12 font-semibold justify-between">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "underline underline-offset-8 decoration-white" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Banner sẽ ở đây */}
      {location.pathname === "/" && (
        <div className="shadow-2xl rounded-2xl absolute left-1/2 translate-x-[-50%] w-[70%] top-[150px]">
          <img src={Banner} className="rounded-2xl" alt="" />
        </div>
      )}
    </div>
  );
};

export default Header;
