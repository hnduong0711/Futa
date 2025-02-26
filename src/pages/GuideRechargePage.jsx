import React from "react";
import { Appstore, Chplay, RechargeStep2, RechargeStep3, RechargeStep4 } from "../assets";

const GuideRechargePage = () => {
  return (
    <div className="px-50 py-10">
      <div className="border border-slate-200 rounded-2xl flex flex-col items-center space-y-8 py-5">
        <span className="text-3xl text-futa-primary uppercase font-semibold">
          HƯỚNG DẪN NẠP TIỀN TRÊN ỨNG DỤNG FUTAPAY
        </span>
        <span className="text-futa-heading text-xl font-semibold">
          Bước 1: Tải ứng dụng
        </span>
        <span className="uppercase text-lg font-semibold">
          QUÉT MÃ QR TẢI APP DÀNH CHO KHÁCH HÀNG
        </span>
        <div className="flex flex-col items-center space-y-2">
          <span className="uppercase text-futa-heading text-[15px] font-semibold">
            Tải app futa
          </span>
          <div className="flex space-x-2">
            <img
              src={Chplay}
              alt="chplay"
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=client.facecar.com",
                  "_blank"
                )
              }
            />
            <img
              src={Appstore}
              alt="chplay"
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/vn/app/futa/id1126633800",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <span className="text-futa-heading text-xl font-semibold">
          Bước 2: Đăng ký/ Đăng nhập bằng số điện thoại của bạn
        </span>
        <img src={RechargeStep2} alt="images" />
        <span className="text-futa-heading text-xl font-semibold">
          Bước 3: Chọn chức năng ”Nạp tiền" tại Trang chủ
        </span>
        <img src={RechargeStep3} alt="images" />
        <span className="text-futa-heading text-xl font-semibold">
          Bước 4: Nhập số tiền, chọn nguồn tiền và xác nhận
        </span>
        <img src={RechargeStep4} alt="images" />
      </div>
    </div>
  );
};

export default GuideRechargePage;
