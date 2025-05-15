import React, { useState } from "react";
import { TvcLogin, LogoText } from "../assets";
import { Phone, RectangleEllipsis, Eye, EyeOff } from "lucide-react";
import axios from "axios";

const LoginPage = () => {
  const [isHaveAccount, setIsHaveAccount] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý đăng nhập
  const handleLogin = async (email, password) => {
    console.log("Đang xử lý đăng nhập với email:", email, "và mật khẩu:", password);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        // lưu token vào localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Chuyển hướng đến trang chính
        window.location.href = "/trang-chu";
      } else {
        // Xử lý lỗi nếu cần
        console.error("Lỗi đăng nhập:", response.data);
      }
    } catch (error) {
      // Xử lý lỗi kết nối hoặc lỗi khác
      console.error("Lỗi kết nối:", error);
    }
  };

  return (
    <div className="flex items-center justify-center px-50 py-10">
      <div className="border border-futa-primary shadow-2xl px-4 py-20 rounded-2xl w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full flex flex-col relative">
            <img src={LogoText} className="w-[70%] absolute" alt="tvc" />
            <img src={TvcLogin} className="w-[170%]" alt="tvc" />
          </div>
          {/* form đăng nhập - đăng ký */}
          <div className="flex flex-col justify-between items-center">
            <span className="text-3xl font-semibold ">
              {isHaveAccount ? "Đăng nhập" : "Tạo tài khoản"}
            </span>
            {/* tab chuyển */}
            <div
              className={`flex justify-evenly items-center uppercase w-full font-bold text-lg`}
            >
              <div
                className={`${
                  isHaveAccount
                    ? "text-futa-primary border-b-2 transition-all border-futa-primary cursor-pointer"
                    : "cursor-pointer"
                } `}
                onClick={() => setIsHaveAccount((prev) => !prev)}
              >
                Đăng nhập
              </div>
              <div
                className={`${
                  !isHaveAccount
                    ? "text-futa-primary border-b-2 transition-all border-futa-primary cursor-pointer"
                    : "cursor-pointer"
                } `}
                onClick={() => setIsHaveAccount((prev) => !prev)}
              >
                Đăng ký
              </div>
            </div>
            {/* form content */}
            {isHaveAccount ? (
              <div className="flex flex-col justify-between items-center w-full px-8 space-y-8">
                <div className="flex justify-between items-center bg-futa-primary-hover/10 border border-futa-primary/60 rounded-lg p-2 w-full">
                  <Phone />
                  <input
                    className="w-[90%] outline-none bg-transparent"
                    type="text"
                    placeholder="Số điện thoại"
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="flex justify-between items-center bg-futa-primary-hover/10 border border-futa-primary/60 rounded-lg p-2 w-full">
                  <RectangleEllipsis />
                  <input
                    className="w-[90%] outline-none bg-transparent pl-5"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </span>
                </div>
                <div onClick={() => handleLogin(username, password)} className="w-4/5 cursor-pointer hover:bg-futa-primary-hover rounded-2xl bg-futa-primary text-[14px] text-white font-semibold h-[40px] leading-10 text-center">
                  Đăng nhập
                </div>
                <div className="underline text-futa-primary text-[14px] cursor-pointer">
                  Quên mật khẩu
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between items-center w-full px-8 space-y-8 pb-24">
                <div className="flex justify-between items-center bg-futa-primary-hover/10 border border-futa-primary/60 rounded-lg p-2 w-full">
                  <Phone />
                  <input
                    className="w-[90%] outline-none bg-transparent"
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </div>

                <div className="w-4/5 cursor-pointer hover:bg-futa-primary-hover rounded-2xl bg-futa-primary text-[14px] text-white font-semibold h-[40px] leading-10 text-center">
                  Đăng ký
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
