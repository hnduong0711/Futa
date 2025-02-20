import React from "react";
import {
  Appstore,
  BusLine,
  Chplay,
  Facebook,
  FutaAdv,
  FutaExpress,
  SaleNoti,
  Tdcpl,
  Youtube,
} from "../../../assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-futa-primary-light w-full px-50 flex flex-col items-center py-12">
        {/*content section */}
        <div className="flex justify-between">
          {/* left section */}
          <div className="basis-1/2">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col pb-2">
                  <span className="text-futa-heading font-semibold">
                    TRUNG TÂM TỔNG ĐÀI & CSKH
                  </span>
                  <span className="text-futa-primary text-3xl font-semibold">1900 6067</span>
                </div>
                <div>
                  <img src={SaleNoti} className="h-[70px]" alt="" />
                </div>
              </div>
              <span className="uppercase text-futa-heading text-[15px] font-semibold">
                Công ty cổ phần xe khách Phương Trang - FUTA Bus Lines
              </span>
              <span className="">
                Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh
                Lâm Đồng, Việt Nam.
              </span>
              <span className="">Email: hotro@futa.vn</span>
              <div className="flex justify-between">
                <span className="">Điện thoại: 02838386852</span>
                <span className="">Fax: 02838386853</span>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
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
                <div className="flex flex-col space-y-2">
                  <span className="uppercase text-futa-heading text-[15px] font-semibold">
                    Kết nối chúng tôi
                  </span>
                  <div className="flex space-x-2">
                    <img src={Facebook} className="cursor-pointer" alt="chplay" onClick={() =>
                        window.open(
                          "https://www.facebook.com/xephuongtrang",
                          "_blank"
                        )
                      }/>
                    <img src={Youtube} alt="chplay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="basis-1/2 flex justify-between pl-12">
            <div className="flex flex-col">
              <span className="text-futa-heading font-semibold">
                FUTA BusLines
              </span>
              <div className="flex flex-col text-[15px] pt-1 space-y-2">
                <NavLink
                  to="/ve-chung-toi"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Về chúng tôi
                </NavLink>
                <NavLink
                  to="/lich-trinh"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Lịch trình
                </NavLink>
                <div
                  onClick={() =>
                    window.open("https://vieclam.futabus.vn/", "_blank")
                  }
                >
                  Tuyển dụng
                </div>
                <NavLink
                  to="/tin-tuc"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Tin tức & Sự kiện
                </NavLink>
                <NavLink
                  to="/chi-nhanh"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Mạng lưới văn phòng
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-futa-heading font-semibold">Hỗ trợ</span>
              <div className="flex flex-col text-[15px] pt-1 space-y-2">
                <NavLink
                  to="/tra-cuu-ve"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Tra cứu thông tin đặt vé
                </NavLink>
                <NavLink
                  to="/dieu-khoan-su-dung"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Điều khoản sử dụng
                </NavLink>
                <NavLink
                  to="/hoi-dap"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Câu hỏi thường gặp
                </NavLink>
                <NavLink
                  to="/huong-dan-dat-ve-tren-web"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Hướng dẫn đặt vé trên Web
                </NavLink>
                <NavLink
                  to="/huong-dan-nap-tien-tren-app"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-futa-primary-hover"
                >
                  Hướng dẫn nạp tiền trên App
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* brand logo */}
        <div className="flex w-full justify-between pt-8">
          <img src={BusLine} className="h-[45px]" alt="" />
          <img src={FutaExpress} className="h-[45px]" alt="" />
          <img src={FutaAdv} className="h-[45px]" alt="" />
          <img src={Tdcpl} className="h-[45px]" alt="" />
        </div>
        {/* copyright bar */}
      </div>
      <div className="bg-futa-heading w-full text-[16px] h-[40px] flex justify-center items-center text-white">
        © 2023 | Bản quyền thuộc về Công ty Cổ Phần Xe khách Phương Trang - FUTA
        Bus Lines 2023 | Chịu trách nhiệm quản lý nội dung: Ông Võ Duy Thành
      </div>
    </>
  );
};

export default Footer;
