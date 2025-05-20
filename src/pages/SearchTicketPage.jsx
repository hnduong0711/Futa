import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const SearchTicketPage = () => {
  const [code, setCode] = useState("");
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [booking, setBooking] = useState(null);
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!code) {
      setError("Vui lòng nhập mã vé");
      return;
    }

    setLoading(true);
    setError(null);
    setBooking(null);
    setTrip(null);

    try {
      // Gọi API lấy thông tin vé
      const bookingResponse = await axios.get(
        `http://localhost:8080/api/booking/getById/${code}`
      );
      const bookingData = bookingResponse.data;
      setBooking(bookingData);

      // Lấy tripId từ tripBookings
      const tripId = bookingData.tripBookings[0]?.tripId;
      if (!tripId) {
        throw new Error("Không tìm thấy thông tin chuyến đi");
      }

      // Gọi API lấy thông tin chuyến đi
      const tripResponse = await axios.get(
        `http://localhost:8080/api/trip/get/${tripId}`
      );
      setTrip(tripResponse.data.trip);
    } catch (err) {
      setError(
        "Không thể tra cứu vé: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">
          TRA CỨU THÔNG TIN ĐẶT VÉ
        </h2>

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
        <button
          onClick={handleSearch}
          className="w-full bg-red-200 text-red-600 p-3 rounded hover:bg-futa-primary hover:text-white transition-colors cursor-pointer"
          disabled={loading}
        >
          {loading ? "Đang tra cứu..." : "Tra cứu"}
        </button>

        {/* Hiển thị lỗi nếu có */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-600 rounded">
            {error}
          </div>
        )}

        {/* Hiển thị thông tin vé */}
        {booking && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Thông tin vé
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Mã vé:</span>
                <span className="text-gray-800">{booking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Số lượng ghế đặt:</span>
                <span className="text-gray-800">
                  {booking.tripBookings[0]?.seatBookings.length || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Danh sách ghế:</span>
                <span className="text-gray-800">
                  {booking.tripBookings[0]?.seatBookings
                    .map((seat) => seat.seatId)
                    .join(", ") || "Không có ghế"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Tổng tiền:</span>
                <span className="text-gray-800">
                  {booking.totalAmount.toLocaleString("vi-VN")}đ
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Ngày đặt:</span>
                <span className="text-gray-800">
                  {dayjs(booking.bookingDate).format("DD/MM/YYYY HH:mm:ss")}
                </span>
              </div>
              {trip && (
                <>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Điểm đi:</span>
                    <span className="text-gray-800">
                      {trip.tripInfo.departureCity.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Điểm đến:</span>
                    <span className="text-gray-800">
                      {trip.tripInfo.arrivalCity.name}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTicketPage;