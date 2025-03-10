import React, { useState } from "react";
import BookingBox from "../components/user/HomePageComponent/BookingBox/BookingBox";
import { Trash } from "lucide-react";
import { StationEnd, StationStart } from "../assets";
import SeatLayout from "../components/user/Subcontent/SeatLayout/SeatLayout";
import Policy from "../components/user/Subcontent/Policy/Policy";
import Transshipment from "../components/user/Subcontent/Transshipment/Transshipment";

const FoundedRoutePage = () => {
  const [subcontent, setSubcontent] = useState("");

  const handleSubcontent = (content) => {
    
    if(subcontent !== "" && subcontent === content ) setSubcontent("");
    else setSubcontent(content);
  };

  return (
    <div className="px-50 py-10 relative">
      <div className="flex flex-col pt-44 space-y-12">
        <BookingBox />
        {/* Kết quả tìm kiếm */}
        <div className="flex relative space-x-3">
          {/* Filter */}
          <div className="flex flex-col sticky top-0 w-1/3 bg-white p-4 rounded-2xl shadow-[0_0_14px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <span className="uppercase">bộ lọc tìm kiếm</span>
              <button
                className="text-futa-primary flex items-center cursor-pointer"
                onClick={() => {}}
              >
                <Trash size={24} />
                <span>Bỏ lọc</span>
              </button>
            </div>
          </div>
          {/* List */}
          <div className="bg-white w-2/3 p-4 rounded-2xl shadow-[0_0_14px_rgba(0,0,0,0.1)]">
            <div className="bg-white rounded-2xl shadow-[1_1_15px_rgba(0,0,0,0.2)] w-full flex flex-col space-y-4 p-2">
              <div className="flex">
                <div className="basis-3/4 flex flex-col space-y-2">
                  <div className="flex w-full justify-between">
                    <span className="text-3xl font-medium">03:00</span>
                    <div className="flex space-x-2 items-center">
                      <img src={StationStart} alt="" className="size-5" />
                      <span className="text-slate-400">---------</span>
                      <span className="text-slate-600">3 giờ</span>
                      <span className="text-slate-400">---------</span>
                      <img src={StationEnd} alt="" className="size-5" />
                    </div>
                    <span className="text-3xl font-medium">06:00</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-[14px] font-medium">
                      Địa điểm đón khách
                    </span>
                    <span className="text-[14px] font-medium">
                      Địa điểm trả khách
                    </span>
                  </div>
                </div>
                <div className="basis-1/4 text-xl text-futa-primary font-semibold flex items-center justify-end">
                  140.000đ
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="flex basis-3/4 space-x-6 items-center">
                    <span
                      className={`relative pb-2 cursor-pointer ${
                        subcontent === "book"
                          ? "text-futa-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-futa-primary"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSubcontent("book")}
                    >
                      Chọn ghế
                    </span>
                    <span
                      className={`relative pb-2 cursor-pointer ${
                        subcontent === "transshipment"
                          ? "text-futa-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-futa-primary tion-all durati"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSubcontent("transshipment")}
                    >
                      Trung chuyển
                    </span>
                    <span
                      className={`relative pb-2 cursor-pointer ${
                        subcontent === "policy"
                          ? "text-futa-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-futa-primary"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSubcontent("policy")}
                    >
                      Chính sách
                    </span>
                  </div>
                  <button className="bg-futa-primary text-white rounded-2xl py-2 cursor-pointer basis-1/4">
                    Đặt chỗ
                  </button>
                </div>
                {/* Subcontent */}
                <div className="py-4 ">
                  {subcontent === "book" && <SeatLayout />}
                  {subcontent === "transshipment" && <Transshipment />}
                  {subcontent === "policy" && <Policy />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundedRoutePage;
