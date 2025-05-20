import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircle } from "lucide-react";

const PaymentReturnPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [error, setError] = useState(null);

  // Lấy query params từ URL
  const queryParams = new URLSearchParams(location.search);
  const params = Object.fromEntries(queryParams.entries());
  log("Query params:", params);

  // Gọi API cập nhật trạng thái thanh toán
  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/payment/orderReturn",
          { params }
        );
        console.log("Cập nhật thanh toán thành công:", response.data);
      } catch (err) {
        setError(
          "Lỗi khi cập nhật trạng thái thanh toán: " +
            (err.response?.data?.message || err.message)
        );
      }
    };
    updatePaymentStatus();
  }, []);

  // Đếm ngược 10 giây và chuyển hướng
  useEffect(() => {
    if (countdown === 0) {
      navigate("/profile/lich-su");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full animate-fadeIn">
        {error ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Thanh toán thất bại
            </h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="bg-futa-primary text-white rounded-lg px-6 py-2 hover:bg-futa-primary-hover transition-all"
            >
              Về trang chủ
            </button>
          </div>
        ) : (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Thanh toán thành công!
            </h2>
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
            </p>
            <p className="text-gray-600">
              Sẽ chuyển hướng về trang chủ trong{" "}
              <span
                className={`font-semibold ${
                  countdown <= 3 ? "text-red-500" : "text-green-600"
                } transition-colors`}
              >
                {countdown}
              </span>{" "}
              giây...
            </p>
          </div>
        )}
      </div>

      {/* CSS cho hiệu ứng */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-bounce {
          animation: bounce 1s;
        }
      `}</style>
    </div>
  );
};

export default PaymentReturnPage;

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { CheckCircle } from "lucide-react";

// const PaymentReturnPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [countdown, setCountdown] = useState(10);
//   const [error, setError] = useState(null);

//   // Lấy query params từ URL
//   const queryParams = new URLSearchParams(location.search);
//   const params = Object.fromEntries(queryParams.entries());
//   console.log("Query params:", params);
//   // Lấy bookingIds từ localStorage
//   const bookingIds = JSON.parse(localStorage.getItem("bookingIds"));
//   console.log("Booking IDs from localStorage:", bookingIds);
//   // const orderInfo = params.vnp_OrderInfo || "";
//   // console.log("Order Info:", orderInfo);
//   // console.log("Departure Booking ID:", bookingIds.departure);
//   // console.log("Return Booking ID:", bookingIds.return);
  

//   // Gọi API cập nhật trạng thái thanh toán
//   useEffect(() => {
//     const updatePaymentStatus = async () => {
//       try {
//         // Tách vnp_OrderInfo thành 2 bookingId
//         // const orderInfo = params.vnp_OrderInfo || "";
//         // const [departureBookingId, returnBookingId] = orderInfo.split("_");

//         // Gọi API cho departureBookingId
//         if (bookingIds.departure) {
//           const departureParams = { ...params, vnp_OrderInfo: bookingIds.departure };
//           const departureResponse = await axios.get(
//             "http://localhost:8080/api/payment/orderReturn",
//             { params: departureParams }
//           );
//           console.log("Cập nhật thanh toán (departure) thành công:", departureResponse.data);
//         }

//         // Gọi API cho returnBookingId nếu có
//         if (bookingIds.return) {
//           const returnParams = { ...params, vnp_OrderInfo: bookingIds.return };
//           const returnResponse = await axios.get(
//             "http://localhost:8080/api/payment/orderReturn",
//             { params: returnParams }
//           );
//           console.log("Cập nhật thanh toán (return) thành công:", returnResponse.data);
//         }

//         // Xóa bookingIds khỏi localStorage sau khi gọi API
//         localStorage.removeItem("bookingIds");
//       } catch (err) {
//         setError(
//           "Lỗi khi cập nhật trạng thái thanh toán: " +
//             (err.response?.data?.message || err.message)
//         );
//       }
//     };
//     updatePaymentStatus();
//   }, []);

//   // Đếm ngược 10 giây và chuyển hướng
//   // useEffect(() => {
//   //   if (countdown === 0) {
//   //     navigate("/");
//   //     return;
//   //   }

//   //   const timer = setInterval(() => {
//   //     setCountdown((prev) => prev - 1);
//   //   }, 1000);

//   //   return () => clearInterval(timer);
//   // }, [countdown, navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full animate-fadeIn">
//         {error ? (
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold text-red-600 mb-4">
//               Thanh toán thất bại
//             </h2>
//             <p className="text-gray-600 mb-6">{error}</p>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-futa-primary text-white rounded-lg px-6 py-2 hover:bg-futa-primary-hover transition-all"
//             >
//               Về trang chủ
//             </button>
//           </div>
//         ) : (
//           <div className="text-center">
//             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
//             <h2 className="text-2xl font-semibold text-green-600 mb-4">
//               Thanh toán thành công!
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
//             </p>
//             <p className="text-gray-600">
//               Sẽ chuyển hướng về trang chủ trong{" "}
//               <span
//                 className={`font-semibold ${
//                   countdown <= 3 ? "text-red-500" : "text-green-600"
//                 } transition-colors`}
//               >
//                 {countdown}
//               </span>{" "}
//               giây...
//             </p>
//           </div>
//         )}
//       </div>

//       {/* CSS cho hiệu ứng */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% {
//             transform: translateY(0);
//           }
//           40% {
//             transform: translateY(-20px);
//           }
//           60% {
//             transform: translateY(-10px);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 1s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PaymentReturnPage;