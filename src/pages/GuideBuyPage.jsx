import React from "react";
import {
  Appstore,
  Chplay,
  GBTBoundStepActive,
  GBTChair,
  GBTComfortable,
  GBTcomment,
  GBTInterest,
  GBTStepProgress,
  GBTTime,
  GBTUlity,
} from "../assets";

const GuideBuyPage = () => {
  return (
    <div className="px-50 py-10">
      <div className="flex flex-col items-center space-y-8 py-5">
        <span className="text-3xl text-futa-primary uppercase font-semibold">
          HƯỚNG DẪN MUA VÉ XE TRÊN WEBSITEfutabus.vn
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
        <div className="bg-futa-primary-hover/5 p-3 flex flex-col space-y-4">
          <span className="uppercase text-futa-primary text-2xl py-2 text-center font-semibold">
            UY TÍNH – CHẤT LƯỢNG – DANH DỰ
          </span>
          <span className="text-lg">
            Công Ty Cổ phần Xe Khách Phương Trang - FUTA Bus Lines xin gửi lời
            cảm ơn chân thành đến Quý Khách hàng đã tin tưởng và sử dụng dịch vụ
            của chúng tôi. Chúng tôi luôn hoạt động với tôn chỉ "Chất lượng là
            danh dự" và nỗ lực không ngừng để mang đến trải nghiệm dịch vụ tối
            ưu dành cho Khách hàng.
          </span>
          <span className="text-lg">
            Chúng tôi không chỉ đảm bảo các chuyến xe an toàn, chất lượng và
            đúng hẹn, mà còn chú trọng đến trải nghiệm mua vé của Khách hàng.
            Chúng tôi đã cải tiến website mua vé trực tuyếnThông tin vé | Ticket
            Information | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách
            Hàng 19006067để đảm bảo việc mua vé dễ dàng và tiện lợi hơn bao giờ
            hết.
          </span>
          <span className="text-lg">
            Bên cạnh đó, chúng tôi tự hào giới thiệu ứng dụng mua vé FUTA Bus,
            giúp Khách hàng tiết kiệm thời gian mua vé. Qua ứng dụng này, Khách
            hàng có thể tra cứu thông tin về lịch trình, chọn ghế/giường và
            thanh toán nhanh chóng, thuận tiện trên điện thoại di động. Chúng
            tôi tin rằng với ứng dụng mua vé FUTA Bus và websiteThông tin vé |
            Ticket Information | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc
            Khách Hàng 19006067đã được cải tiến sẽ mang lại trải nghiệm tốt và
            giúp Khách hàng tiết kiệm thời gian quý báu.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-futa-heading text-3xl font-semibold text-center pb-6">
            Bước 1: Những trải nghiệm nổi bật mà Ứng Dụng Mua Vé{" "}
            <span className="text-futa-primary">FUTA Bus</span> và Website{" "}
            <span className="text-futa-primary">futabus.vn</span> mang lại
          </span>
          <div className="grid grid-cols-3 gap-4 px-4">
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTTime} alt="icon" />
              <span className="px-5 text-center">
                Khách hàng chủ động về lịch trình của mình: Từ điểm đón, điểm
                trả khách đến thời gian hành trình.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTChair} alt="icon" />
              <span className="px-5 text-center">
                Khách hàng được chọn và chủ động vị trí, số ghế ngồi trên xe.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTComfortable} alt="icon" />
              <span className="px-5 text-center">
                Không phải xếp hàng những dịp Lễ, Tết.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTUlity} alt="icon" />
              <span className="px-5 text-center">
                Dễ dàng kết hợp và nhận ưu đãi khi sử dụng dịch vụ khác của
                Phương Trang như Taxi, Trạm Dừng, Vận Chuyển Hàng Hoá...
              </span>
            </div>
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTInterest} alt="icon" />
              <span className="px-5 text-center">
                Khi đăng ký thành viên, khách hàng còn nhận nhiều ưu đãi, cũng
                như nhiều phần quà hấp dẫn.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-6 shadow-[0_0_14px_rgba(0,0,0,0.1)] rounded-2xl p-6">
              <img src={GBTcomment} alt="icon" />
              <span className="px-5 text-center">
                Dễ dàng góp ý để nâng cao chất lượng dịch vụ.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-futa-primary-hover/5 space-y-4">
          <span className="text-futa-heading text-3xl font-semibold text-center pb-6">
            Bước 2: Những bước để giúp khách hàng trải nghiệm mua vé nhanh
          </span>
          <div className="flex justify-center items-center relative">
            <div className="basis-1/5 flex">
              <div className="flex flex-col relative items-center space-y-4">
                <img
                  src={GBTBoundStepActive}
                  className="w-[80px] lg:w-[118px]"
                  alt=""
                />
                <span className="absolute font-bold text-2xl top-1/6 text-futa-primary">
                  01
                </span>
                <span className="w-3/4">Truy cập vào địa chỉ futabus.vn</span>
              </div>
              <img src={GBTStepProgress} className="" alt="" />
            </div>
            <div className="basis-1/5 flex">
              <div className="flex flex-col relative items-center space-y-4">
                <img
                  src={GBTBoundStepActive}
                  className="w-[80px] lg:w-[118px]"
                  alt=""
                />
                <span className="absolute font-bold text-2xl top-1/6 text-futa-primary">
                  02
                </span>
                <span className="w-3/4">Chọn thông tin hành trình</span>
              </div>
              <img src={GBTStepProgress} className="" alt="" />
            </div>

            <div className="basis-1/5 flex">
              <div className="flex flex-col relative items-center space-y-4">
                <img
                  src={GBTBoundStepActive}
                  className="w-[80px] lg:w-[118px]"
                  alt=""
                />
                <span className="absolute font-bold text-2xl top-1/6 text-futa-primary">
                  03
                </span>
                <span className="w-3/4">
                  Chọn ghế, điểm đón trả, thông tin hành khách
                </span>
              </div>
              <img src={GBTStepProgress} className="" alt="" />
            </div>

            <div className="basis-1/5 flex">
              <div className="flex flex-col relative items-center space-y-4">
                <img
                  src={GBTBoundStepActive}
                  className="w-[80px] lg:w-[118px]"
                  alt=""
                />
                <span className="absolute font-bold text-2xl top-1/6 text-futa-primary">
                  04
                </span>
                <span className="w-3/4">Chọn phương thức thanh toán</span>
              </div>
              <img src={GBTStepProgress} className="" alt="" />
            </div>

            <div className="basis-1/5 flex">
              <div className="flex flex-col relative items-center space-y-4">
                <img
                  src={GBTBoundStepActive}
                  className="w-[80px] lg:w-[118px]"
                  alt=""
                />
                <span className="absolute font-bold text-2xl top-1/6 text-futa-primary">
                  05
                </span>
                <span className="w-3/4">Mua vé xe thành công</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideBuyPage;
