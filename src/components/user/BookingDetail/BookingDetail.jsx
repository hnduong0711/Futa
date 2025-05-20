import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeatLayout from "../../shared/SeatLayout/SeatLayout";
import dayjs from "dayjs";
import axios from "axios";

// Ánh xạ bookedSeats từ S001, S002 sang A01, B01, ...
const mapBookedSeats = (bookedSeats) => {
  const seatMapping = {
    S001: "A01",
    S002: "A02",
    S003: "A03",
    S004: "A04",
    S005: "A05",
    S006: "A06",
    S007: "A07",
    S008: "A08",
    S009: "A09",
    S010: "A10",
    S011: "A11",
    S012: "A12",
    S013: "A13",
    S014: "A14",
    S015: "A15",
    S016: "A16",
    S017: "A17",
    S018: "A18",
    S019: "B01",
    S020: "B02",
    S021: "B03",
    S022: "B04",
    S023: "B05",
    S024: "B06",
    S025: "B07",
    S026: "B08",
    S027: "B09",
    S028: "B10",
    S029: "B11",
    S030: "B12",
    S031: "B13",
    S032: "B14",
    S033: "B15",
    S034: "B16",
    S035: "B17",
    S036: "B18",
  };
  return bookedSeats.map((seat) => seatMapping[seat] || seat);
};

const BookingDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDepartureTrip, selectedReturnTrip } = location.state || {};
  const isRoundTrip = !!selectedReturnTrip;

  // State để quản lý ghế đã chọn, ghế đã đặt, và bookingId
  const [departureSelectedSeats, setDepartureSelectedSeats] = useState([]);
  const [returnSelectedSeats, setReturnSelectedSeats] = useState([]);
  const [departureBookedSeats, setDepartureBookedSeats] = useState(
    mapBookedSeats(selectedDepartureTrip?.bookedSeats || [])
  );
  const [returnBookedSeats, setReturnBookedSeats] = useState(
    mapBookedSeats(selectedReturnTrip?.bookedSeats || [])
  );
  const [bookingIds, setBookingIds] = useState({
    departure: null,
    return: null,
  }); // Lưu bookingId cho mỗi chuyến
  const [error, setError] = useState(null);

  // State và Ref cho bộ đếm thời gian
  const [timeLeft, setTimeLeft] = useState(300); // 15 phút = 900 giây
  const timerRef = useRef(null);

  // Lấy thông tin user từ localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userId = user.id;

  // Debug dữ liệu trip
  useEffect(() => {
    console.log("Trip data:", { selectedDepartureTrip, selectedReturnTrip });
    if (!selectedDepartureTrip || !selectedDepartureTrip.trip) {
      setError("Không có thông tin chuyến đi. Vui lòng chọn lại.");
    } else if (
      !selectedDepartureTrip.trip.tripInfo ||
      !selectedDepartureTrip.trip.tripInfo.departureCity
    ) {
      setError("Dữ liệu chuyến đi không hợp lệ.");
    }
  }, [selectedDepartureTrip, selectedReturnTrip]);

  // Điều chỉnh bộ đếm thời gian khi có ghế được chọn
  useEffect(() => {
    const hasSelectedSeats =
      departureSelectedSeats.length > 0 || returnSelectedSeats.length > 0;

    if (hasSelectedSeats && !timerRef.current) {
      // Khởi động bộ đếm nếu có ghế được chọn và chưa chạy
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleClearAllSeats();
            alert("Hết thời gian giữ vé");
            window.location.reload();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!hasSelectedSeats && timerRef.current) {
      // Reset bộ đếm và xóa vé khi không còn ghế được chọn
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimeLeft(300); // Reset về 15 phút
      handleClearAllSeats(); // Gọi API xóa vé
    }

    return () => clearInterval(timerRef.current);
  }, [departureSelectedSeats, returnSelectedSeats]);

  // Định dạng thời gian mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Tải lại bookedSeats định kỳ (mỗi 10 giây)
  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        if (selectedDepartureTrip?.trip?.id) {
          const departureResponse = await axios.get(
            `http://localhost:8080/api/trip/get/${selectedDepartureTrip.trip.id}`
          );
          const newDepartureBookedSeats = mapBookedSeats(
            departureResponse.data.bookedSeats || []
          );
          setDepartureBookedSeats((prev) =>
            newDepartureBookedSeats.filter(
              (seat) => !departureSelectedSeats.includes(seat)
            )
          );
        }

        if (isRoundTrip && selectedReturnTrip?.trip?.id) {
          const returnResponse = await axios.get(
            `http://localhost:8080/api/trip/get/${selectedReturnTrip.trip.id}`
          );
          const newReturnBookedSeats = mapBookedSeats(
            returnResponse.data.bookedSeats || []
          );
          setReturnBookedSeats((prev) =>
            newReturnBookedSeats.filter(
              (seat) => !returnSelectedSeats.includes(seat)
            )
          );
        }
      } catch (err) {
        console.error("Error fetching booked seats:", err);
        if (err.response?.status === 400) {
          alert("Ghế đã được người khác đặt. Vui lòng chọn lại.");
        }
      }
    };

    fetchBookedSeats(); // Gọi ngay lần đầu
    const interval = setInterval(fetchBookedSeats, 10000); // Gọi lại mỗi 10 giây

    return () => clearInterval(interval);
  }, [
    selectedDepartureTrip,
    selectedReturnTrip,
    departureSelectedSeats,
    returnSelectedSeats,
    isRoundTrip,
  ]);

  // Xử lý xóa hết các ghế đang chọn
  const handleClearAllSeats = async () => {
    const token = localStorage.getItem("token");
    try {
      if (departureSelectedSeats.length > 0 && bookingIds.departure) {
        await axios.delete(
          `http://localhost:8080/api/booking/delete/${bookingIds.departure}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (isRoundTrip && returnSelectedSeats.length > 0 && bookingIds.return) {
        await axios.delete(
          `http://localhost:8080/api/booking/delete/${bookingIds.return}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      }

      setDepartureSelectedSeats([]);
      setReturnSelectedSeats([]);
      setBookingIds({ departure: null, return: null }); // Reset bookingIds
    } catch (err) {
      console.error("Error clearing seats:", err);
      setError(
        "Không thể xóa ghế: " + (err.response?.data?.message || err.message)
      );
    }
  };

  // Xử lý click ghế
  const handleSeatClick = async (seatNumber, isDeparture) => {
    const token = localStorage.getItem("token");
    const tripId = isDeparture
      ? selectedDepartureTrip?.trip?.id
      : selectedReturnTrip?.trip?.id;
    const setSeats = isDeparture
      ? setDepartureSelectedSeats
      : setReturnSelectedSeats;
    const currentSeats = isDeparture
      ? departureSelectedSeats
      : returnSelectedSeats;
    const bookedSeats = isDeparture ? departureBookedSeats : returnBookedSeats;

    // Kiểm tra nếu ghế đã được đặt hoặc đang chọn (trừ trường hợp bỏ chọn)
    if (
      bookedSeats.includes(seatNumber) ||
      (currentSeats.includes(seatNumber) && !currentSeats.includes(seatNumber))
    ) {
      alert("Ghế này đã được đặt hoặc đang chọn. Vui lòng chọn ghế khác.");
      const response = await axios.get(
        `http://localhost:8080/api/trip/get/${tripId}`
      );
      const newBookedSeats = mapBookedSeats(response.data.bookedSeats || []);
      if (isDeparture) {
        setDepartureBookedSeats(
          newBookedSeats.filter((seat) => !currentSeats.includes(seat))
        );
      } else {
        setReturnBookedSeats(
          newBookedSeats.filter((seat) => !currentSeats.includes(seat))
        );
      }
      window.location.reload();
      return;
    }

    // Kiểm tra xem ghế đang được chọn hay bỏ chọn
    const isSelecting = !currentSeats.includes(seatNumber);

    try {
      if (isSelecting) {
        // Chọn ghế: Gọi API book
        const response = await axios.post(
          "http://localhost:8080/api/booking/book",
          {
            userId,
            tripId,
            seatId: [seatNumber],
            seatPrice: isDeparture ? departureSeatPrice : returnSeatPrice,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Book seat response:", response.data);

        // Giả định response chứa bookingId (có thể cần điều chỉnh theo API thực tế)
        const bookingId = response.data.bookingId || response.data.id; // Thay bằng key thực tế từ API
        setSeats((prev) => [...prev, seatNumber]);
        setBookingIds((prev) => ({
          ...prev,
          [isDeparture ? "departure" : "return"]: bookingId,
        }));
      } else {
        // Bỏ chọn ghế: Gọi API deleteSeat
        const response = await axios.post(
          "http://localhost:8080/api/booking/deleteSeat",
          {
            userId,
            tripId,
            seatId: [seatNumber],
            seatPrice: isDeparture ? departureSeatPrice : returnSeatPrice,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Delete seat response:", response.data);

        setSeats((prev) => prev.filter((seat) => seat !== seatNumber));
        // Không xóa bookingId ngay, để xử lý trong handleClearAllSeats
      }
    } catch (err) {
      console.error("Error handling seat:", err);
      if (err.response?.status === 400) {
        alert("Ghế này đã được người khác đặt. Vui lòng chọn ghế khác.");
        const fetchResponse = await axios.get(
          `http://localhost:8080/api/trip/get/${tripId}`
        );
        const newBookedSeats = mapBookedSeats(
          fetchResponse.data.bookedSeats || []
        );
        if (isDeparture) {
          setDepartureBookedSeats(
            newBookedSeats.filter((seat) => !currentSeats.includes(seat))
          );
        } else {
          setReturnBookedSeats(
            newBookedSeats.filter((seat) => !currentSeats.includes(seat))
          );
        }
      } else {
        setError("Lỗi: " + (err.response?.data?.message || err.message));
      }
    }
  };

  // Lấy thông tin hiển thị
  const getTripTitle = (trip, isDeparture) => {
    if (
      !trip ||
      !trip.trip ||
      !trip.trip.tripInfo ||
      !trip.trip.tripInfo.departureCity ||
      !trip.trip.tripInfo.arrivalCity
    ) {
      return "Thông tin chuyến không khả dụng";
    }
    const { tripInfo, departureTime } = trip.trip;
    const route = isDeparture
      ? `${tripInfo.departureCity.name} - ${tripInfo.arrivalCity.name}`
      : `${tripInfo.arrivalCity.name} - ${tripInfo.departureCity.name}`;
    const date = departureTime
      ? dayjs(departureTime).format("DD/MM/YYYY")
      : "Không xác định";
    return `${route} (${date})`;
  };

  // Nếu có lỗi, hiển thị thông báo
  if (error) {
    return (
      <div className="px-50 py-10 bg-slate-100 min-h-screen flex flex-col items-center">
        <p className="text-red-500 text-xl">{error}</p>
        <button
          onClick={() => navigate("/dat-ve")}
          className="mt-4 bg-futa-primary text-white rounded-lg px-4 py-2"
        >
          Quay lại chọn chuyến
        </button>
      </div>
    );
  }

  // Lấy seatPrice từ dữ liệu chuyến đi, mặc định là 150000 nếu không có
  const departureSeatPrice = selectedDepartureTrip?.trip?.seatPrice || 150000;
  const returnSeatPrice = isRoundTrip
    ? selectedReturnTrip?.trip?.seatPrice || 150000
    : 0;

  // Tính tổng số tiền
  const departurePrice = departureSelectedSeats.length * departureSeatPrice;
  const returnPrice = isRoundTrip
    ? returnSelectedSeats.length * returnSeatPrice
    : 0;
  const totalPrice = departurePrice + returnPrice;

  // Phần thanh toán
  const handlePayment = async () => {
    try {
      const bookingId = "BK00001_5_2025"; // Giả định bookingId, thay bằng giá trị thực tế
      const response = await axios.get(
        `http://localhost:8080/api/payment/createOrder?amount=${totalPrice}&orderInfo=${bookingId}`
      );
      const paymentUrl = response.data; // Giả định API trả về link trực tiếp
      window.open(paymentUrl, "_blank"); // Mở link trong tab mới
    } catch (error) {
      console.error("Lỗi khi tạo link thanh toán:", error);
      alert("Không thể tạo link thanh toán. Vui lòng thử lại!");
    }
  };

  return (
    <div className="px-50 py-10 bg-slate-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <span className="text-futa-heading text-3xl font-semibold">
          {getTripTitle(selectedDepartureTrip, true)}
        </span>
        {isRoundTrip && (
          <span className="text-futa-heading mt-2">(Có khứ hồi)</span>
        )}
        {/* Hiển thị bộ đếm thời gian khi có ghế được chọn */}
        {(departureSelectedSeats.length > 0 ||
          returnSelectedSeats.length > 0) && (
          <div className="mt-4 text-lg font-semibold text-red-500">
            Thời gian giữ vé còn lại: {formatTime(timeLeft)}
          </div>
        )}
      </div>

      <div className="w-full flex space-x-4 py-10">
        {/* Detail section */}
        <div className="flex flex-col space-y-4 basis-3/4">
          {/* Seat layout */}
          <div className="space-y-6 flex bg-white border border-slate-300 rounded-lg p-6">
            <SeatLayout
              bookedSeats={departureBookedSeats}
              selectedSeats={departureSelectedSeats}
              onSeatClick={(seat) => handleSeatClick(seat, true)}
              title="Chuyến đi"
            />
            {isRoundTrip ? (
              <div className="border-r border-gray-300 w-[2px]"></div>
            ) : null}
            {isRoundTrip && (
              <SeatLayout
                bookedSeats={returnBookedSeats}
                selectedSeats={returnSelectedSeats}
                onSeatClick={(seat) => handleSeatClick(seat, false)}
                title="Chuyến về"
              />
            )}
          </div>
          {/* Info */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col space-y-4 bg-white border border-slate-300 rounded-lg p-6">
              <span className="text-center text-xl text-futa-heading uppercase font-semibold">
                Điều khoản & lưu ý
              </span>
              <p className="">
                (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
                nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
                vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINES.
                Vui lòng liên hệ Trung tâm tổng đài 1900 6067 để được hỗ trợ.
              </p>
              <p className="">
                (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
                đài trung chuyển 1900 6918 trước khi đặt vé. Chúng tôi không
                đón/trung chuyển tại những điểm xe trung chuyển không thể tới
                được.
              </p>
            </div>
          </div>
        </div>
        {/* Info section */}
        <div className="basis-1/3">
          <div className="bg-white border border-slate-300 rounded-lg p-6 text-sm">
            <div className="flex flex-col space-y-4">
              <span className="text-xl uppercase text-futa-heading text-center font-semibold">
                Thông tin chuyến đi
              </span>
              <div className="flex justify-between items-center">
                <span className="capitalize text-gray-500">Tuyến đi</span>
                <span className="capitalize text-futa-primary">
                  {selectedDepartureTrip?.trip?.tripInfo?.departureCity?.name ||
                    "N/A"}{" "}
                  -{" "}
                  {selectedDepartureTrip?.trip?.tripInfo?.arrivalCity?.name ||
                    "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="capitalize text-gray-500">Thời gian</span>
                <span className="capitalize text-futa-primary">
                  {selectedDepartureTrip?.trip?.departureTime
                    ? dayjs(selectedDepartureTrip.trip.departureTime).format(
                        "HH:mm, DD/MM/YYYY"
                      )
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="capitalize text-gray-500">Số lượng ghế</span>
                <span className="capitalize text-futa-primary">
                  {departureSelectedSeats.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="capitalize text-gray-500">Số ghế</span>
                <span className="capitalize text-futa-primary">
                  {departureSelectedSeats.join(", ") || "Chưa chọn"}
                </span>
              </div>
              {isRoundTrip && (
                <>
                  <hr className="my-4 border-slate-300" />
                  <span className="text-xl uppercase text-futa-heading text-center font-semibold">
                    Thông tin chuyến về
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="capitalize text-gray-500">Tuyến đi</span>
                    <span className="capitalize text-futa-primary">
                      {selectedReturnTrip?.trip?.tripInfo?.departureCity
                        ?.name || "N/A"}{" "}
                      -{" "}
                      {selectedReturnTrip?.trip?.tripInfo?.arrivalCity?.name ||
                        "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="capitalize text-gray-500">Thời gian</span>
                    <span className="capitalize text-futa-primary">
                      {selectedReturnTrip?.trip?.departureTime
                        ? dayjs(selectedReturnTrip.trip.departureTime).format(
                            "HH:mm, DD/MM/YYYY"
                          )
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="capitalize text-gray-500">
                      Số lượng ghế
                    </span>
                    <span className="capitalize text-futa-primary">
                      {returnSelectedSeats.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="capitalize text-gray-500">Số ghế</span>
                    <span className="capitalize text-futa-primary">
                      {returnSelectedSeats.join(", ") || "Chưa chọn"}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Phần thanh toán */}
      {(departureSelectedSeats.length > 0 ||
        (isRoundTrip && returnSelectedSeats.length > 0)) && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-300 p-4 shadow-lg">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <span className="text-lg font-semibold">
              Tổng cộng: {totalPrice.toLocaleString("vi-VN")} VNĐ
            </span>
            <button
              onClick={handlePayment}
              className="bg-futa-primary text-white rounded-lg px-6 py-2 hover:bg-futa-primary-hover transition-all"
            >
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetail;

// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import SeatLayout from "../../shared/SeatLayout/SeatLayout";
// import dayjs from "dayjs";
// import axios from "axios";

// // Ánh xạ bookedSeats từ S001, S002 sang A01, B01, ...
// const mapBookedSeats = (bookedSeats) => {
//   const seatMapping = {
//     S001: "A01",
//     S002: "A02",
//     S003: "A03",
//     S004: "A04",
//     S005: "A05",
//     S006: "A06",
//     S007: "A07",
//     S008: "A08",
//     S009: "A09",
//     S010: "A10",
//     S011: "A11",
//     S012: "A12",
//     S013: "A13",
//     S014: "A14",
//     S015: "A15",
//     S016: "A16",
//     S017: "A17",
//     S018: "A18",
//     S019: "B01",
//     S020: "B02",
//     S021: "B03",
//     S022: "B04",
//     S023: "B05",
//     S024: "B06",
//     S025: "B07",
//     S026: "B08",
//     S027: "B09",
//     S028: "B10",
//     S029: "B11",
//     S030: "B12",
//     S031: "B13",
//     S032: "B14",
//     S033: "B15",
//     S034: "B16",
//     S035: "B17",
//     S036: "B18",
//   };
//   return bookedSeats.map((seat) => seatMapping[seat] || seat);
// };

// const BookingDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { selectedDepartureTrip, selectedReturnTrip } = location.state || {};
//   const isRoundTrip = !!selectedReturnTrip;

//   // State để quản lý ghế đã chọn, ghế đã đặt, và bookingId
//   const [departureSelectedSeats, setDepartureSelectedSeats] = useState([]);
//   const [returnSelectedSeats, setReturnSelectedSeats] = useState([]);
//   const [departureBookedSeats, setDepartureBookedSeats] = useState(
//     mapBookedSeats(selectedDepartureTrip?.bookedSeats || [])
//   );
//   const [returnBookedSeats, setReturnBookedSeats] = useState(
//     mapBookedSeats(selectedReturnTrip?.bookedSeats || [])
//   );
//   const [bookingIds, setBookingIds] = useState({
//     departure: null,
//     return: null,
//   }); // Lưu bookingId cho mỗi chuyến
//   const [error, setError] = useState(null);

//   // State và Ref cho bộ đếm thời gian
//   const [timeLeft, setTimeLeft] = useState(300); // 15 phút = 900 giây
//   const timerRef = useRef(null);

//   // Lấy thông tin user từ localStorage
//   const user = JSON.parse(localStorage.getItem("user")) || {};
//   const userId = user.id;

//   // Debug dữ liệu trip
//   useEffect(() => {
//     console.log("Trip data:", { selectedDepartureTrip, selectedReturnTrip });
//     if (!selectedDepartureTrip || !selectedDepartureTrip.trip) {
//       setError("Không có thông tin chuyến đi. Vui lòng chọn lại.");
//     } else if (
//       !selectedDepartureTrip.trip.tripInfo ||
//       !selectedDepartureTrip.trip.tripInfo.departureCity
//     ) {
//       setError("Dữ liệu chuyến đi không hợp lệ.");
//     }
//   }, [selectedDepartureTrip, selectedReturnTrip]);

//   // Điều chỉnh bộ đếm thời gian khi có ghế được chọn
//   useEffect(() => {
//     const hasSelectedSeats =
//       departureSelectedSeats.length > 0 || returnSelectedSeats.length > 0;

//     if (hasSelectedSeats && !timerRef.current) {
//       // Khởi động bộ đếm nếu có ghế được chọn và chưa chạy
//       timerRef.current = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timerRef.current);
//             handleClearAllSeats();
//             alert("Hết thời gian giữ vé");
//             window.location.reload();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else if (!hasSelectedSeats && timerRef.current) {
//       // Reset bộ đếm và xóa vé khi không còn ghế được chọn
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//       setTimeLeft(300); // Reset về 15 phút
//       handleClearAllSeats(); // Gọi API xóa vé
//     }

//     return () => clearInterval(timerRef.current);
//   }, [departureSelectedSeats, returnSelectedSeats]);

//   // Định dạng thời gian mm:ss
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Tải lại bookedSeats định kỳ (mỗi 10 giây)
//   useEffect(() => {
//     const fetchBookedSeats = async () => {
//       try {
//         if (selectedDepartureTrip?.trip?.id) {
//           const departureResponse = await axios.get(
//             `http://localhost:8080/api/trip/get/${selectedDepartureTrip.trip.id}`
//           );
//           const newDepartureBookedSeats = mapBookedSeats(
//             departureResponse.data.bookedSeats || []
//           );
//           setDepartureBookedSeats((prev) =>
//             newDepartureBookedSeats.filter(
//               (seat) => !departureSelectedSeats.includes(seat)
//             )
//           );
//         }

//         if (isRoundTrip && selectedReturnTrip?.trip?.id) {
//           const returnResponse = await axios.get(
//             `http://localhost:8080/api/trip/get/${selectedReturnTrip.trip.id}`
//           );
//           const newReturnBookedSeats = mapBookedSeats(
//             returnResponse.data.bookedSeats || []
//           );
//           setReturnBookedSeats((prev) =>
//             newReturnBookedSeats.filter(
//               (seat) => !returnSelectedSeats.includes(seat)
//             )
//           );
//         }
//       } catch (err) {
//         console.error("Error fetching booked seats:", err);
//         if (err.response?.status === 400) {
//           alert("Ghế đã được người khác đặt. Vui lòng chọn lại.");
//         }
//       }
//     };

//     fetchBookedSeats(); // Gọi ngay lần đầu
//     const interval = setInterval(fetchBookedSeats, 10000); // Gọi lại mỗi 10 giây

//     return () => clearInterval(interval);
//   }, [
//     selectedDepartureTrip,
//     selectedReturnTrip,
//     departureSelectedSeats,
//     returnSelectedSeats,
//     isRoundTrip,
//   ]);

//   // Xử lý xóa hết các ghế đang chọn
//   const handleClearAllSeats = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       if (departureSelectedSeats.length > 0 && bookingIds.departure) {
//         await axios.delete(
//           `http://localhost:8080/api/booking/delete/${bookingIds.departure}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//       }

//       if (isRoundTrip && returnSelectedSeats.length > 0 && bookingIds.return) {
//         await axios.delete(
//           `http://localhost:8080/api/booking/delete/${bookingIds.return}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//       }

//       setDepartureSelectedSeats([]);
//       setReturnSelectedSeats([]);
//       setBookingIds({ departure: null, return: null }); // Reset bookingIds
//       if (isRoundTrip) {
//         localStorage.removeItem("bookingIds"); // Xóa localStorage khi không còn ghế
//       }
//     } catch (err) {
//       console.error("Error clearing seats:", err);
//       setError(
//         "Không thể xóa ghế: " + (err.response?.data?.message || err.message)
//       );
//     }
//   };

//   // Xử lý click ghế
//   const handleSeatClick = async (seatNumber, isDeparture) => {
//     const token = localStorage.getItem("token");
//     const tripId = isDeparture
//       ? selectedDepartureTrip?.trip?.id
//       : selectedReturnTrip?.trip?.id;
//     const setSeats = isDeparture
//       ? setDepartureSelectedSeats
//       : setReturnSelectedSeats;
//     const currentSeats = isDeparture
//       ? departureSelectedSeats
//       : returnSelectedSeats;
//     const bookedSeats = isDeparture ? departureBookedSeats : returnBookedSeats;

//     // Kiểm tra nếu ghế đã được đặt hoặc đang chọn (trừ trường hợp bỏ chọn)
//     if (
//       bookedSeats.includes(seatNumber) ||
//       (currentSeats.includes(seatNumber) && !currentSeats.includes(seatNumber))
//     ) {
//       alert("Ghế này đã được đặt hoặc đang chọn. Vui lòng chọn ghế khác.");
//       const response = await axios.get(
//         `http://localhost:8080/api/trip/get/${tripId}`
//       );
//       const newBookedSeats = mapBookedSeats(response.data.bookedSeats || []);
//       if (isDeparture) {
//         setDepartureBookedSeats(
//           newBookedSeats.filter((seat) => !currentSeats.includes(seat))
//         );
//       } else {
//         setReturnBookedSeats(
//           newBookedSeats.filter((seat) => !currentSeats.includes(seat))
//         );
//       }
//       window.location.reload();
//       return;
//     }

//     // Kiểm tra xem ghế đang được chọn hay bỏ chọn
//     const isSelecting = !currentSeats.includes(seatNumber);

//     try {
//       if (isSelecting) {
//         // Chọn ghế: Gọi API book
//         const response = await axios.post(
//           "http://localhost:8080/api/booking/book",
//           {
//             userId,
//             tripId,
//             seatId: [seatNumber],
//             seatPrice: isDeparture ? departureSeatPrice : returnSeatPrice,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log("Book seat response:", response.data);

//         // Giả định response chứa bookingId (có thể cần điều chỉnh theo API thực tế)
//         const bookingId = response.data.bookingId || response.data.id; // Thay bằng key thực tế từ API
//         setSeats((prev) => [...prev, seatNumber]);
//         setBookingIds((prev) => {
//           const newBookingIds = {
//             ...prev,
//             [isDeparture ? "departure" : "return"]: bookingId,
//           };
//           // Nếu là vé khứ hồi, lưu vào localStorage
//           if (isRoundTrip) {
//             localStorage.setItem("bookingIds", JSON.stringify(newBookingIds));
//           }
//           return newBookingIds;
//         });
//       } else {
//         // Bỏ chọn ghế: Gọi API deleteSeat
//         const response = await axios.post(
//           "http://localhost:8080/api/booking/deleteSeat",
//           {
//             userId,
//             tripId,
//             seatId: [seatNumber],
//             seatPrice: isDeparture ? departureSeatPrice : returnSeatPrice,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log("Delete seat response:", response.data);

//         setSeats((prev) => prev.filter((seat) => seat !== seatNumber));
//         // Không xóa bookingId ngay, để xử lý trong handleClearAllSeats
//       }
//     } catch (err) {
//       console.error("Error handling seat:", err);
//       if (err.response?.status === 400) {
//         alert("Ghế này đã được người khác đặt. Vui lòng chọn ghế khác.");
//         const fetchResponse = await axios.get(
//           `http://localhost:8080/api/trip/get/${tripId}`
//         );
//         const newBookedSeats = mapBookedSeats(
//           fetchResponse.data.bookedSeats || []
//         );
//         if (isDeparture) {
//           setDepartureBookedSeats(
//             newBookedSeats.filter((seat) => !currentSeats.includes(seat))
//           );
//         } else {
//           setReturnBookedSeats(
//             newBookedSeats.filter((seat) => !currentSeats.includes(seat))
//           );
//         }
//       } else {
//         setError("Lỗi: " + (err.response?.data?.message || err.message));
//       }
//     }
//   };

//   // Lấy thông tin hiển thị
//   const getTripTitle = (trip, isDeparture) => {
//     if (
//       !trip ||
//       !trip.trip ||
//       !trip.trip.tripInfo ||
//       !trip.trip.tripInfo.departureCity ||
//       !trip.trip.tripInfo.arrivalCity
//     ) {
//       return "Thông tin chuyến không khả dụng";
//     }
//     const { tripInfo, departureTime } = trip.trip;
//     const route = isDeparture
//       ? `${tripInfo.departureCity.name} - ${tripInfo.arrivalCity.name}`
//       : `${tripInfo.arrivalCity.name} - ${tripInfo.departureCity.name}`;
//     const date = departureTime
//       ? dayjs(departureTime).format("DD/MM/YYYY")
//       : "Không xác định";
//     return `${route} (${date})`;
//   };

//   // Nếu có lỗi, hiển thị thông báo
//   if (error) {
//     return (
//       <div className="px-50 py-10 bg-slate-100 min-h-screen flex flex-col items-center">
//         <p className="text-red-500 text-xl">{error}</p>
//         <button
//           onClick={() => navigate("/dat-ve")}
//           className="mt-4 bg-futa-primary text-white rounded-lg px-4 py-2"
//         >
//           Quay lại chọn chuyến
//         </button>
//       </div>
//     );
//   }

//   // Lấy seatPrice từ dữ liệu chuyến đi, mặc định là 150000 nếu không có
//   const departureSeatPrice = selectedDepartureTrip?.trip?.seatPrice || 150000;
//   const returnSeatPrice = isRoundTrip
//     ? selectedReturnTrip?.trip?.seatPrice || 150000
//     : 0;

//   // Tính tổng số tiền
//   const departurePrice = departureSelectedSeats.length * departureSeatPrice;
//   const returnPrice = isRoundTrip
//     ? returnSelectedSeats.length * returnSeatPrice
//     : 0;
//   const totalPrice = departurePrice + returnPrice;

//   // Phần thanh toán
//   const handlePayment = async () => {
//     try {
//       let orderInfo;
//       if (isRoundTrip) {
//         // Lấy bookingIds từ localStorage
//         const storedBookingIds = JSON.parse(localStorage.getItem("bookingIds")) || {};
//         const departureBookingId = storedBookingIds.departure || bookingIds.departure;
//         const returnBookingId = storedBookingIds.return || bookingIds.return;
//         if (!departureBookingId || !returnBookingId) {
//           throw new Error("Thiếu bookingId cho vé khứ hồi");
//         }
//         orderInfo = `${departureBookingId}_${returnBookingId}`; // Nối 2 bookingId
//       } else {
//         orderInfo = bookingIds.departure || "BK00001_5_2025"; // Trường hợp không khứ hồi
//       }

//       const response = await axios.get(
//         `http://localhost:8080/api/payment/createOrder?amount=${totalPrice}&orderInfo=${orderInfo}`
//       );
//       const paymentUrl = response.data; // Giả định API trả về link trực tiếp
//       window.open(paymentUrl, "_blank"); // Mở link trong tab mới
//     } catch (error) {
//       console.error("Lỗi khi tạo link thanh toán:", error);
//       alert("Không thể tạo link thanh toán. Vui lòng thử lại!");
//     }
//   };

//   return (
//     <div className="px-50 py-10 bg-slate-100 min-h-screen">
//       <div className="flex flex-col items-center mb-8">
//         <span className="text-futa-heading text-3xl font-semibold">
//           {getTripTitle(selectedDepartureTrip, true)}
//         </span>
//         {isRoundTrip && (
//           <span className="text-futa-heading mt-2">(Có khứ hồi)</span>
//         )}
//         {/* Hiển thị bộ đếm thời gian khi có ghế được chọn */}
//         {(departureSelectedSeats.length > 0 ||
//           returnSelectedSeats.length > 0) && (
//           <div className="mt-4 text-lg font-semibold text-red-500">
//             Thời gian giữ vé còn lại: {formatTime(timeLeft)}
//           </div>
//         )}
//       </div>

//       <div className="w-full flex space-x-4 py-10">
//         {/* Detail section */}
//         <div className="flex flex-col space-y-4 basis-3/4">
//           {/* Seat layout */}
//           <div className="space-y-6 flex bg-white border border-slate-300 rounded-lg p-6">
//             <SeatLayout
//               bookedSeats={departureBookedSeats}
//               selectedSeats={departureSelectedSeats}
//               onSeatClick={(seat) => handleSeatClick(seat, true)}
//               title="Chuyến đi"
//             />
//             {isRoundTrip ? (
//               <div className="border-r border-gray-300 w-[2px]"></div>
//             ) : null}
//             {isRoundTrip && (
//               <SeatLayout
//                 bookedSeats={returnBookedSeats}
//                 selectedSeats={returnSelectedSeats}
//                 onSeatClick={(seat) => handleSeatClick(seat, false)}
//                 title="Chuyến về"
//               />
//             )}
//           </div>
//           {/* Info */}
//           <div className="grid grid-cols-1 gap-4">
//             <div className="flex flex-col space-y-4 bg-white border border-slate-300 rounded-lg p-6">
//               <span className="text-center text-xl text-futa-heading uppercase font-semibold">
//                 Điều khoản & lưu ý
//               </span>
//               <p className="">
//                 (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
//                 nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
//                 vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINES.
//                 Vui lòng liên hệ Trung tâm tổng đài 1900 6067 để được hỗ trợ.
//               </p>
//               <p className="">
//                 (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
//                 đài trung chuyển 1900 6918 trước khi đặt vé. Chúng tôi không
//                 đón/trung chuyển tại những điểm xe trung chuyển không thể tới
//                 được.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Info section */}
//         <div className="basis-1/3">
//           <div className="bg-white border border-slate-300 rounded-lg p-6 text-sm">
//             <div className="flex flex-col space-y-4">
//               <span className="text-xl uppercase text-futa-heading text-center font-semibold">
//                 Thông tin chuyến đi
//               </span>
//               <div className="flex justify-between items-center">
//                 <span className="capitalize text-gray-500">Tuyến đi</span>
//                 <span className="capitalize text-futa-primary">
//                   {selectedDepartureTrip?.trip?.tripInfo?.departureCity?.name ||
//                     "N/A"}{" "}
//                   -{" "}
//                   {selectedDepartureTrip?.trip?.tripInfo?.arrivalCity?.name ||
//                     "N/A"}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="capitalize text-gray-500">Thời gian</span>
//                 <span className="capitalize text-futa-primary">
//                   {selectedDepartureTrip?.trip?.departureTime
//                     ? dayjs(selectedDepartureTrip.trip.departureTime).format(
//                         "HH:mm, DD/MM/YYYY"
//                       )
//                     : "N/A"}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="capitalize text-gray-500">Số lượng ghế</span>
//                 <span className="capitalize text-futa-primary">
//                   {departureSelectedSeats.length}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="capitalize text-gray-500">Số ghế</span>
//                 <span className="capitalize text-futa-primary">
//                   {departureSelectedSeats.join(", ") || "Chưa chọn"}
//                 </span>
//               </div>
//               {isRoundTrip && (
//                 <>
//                   <hr className="my-4 border-slate-300" />
//                   <span className="text-xl uppercase text-futa-heading text-center font-semibold">
//                     Thông tin chuyến về
//                   </span>
//                   <div className="flex justify-between items-center">
//                     <span className="capitalize text-gray-500">Tuyến đi</span>
//                     <span className="capitalize text-futa-primary">
//                       {selectedReturnTrip?.trip?.tripInfo?.departureCity
//                         ?.name || "N/A"}{" "}
//                       -{" "}
//                       {selectedReturnTrip?.trip?.tripInfo?.arrivalCity?.name ||
//                         "N/A"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="capitalize text-gray-500">Thời gian</span>
//                     <span className="capitalize text-futa-primary">
//                       {selectedReturnTrip?.trip?.departureTime
//                         ? dayjs(selectedReturnTrip.trip.departureTime).format(
//                             "HH:mm, DD/MM/YYYY"
//                           )
//                         : "N/A"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="capitalize text-gray-500">
//                       Số lượng ghế
//                     </span>
//                     <span className="capitalize text-futa-primary">
//                       {returnSelectedSeats.length}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="capitalize text-gray-500">Số ghế</span>
//                     <span className="capitalize text-futa-primary">
//                       {returnSelectedSeats.join(", ") || "Chưa chọn"}
//                     </span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Phần thanh toán */}
//       {(departureSelectedSeats.length > 0 ||
//         (isRoundTrip && returnSelectedSeats.length > 0)) && (
//         <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-300 p-4 shadow-lg">
//           <div className="max-w-[1200px] mx-auto flex justify-between items-center">
//             <span className="text-lg font-semibold">
//               Tổng cộng: {totalPrice.toLocaleString("vi-VN")} VNĐ
//             </span>
//             <button
//               onClick={handlePayment}
//               className="bg-futa-primary text-white rounded-lg px-6 py-2 hover:bg-futa-primary-hover transition-all"
//             >
//               Thanh toán
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingDetail;