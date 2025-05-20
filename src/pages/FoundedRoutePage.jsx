import React, { useState, useEffect } from "react";
import BookingBox from "../components/user/HomePageComponent/BookingBox/BookingBox";
import { Trash } from "lucide-react";
import { StationEnd, StationStart } from "../assets";
import SeatLayout from "../components/user/Subcontent/SeatLayout/SeatLayout";
import Policy from "../components/user/Subcontent/Policy/Policy";
import Transshipment from "../components/user/Subcontent/Transshipment/Transshipment";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

const FoundedRoutePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [subcontent, setSubcontent] = useState("");
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    departureDate: null,
    returnDate: null,
    isRoundTrip: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [schedules, setSchedules] = useState({ departure: [], return: [] });
  const [activeTab, setActiveTab] = useState("departure");
  const [selectedDepartureTrip, setSelectedDepartureTrip] = useState(null);
  const [selectedReturnTrip, setSelectedReturnTrip] = useState(null);
  const [timeFilters, setTimeFilters] = useState({
    earlyMorning: false, // 00:00 - 06:00
    morning: false, // 06:01 - 12:00
    afternoon: false, // 12:01 - 18:00
    evening: false, // 18:01 - 23:59
  });

  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
    }
    if (location.state?.scheduleList) {
      setSchedules(location.state.scheduleList);
    }
  }, [location.state]);

  useEffect(() => {
    console.log("Schedules updated:", schedules);
  }, [schedules]);

  const handleSubcontent = (content) => {
    if (subcontent !== "" && subcontent === content) setSubcontent("");
    else setSubcontent(content);
  };

  // Xử lý thay đổi checkbox
  const handleTimeFilterChange = (filter) => {
    setTimeFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  // Chỉ sắp xếp chuyến theo departureTime (lọc đã thực hiện ở BookingBox)
  const sortedDepartureSchedules = [...schedules.departure].sort((a, b) =>
    dayjs(a.departureTime).diff(dayjs(b.departureTime))
  );
  const sortedReturnSchedules = [...schedules.return].sort((a, b) =>
    dayjs(a.departureTime).diff(dayjs(b.departureTime))
  );

  // Lọc chuyến theo khung giờ
  const filterByTime = (schedule) => {
    const hour = dayjs(schedule.departureTime).hour();
    const isEarlyMorning = hour >= 0 && hour <= 6;
    const isMorning = hour > 6 && hour <= 12;
    const isAfternoon = hour > 12 && hour <= 18;
    const isEvening = hour > 18 && hour <= 23;

    // Nếu không checkbox nào được chọn, hiển thị tất cả
    const noFiltersSelected =
      !timeFilters.earlyMorning &&
      !timeFilters.morning &&
      !timeFilters.afternoon &&
      !timeFilters.evening;

    if (noFiltersSelected) return true;

    // Điều kiện OR: Hiển thị nếu chuyến thuộc bất kỳ khung giờ nào được chọn
    return (
      (timeFilters.earlyMorning && isEarlyMorning) ||
      (timeFilters.morning && isMorning) ||
      (timeFilters.afternoon && isAfternoon) ||
      (timeFilters.evening && isEvening)
    );
  };

  const filteredDepartureSchedules = sortedDepartureSchedules.filter(filterByTime);
  const filteredReturnSchedules = sortedReturnSchedules.filter(filterByTime);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSubcontent("");
  };

  const handleBookTrip = async (schedule, isDeparture) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`http://localhost:8080/api/trip/get/${schedule.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const tripData = response.data;
      console.log("Trip data:", tripData);

      if (isDeparture) {
        setSelectedDepartureTrip(tripData);
        if (form.isRoundTrip) {
          setActiveTab("return");
        } else {
          navigate("/chi-tiet-dat-ve", {
            state: { selectedDepartureTrip: tripData, selectedReturnTrip: null },
          });
        }
      } else {
        setSelectedReturnTrip(tripData);
        navigate("/chi-tiet-dat-ve", {
          state: { selectedDepartureTrip, selectedReturnTrip: tripData },
        });
      }
    } catch (err) {
      setError("Không thể lấy thông tin chuyến: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Xử lý bỏ lọc
  const handleClearFilters = () => {
    setTimeFilters({
      earlyMorning: false,
      morning: false,
      afternoon: false,
      evening: false,
    });
  };

  console.log("Selected Departure Trip:", selectedDepartureTrip);
  console.log("Selected Return Trip:", selectedReturnTrip);

  console.log("Rendering FoundedRoutePage...");
  console.log("sortedDepartureSchedules:", sortedDepartureSchedules);
  console.log("sortedReturnSchedules:", sortedReturnSchedules);

  return (
    <div className="px-50 py-10 relative">
      <div className="flex flex-col pt-44 space-y-12">
        <BookingBox
          form={form}
          setForm={setForm}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          setSchedules={setSchedules}
        />
        <div className="flex relative space-x-3">
          <div className="flex flex-col sticky top-0 w-1/3 bg-white p-4 rounded-2xl shadow-[0_0_14px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <span className="uppercase">bộ lọc tìm kiếm</span>
              <button
                className="text-futa-primary flex items-center cursor-pointer"
                onClick={handleClearFilters}
              >
                <Trash size={24} />
                <span>Bỏ lọc</span>
              </button>
            </div>
            {/* Nội dung bộ lọc */}
            <div className="py-10">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={timeFilters.earlyMorning}
                    onChange={() => handleTimeFilterChange("earlyMorning")}
                    className="size-4 cursor-pointer"
                  />
                  <span>Giờ sáng sớm (00:00 - 06:00)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={timeFilters.morning}
                    onChange={() => handleTimeFilterChange("morning")}
                    className="size-4 cursor-pointer"
                  />
                  <span>Giờ sáng (06:01 - 12:00)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={timeFilters.afternoon}
                    onChange={() => handleTimeFilterChange("afternoon")}
                    className="size-4 cursor-pointer"
                  />
                  <span>Giờ chiều (12:01 - 18:00)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={timeFilters.evening}
                    onChange={() => handleTimeFilterChange("evening")}
                    className="size-4 cursor-pointer"
                  />
                  <span>Giờ tối (18:01 - 23:59)</span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white w-2/3 p-4 rounded-2xl shadow-[0_0_14px_rgba(0,0,0,0.1)]">
            {form.isRoundTrip && (
              <div className="flex justify-between items-center mb-4">
                <div
                  className={`flex justify-center uppercase font-semibold text-xl w-full cursor-pointer mx-4 ${
                    activeTab === "departure"
                      ? "text-futa-primary border-b-2 border-futa-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTabClick("departure")}
                >
                  Chiều đi
                </div>
                <div
                  className={`flex justify-center uppercase font-semibold text-xl w-full cursor-pointer mx-4 ${
                    activeTab === "return"
                      ? "text-futa-primary border-b-2 border-futa-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTabClick("return")}
                >
                  Chiều về
                </div>
              </div>
            )}
            {(activeTab === "departure" && filteredDepartureSchedules.length === 0 && !loading) ||
            (activeTab === "return" && filteredReturnSchedules.length === 0 && !loading) ? (
              <p className="text-gray-500 text-center">Không tìm thấy chuyến phù hợp</p>
            ) : null}
            {activeTab === "departure" && filteredDepartureSchedules.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Chiều đi</h3>
                {filteredDepartureSchedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="bg-white rounded-2xl shadow-[1_1_15px_rgba(0,0,0,0.2)] w-full flex flex-col space-y-4 p-2 mb-4"
                  >
                    <div className="flex">
                      <div className="basis-3/4 flex flex-col space-y-2">
                        <div className="flex w-full justify-between">
                          <span className="text-3xl font-medium">
                            {dayjs(schedule.departureTime).format("HH:mm")}
                          </span>
                          <div className="flex space-x-2 items-center">
                            <img src={StationStart} alt="" className="size-5" />
                            <span className="text-slate-400">---------</span>
                            <span className="text-slate-600">
                              {dayjs(schedule.arrivalTime).diff(dayjs(schedule.departureTime), "hour")} giờ
                            </span>
                            <span className="text-slate-400">---------</span>
                            <img src={StationEnd} alt="" className="size-5" />
                          </div>
                          <span className="text-3xl font-medium">
                            {dayjs(schedule.arrivalTime).format("HH:mm")}
                          </span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="text-[14px] font-medium">
                            {schedule?.pickupArea?.city?.name || "N/A"}
                          </span>
                          <span className="text-[14px] font-medium">
                            {schedule?.tripInfo?.arrivalCity?.name || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="basis-1/4 text-xl text-futa-primary font-semibold flex items-center justify-end">
                        {schedule.seatPrice ? `${schedule.seatPrice.toLocaleString("vi-VN")}đ` : "Không có giá"}
                      </div>
                    </div>
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
                                ? "text-futa-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-futa-primary"
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
                        <button
                          onClick={() => handleBookTrip(schedule, true)}
                          className="bg-futa-primary text-center text-white rounded-2xl py-2 cursor-pointer basis-1/4"
                          disabled={loading}
                        >
                          Đặt chỗ
                        </button>
                      </div>
                      <div className="py-4">
                        {subcontent === "book" && <SeatLayout />}
                        {subcontent === "transshipment" && <Transshipment />}
                        {subcontent === "policy" && <Policy />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {form.isRoundTrip && activeTab === "return" && filteredReturnSchedules.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Chiều về</h3>
                {filteredReturnSchedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="bg-white rounded-2xl shadow-[1_1_15px_rgba(0,0,0,0.2)] w-full flex flex-col space-y-4 p-2 mb-4"
                  >
                    <div className="flex">
                      <div className="basis-3/4 flex flex-col space-y-2">
                        <div className="flex w-full justify-between">
                          <span className="text-3xl font-medium">
                            {dayjs(schedule.departureTime).format("HH:mm")}
                          </span>
                          <div className="flex space-x-2 items-center">
                            <img src={StationStart} alt="" className="size-5" />
                            <span className="text-slate-400">---------</span>
                            <span className="text-slate-600">
                              {dayjs(schedule.arrivalTime).diff(dayjs(schedule.departureTime), "hour")} giờ
                            </span>
                            <span className="text-slate-400">---------</span>
                            <img src={StationEnd} alt="" className="size-5" />
                          </div>
                          <span className="text-3xl font-medium">
                            {dayjs(schedule.arrivalTime).format("HH:mm")}
                          </span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="text-[14px] font-medium">
                            {schedule?.pickupArea?.city?.name || "N/A"}
                          </span>
                          <span className="text-[14px] font-medium">
                            {schedule?.tripInfo?.arrivalCity?.name || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="basis-1/4 text-xl text-futa-primary font-semibold flex items-center justify-end">
                        {schedule.seatPrice ? `${schedule.seatPrice.toLocaleString("vi-VN")}đ` : "140.000đ"}
                      </div>
                    </div>
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
                                ? "text-futa-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-futa-primary"
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
                        <button
                          onClick={() => handleBookTrip(schedule, false)}
                          className="bg-futa-primary text-center text-white rounded-2xl py-2 cursor-pointer basis-1/4"
                          disabled={loading || !selectedDepartureTrip}
                        >
                          Đặt chỗ
                        </button>
                      </div>
                      <div className="py-4">
                        {subcontent === "book" && <SeatLayout />}
                        {subcontent === "transshipment" && <Transshipment />}
                        {subcontent === "policy" && <Policy />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundedRoutePage;