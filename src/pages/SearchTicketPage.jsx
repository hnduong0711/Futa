import React, { useState } from "react";

const SearchTicketPage = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isCodeFocused, setIsCodeFocused] = useState(false);

  return (
    <div className="py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">
          TRA CỨU THÔNG TIN ĐẶT VÉ
        </h2>

        {/* Input Số điện thoại */}
        <div className="relative mb-6">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setIsPhoneFocused(true)}
            onBlur={() => setIsPhoneFocused(phone.length > 0)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder=" "
          />
          <label
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 ${
              isPhoneFocused || phone.length > 0
                ? "text-xs top-[-5%] bg-white px-1 text-green-600"
                : ""
            }`}
          >
            Số điện thoại
          </label>
        </div>

        {/* Input Mã vé */}
        <div className="relative mb-6">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(code.length > 0)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder=""
          />
          <label
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 ${
              isCodeFocused || code.length > 0
                ? "text-xs top-[-5%] bg-white px-1 text-green-600"
                : ""
            }`}
          >
            Mã vé
          </label>
        </div>

        {/* Nút Tra cứu */}
        <button className="w-full bg-red-200 text-red-600 p-3 rounded hover:bg-futa-primary hover:text-white transition-colors cursor-pointer">
          Tra cứu
        </button>
      </div>
    </div>
  );
};

export default SearchTicketPage;
