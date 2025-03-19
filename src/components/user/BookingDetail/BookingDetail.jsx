import React from "react";
import { NavLink } from "react-router-dom";

const BookingDetail = () => {
  return (
    <div className="px-50 py-10 bg-slate-100">
      <div className="flex flex-col items-center">
        <span className="text-futa-heading text-3xl font-semibold">
          Chuyến đi từ TPHCM - Phan Thiết
        </span>
        <span className="text-futa-heading text-xl">Thứ 4, 23/12</span>
      </div>

      <div className="w-full flex space-x-2 py-10">
        {/* detail section */}
        <div className="flex flex-col space-y-2 basis-2/3">
          {/* seat layout */}
          <div className="bg-white rounded-lg border border-slate-300 h-[300px]"></div>
          {/* info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4 bg-white border border-slate-300 rounded-lg p-4">
              <span className="uppercase text-xl text-futa-heading text-center">
                thông tin khách hàng
              </span>
              <div className="flex flex-col">
                <label className="text-[14px]">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input required className="h-[40px] border border-slate-300 rounded-sm outline-none p-4" type="text" placeholder="Họ và tên" />
              </div>
              <div className="flex flex-col">
                <label className="text-[14px]">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input required className="h-[40px] border border-slate-300 rounded-sm outline-none p-4" type="number" placeholder="Số điện thoại" />
              </div>
              <div className="flex flex-col">
                <label className="text-[14px]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input required className="h-[40px] border border-slate-300 rounded-sm outline-none p-4" type="email" placeholder="Email" />
              </div>
            </div>

            <div className="flex flex-col space-y-4 bg-white border border-slate-300 rounded-lg p-4">
              <span className="text-center text-xl text-futa-heading uppercase">
                điều khoản & lưu ý
              </span>
              <span>
                (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
                nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
                vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINES.
                Vui lòng liên hệ Trung tâm tổng đài 1900 6067 để được hỗ trợ.
              </span>
              <span>
                (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
                đài trung chuyển 1900 6918 trước khi đặt vé. Chúng tôi không
                đón/trung chuyển tại những điểm xe trung chuyển không thể tới
                được.
              </span>
            </div>
          </div>
        </div>
        {/* info section */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white border border-slate-300 rounded-lg p-4 basis-1/3 text-[14px]">
            <div className="flex flex-col space-y-4">
              <span className="text-xl uppercase text-futa-heading text-center">
                thông tin chuyến đi
              </span>
              <div className="flex justify-between items-center space-x-4">
                <span className="capitalize text-gray-500">tuyến đi</span>
                <span className="capitalize text-futa-primary">
                  TP.Hồ Chí Minh - Phan Thiết
                </span>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <span className="capitalize text-gray-500">thời gian</span>
                <span className="capitalize text-futa-primary">
                  04:00, 12/03/2025
                </span>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <span className="capitalize text-gray-500">số lượng ghế</span>
                <span className="capitalize text-futa-primary">2</span>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <span className="capitalize text-gray-500">số ghế</span>
                <span className="capitalize text-futa-primary">09, 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
