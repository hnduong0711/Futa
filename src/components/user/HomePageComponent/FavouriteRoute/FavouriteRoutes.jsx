import React from "react";
import { Fr1 } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { distance } from "framer-motion";

const FavouriteRoutes = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const todayWithTime = `${today}T00:00:00`;
  const token = localStorage.getItem("token");

  // Danh sách các điểm khởi hành và đích đến cụ thể
  const routes = [
    {
      departure: { id: "CT011", name: "TP. Hồ Chí Minh" },
      arrivals: [
        { id: "CT002", name: "Bà Rịa - Vũng Tàu", time: "3 giờ", distance: "130km" },
        { id: "CT025", name: "Vĩnh Long", time: "3,5 giờ", distance: "135km" },
        { id: "CT006", name: "Đà Nẵng", time: "9 giờ", distance: "930km" },
      ],
    },
    {
      departure: { id: "CT009", name: "Hà Nội" },
      arrivals: [
        { id: "CT010", name: "Hải Phòng", time: "3 giờ", distance: "120km" },
        { id: "CT016", name: "Nghệ An", time: "6 giờ", distance: "340km"},
        { id: "CT021", name: "Sơn La", time: "5 giờ", distance: "280km"},
      ],
    },
    {
      departure: { id: "CT005", name: "Cần Thơ" },
      arrivals: [
        { id: "CT020", name: "Sóc Trăng", time: "2 giờ", distance: "100km" },
        { id: "CT004", name: "Cà Mau", time: "3 giờ", distance: "150km" },
        { id: "CT022", name: "Tây Ninh", time: "3,5 giờ", distance: "220km" },
      ],
    },
  ];

  // Xử lý click vào row
  const handleRowClick = async (departureId, arrivalId) => {
    try {
      // Gọi API để lấy danh sách chuyến đi
      const departureResponse = await axios.get("http://localhost:8080/api/trip/search", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          departureCityId: departureId,
          arrivalCityId: arrivalId,
          departureAfter: todayWithTime,
        },
      });

      // Lọc các chuyến xe có departureTime sau thời gian hiện tại
      const currentTime = dayjs(); // 06:10 PM +07:00, 16/05/2025
      let filteredDepartureSchedules = departureResponse.data.filter((schedule) =>
        dayjs(schedule.departureTime).isAfter(currentTime)
      );

      // Lọc thêm để chỉ giữ các chuyến xe trong đúng ngày departureDate (hôm nay)
      filteredDepartureSchedules = filteredDepartureSchedules.filter((schedule) =>
        dayjs(schedule.departureTime).isSame(dayjs(today), "day")
      );

      // Tạo form và scheduleList giống BookingBox
      const form = {
        origin: departureId,
        destination: arrivalId,
        departureDate: today,
        returnDate: null,
        isRoundTrip: false,
      };

      const scheduleList = {
        departure: filteredDepartureSchedules,
        return: [],
      };

      // Điều hướng đến /dat-ve và truyền state
      navigate("/dat-ve", { state: { form, scheduleList } });
    } catch (err) {
      console.error("API error:", err.response?.data || err.message);
      alert("Không thể tìm chuyến: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="mt-10 w-screen -mx-50 bg-futa-primary/5 p-4">
      <div className="mx-50 space-y-4">
        <div className="flex flex-col space-y-4">
          <span className="text-futa-heading w-full font-semibold text-3xl uppercase text-center">
            tuyến phổ biến
          </span>
          <span className="text-center">
            Được khách hàng tin tưởng và lựa chọn
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.departure.id}
              className="shadow-[0_0_14px_rgba(0,0,0,0.1)] flex flex-col rounded-lg bg-white"
            >
              <div className="relative">
                <img src={Fr1} alt="" />
                <div className="flex flex-col absolute bottom-3 z-10 pl-2 text-white">
                  <span className="">Tuyến xe từ</span>
                  <span className="font-semibold text-xl">{route.departure.name}</span>
                </div>
              </div>
              <div className="grid grid-rows-3">
                {route.arrivals.map((arrival) => (
                  <div
                    key={arrival.id}
                    className="flex justify-between border-b-2 border-gray-200 p-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleRowClick(route.departure.id, arrival.id)}
                  >
                    <div className="flex flex-col">
                      <span className="text-futa-heading font-semibold text-[18px]">
                        {arrival.name}
                      </span>
                      <span className="text-gray-500">
                        {arrival.distance} - {arrival.time} - {today}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteRoutes;