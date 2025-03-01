import React from "react";
import { NavLink } from "react-router-dom";

const BookingBox = () => {
  return (
    <div className="bg-futa-primary-hover/20 rounded-2xl p-1">
      <div className="bg-white border border-futa-primary rounded-2xl p-2 flex w-full">
        {/*  */}
        <div className="flex justify-between w-full space-y-4">
          <div className="flex items-center space-x-2">
            <div className="space-x-2 flex items-center">
              <input type="radio" name="" id="" />
              <span>Một chiều</span>
            </div>
            <div className="space-x-2 flex items-center">
              <input type="radio" name="" id="" />
              <span>Khứ hồi</span>
            </div>
          </div>
          <NavLink to="huong-dan-dat-ve-tren-web" className="text-futa-primary">Hướng dẫn mua vé</NavLink>
        </div>
        {/*  */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default BookingBox;
