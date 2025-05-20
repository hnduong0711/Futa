import { Search } from "lucide-react";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SwitchLocation } from "../../../../assets";
import LocationPicker from "../../../shared/LocationPicker/LocationPicker";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axios from "axios";

const BookingBox = ({ form, setForm, loading, setLoading, error, setError, setSchedules }) => {
  const navigate = useNavigate();
  const { origin, destination, departureDate, returnDate, isRoundTrip } = form;
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Form updated:", { origin, destination, departureDate, returnDate, isRoundTrip });
  }, [form]);

  const handleStartDateChange = (date) => {
    setForm((prev) => ({
      ...prev,
      departureDate: date ? date.format("YYYY-MM-DD") : null,
    }));
  };

  const handleEndDateChange = (date) => {
    setForm((prev) => ({
      ...prev,
      returnDate: date ? date.format("YYYY-MM-DD") : null,
    }));
  };

  const toggleRoundTrip = () => {
    setForm((prev) => ({
      ...prev,
      isRoundTrip: !prev.isRoundTrip,
      returnDate: !prev.isRoundTrip ? null : prev.returnDate,
    }));
  };

  const handleSearch = async () => {
    console.log("Handle search:", { origin, destination, departureDate, returnDate, isRoundTrip });

    if (!origin || !destination || !departureDate) {
      console.log("Validation failed:", { origin, destination, departureDate });
      setError("Vui lòng điền đầy đủ điểm đi, điểm đến và ngày đi");
      return;
    }
    if (isRoundTrip && !returnDate) {
      setError("Vui lòng chọn ngày về cho chuyến khứ hồi");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const departureResponse = await axios.get("http://localhost:8080/api/trip/search", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          departureCityId: origin,
          arrivalCityId: destination,
          departureAfter: `${departureDate}T00:00:00`,
        },
      });

      let returnSchedules = [];
      if (isRoundTrip) {
        const returnResponse = await axios.get("http://localhost:8080/api/trip/search", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            departureCityId: destination,
            arrivalCityId: origin,
            departureAfter: `${returnDate}T00:00:00`,
          },
        });
        returnSchedules = returnResponse.data;
      }

      console.log("Raw Departure schedules:", departureResponse.data);
      console.log("Raw Return schedules:", returnSchedules);

      // Lọc các chuyến xe có departureTime sau thời gian hiện tại
      const currentTime = dayjs();
      let filteredDepartureSchedules = departureResponse.data.filter((schedule) =>
        dayjs(schedule.departureTime).isAfter(currentTime)
      );
      let filteredReturnSchedules = returnSchedules.filter((schedule) =>
        dayjs(schedule.departureTime).isAfter(currentTime)
      );

      // Lọc thêm để chỉ giữ các chuyến xe trong đúng ngày departureDate và returnDate
      filteredDepartureSchedules = filteredDepartureSchedules.filter((schedule) =>
        dayjs(schedule.departureTime).isSame(dayjs(departureDate), "day")
      );
      if (isRoundTrip) {
        filteredReturnSchedules = filteredReturnSchedules.filter((schedule) =>
          dayjs(schedule.departureTime).isSame(dayjs(returnDate), "day")
        );
      }

      console.log("Filtered Departure schedules:", filteredDepartureSchedules);
      console.log("Filtered Return schedules:", filteredReturnSchedules);

      const scheduleList = {
        departure: filteredDepartureSchedules,
        return: filteredReturnSchedules,
      };
      setSchedules(scheduleList);

      // Truyền cả form và scheduleList qua navigate
      navigate("/dat-ve", { state: { form, scheduleList } });
    } catch (err) {
      console.error("API error:", err.response?.data || err.message);
      setError("Không thể tìm chuyến: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
      console.log("Loading set to false");
    }
  };

  return (
    <div className="bg-futa-primary-hover/10 rounded-2xl p-2">
      <div className="relative bg-white border border-futa-primary-hover rounded-2xl p-4 flex flex-col w-full space-y-2">
        <div className="flex justify-between w-full space-y-4">
          <div className="flex items-center space-x-6">
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                className="size-4 cursor-pointer"
                name="type"
                id="one-way"
                value="one-way"
                checked={isRoundTrip === false}
                onChange={toggleRoundTrip}
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
                checked={isRoundTrip === true}
                onChange={toggleRoundTrip}
              />
              <span>Khứ hồi</span>
            </div>
          </div>
          <NavLink to="huong-dan-dat-ve-tren-web" className="text-futa-primary">
            Hướng dẫn mua vé
          </NavLink>
        </div>
        <div className="flex items-center">
          <LocationPicker
            start={origin}
            end={destination}
            setStart={(value) => setForm((prev) => ({ ...prev, origin: value }))}
            setEnd={(value) => setForm((prev) => ({ ...prev, destination: value }))}
          />
          <div className="p-3 flex flex-col relative space-y-2">
            <span className="absolute top-[-25%] text-[14px]">Ngày đi</span>
            <DatePicker
              onChange={handleStartDateChange}
              value={departureDate ? dayjs(departureDate) : null}
              className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              format="DD/MM/YYYY"
            />
          </div>
          {isRoundTrip && (
            <div className="p-3 flex flex-col relative space-y-2">
              <span className="absolute top-[-25%] text-[14px]">Ngày về</span>
              <DatePicker
                onChange={handleEndDateChange}
                value={returnDate ? dayjs(returnDate) : null}
                className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                format="DD/MM/YYYY"
                disabledDate={(current) => current && current < dayjs(departureDate)}
              />
            </div>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="bg-futa-primary rounded-2xl p-2 text-white text-center w-[20%] cursor-pointer mx-auto absolute left-1/2 translate-x-[-50%] top-[87%] hover:bg-futa-primary-hover transition-all duration-300"
          disabled={loading}
        >
          Tìm chuyến
        </button>
      </div>
      {loading && <p className="text-gray-500 mt-4">Đang tải...</p>}
      {error && <p className="text-red-500 mt-4">Lỗi: {error}</p>}
    </div>
  );
};

export default BookingBox;