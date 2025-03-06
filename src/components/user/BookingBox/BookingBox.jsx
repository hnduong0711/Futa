import { Search } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SwitchLocation } from "../../../assets";
import LocationPicker from "../../shared/LocationPicker/LocationPicker";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const BookingBox = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isOneWay, setIsOneWay] = useState(true);
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleTripTypeChange = (e) => {
    setIsOneWay(e.target.value === "one-way");
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date); // date là một đối tượng dayjs
    console.log("Ngày chọn:", date ? date.format("DD/MM/YYYY") : null);
  };
  
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date); // date là một đối tượng dayjs
    console.log("Ngày chọn:", date ? date.format("DD/MM/YYYY") : null);
  };

  // Vô hiệu hóa ngày trước hôm nay
  const disablePastDates = (current) => {
    return current && current < dayjs().startOf("day");
  };

  // Vô hiệu hóa ngày trước ngày đi (dành cho ngày về)
  const disableDatesBeforeDeparture = (current) => {
    return (
      current &&
      (current < dayjs().startOf("day") ||
        (departureDate && current < departureDate))
    );
  };

  return (
    <div className="bg-futa-primary-hover/10 rounded-2xl p-2">
      {/* content booking box */}
      <div className="relative bg-white border border-futa-primary-hover rounded-2xl p-4 flex flex-col w-full space-y-2">
        {/* option type trip  */}
        <div className="flex justify-between w-full space-y-4">
          <div className="flex items-center space-x-6">
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                className="size-4 cursor-pointer"
                name="type"
                id="one-way"
                value="one-way"
                checked={isOneWay}
                onChange={handleTripTypeChange}
              />
              <span>Một chiều</span>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                className="size-4 cursor-pointer"
                name="type"
                id="round-trip"
                value="round-trip"
                checked={!isOneWay}
                onChange={handleTripTypeChange}
              />
              <span>Khứ hồi</span>
            </div>
          </div>
          <NavLink to="huong-dan-dat-ve-tren-web" className="text-futa-primary">
            Hướng dẫn mua vé
          </NavLink>
        </div>
        {/* info ticket booking */}
        <div className="flex items-center">
          <LocationPicker
            start={start}
            end={end}
            setStart={setStart}
            setEnd={setEnd}
          />

          <div className="p-3 flex flex-col relative space-y-2">
            <span className="absolute top-[-25%] text-[14px]">Ngày đi</span>
            <DatePicker
              onChange={handleStartDateChange}
              value={selectedStartDate}
              className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              format="DD/MM/YYYY" // Định dạng ngày hiển thị
            />
          </div>

          {!isOneWay && (
            <div className="p-3 flex flex-col relative space-y-2">
              <span className="absolute top-[-25%] text-[14px]">Ngày về</span>
              <DatePicker
                onChange={handleEndDateChange}
                value={selectedEndDate}
                className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                format="DD/MM/YYYY" // Định dạng ngày hiển thị
              />
            </div>
          )}
        </div>

        {/* button booking */}
        <div className="bg-futa-primary rounded-2xl p-2 text-white text-center w-[20%] cursor-pointer mx-auto absolute left-1/2 translate-x-[-50%]  top-[87%] hover:bg-futa-primary-hover transition-all duration-300">
          Tìm chuyến
        </div>
      </div>
    </div>
  );
};

export default BookingBox;
