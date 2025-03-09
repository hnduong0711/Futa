import React from "react";
import {
  Appstore,
  Chplay,
  GBTBoundStepActive,
  GBTChair,
  GBTComfortable,
  GBTcomment,
  GBTCoStep3,
  GBTInterest,
  GBTStep1,
  GBTStep2_1,
  GBTStep2_2,
  GBTStep3,
  GBTStep4,
  GBTStep5,
  GBTStepProgress,
  GBTTime,
  GBTUlity,
} from "../assets";

const GuideBuyPage = () => {
  const FlowSection = () => {
    return (
      <div className="grid grid-cols-9 gap-4">
        {/* Step 1 */}
        <div className="flex flex-col relative">
          <img src={GBTBoundStepActive} alt="" />
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
            01
          </span>
          <span className="text-lg">Truy cập vào địa chỉ futabus.vn</span>
        </div>
        <div className="flex flex-col justify-center">
          <img src={GBTStepProgress} alt="" className="" />
        </div>
        {/* Step 2 */}
        <div className="flex flex-col relative">
          <img src={GBTBoundStepActive} alt="" />
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
            02
          </span>
          <span className="text-lg">Chọn thông tin hành trình</span>
        </div>
        <div className="flex flex-col justify-center">
          <img src={GBTStepProgress} alt="" className="" />
        </div>
        {/* Step 3 */}
        <div className="flex flex-col relative">
          <img src={GBTBoundStepActive} alt="" />
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
            03
          </span>
          <span className="text-lg">
            Chọn ghế, điểm đón trả, thông tin hành khách
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <img src={GBTStepProgress} alt="" className="" />
        </div>
        {/* Step 4 */}
        <div className="flex flex-col relative">
          <img src={GBTBoundStepActive} alt="" />
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
            04
          </span>
          <span className="text-lg">Chọn phương thức thanh toán</span>
        </div>
        <div className="flex flex-col justify-center">
          <img src={GBTStepProgress} alt="" className="" />
        </div>
        {/* Step 5 */}
        <div className="flex flex-col relative">
          <img src={GBTBoundStepActive} alt="" />
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
            05
          </span>
          <span className="text-lg">Mua vé xe thành công</span>
        </div>
      </div>
    );
  };

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
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <span className="text-futa-heading text-3xl font-semibold text-center pb-6">
            Bước 1: Những trải nghiệm nổi bật mà Ứng Dụng Mua Vé{" "}
            <span className="text-futa-primary">FUTA Bus</span> và Website{" "}
            <span className="text-futa-primary">futabus.vn</span> mang lại
          </span>
          <div className="grid grid-cols-3 gap-4">
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
        {/* Step 2 */}
        <div className="p-4 flex flex-col items-center bg-futa-primary/5 rounded-2xl w-full space-y-8 font-semibold">
          <span className="text-futa-heading text-3xl font-semibold text-center pb-6">
            Bước 2: Những bước để giúp khách hàng trải nghiệm mua vé nhanh
          </span>
          {/* Step 2.1 */}
          <div className="flex flex-col w-full font-semibold items-center space-y-6">
            {/* Flow section */}
            <div className="grid grid-cols-9 gap-4">
              {/* Step 1 */}
              <div className="flex flex-col relative">
                <img src={GBTBoundStepActive} alt="" />
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
                  01
                </span>
                <span className="text-lg">Truy cập vào địa chỉ futabus.vn</span>
              </div>
              <div className="flex flex-col justify-center">
                <img src={GBTStepProgress} alt="" className="" />
              </div>
              {/* Step 2 */}
              <div className="flex flex-col relative">
                <img src={GBTBoundStepActive} alt="" />
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
                  02
                </span>
                <span className="text-lg">Chọn thông tin hành trình</span>
              </div>
              <div className="flex flex-col justify-center">
                <img src={GBTStepProgress} alt="" className="" />
              </div>
              {/* Step 3 */}
              <div className="flex flex-col relative">
                <img src={GBTBoundStepActive} alt="" />
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
                  03
                </span>
                <span className="text-lg">
                  Chọn ghế, điểm đón trả, thông tin hành khách
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <img src={GBTStepProgress} alt="" className="" />
              </div>
              {/* Step 4 */}
              <div className="flex flex-col relative">
                <img src={GBTBoundStepActive} alt="" />
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
                  04
                </span>
                <span className="text-lg">Chọn phương thức thanh toán</span>
              </div>
              <div className="flex flex-col justify-center">
                <img src={GBTStepProgress} alt="" className="" />
              </div>
              {/* Step 5 */}
              <div className="flex flex-col relative">
                <img src={GBTBoundStepActive} alt="" />
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-250%] font-semibold text-2xl">
                  05
                </span>
                <span className="text-lg">Mua vé xe thành công</span>
              </div>
            </div>
            <span className="text-3xl text-center">
              Bước 1: Truy cập địa chỉfutabus.vn
            </span>
            <img src={GBTStep1} alt="step2.1" className="w-3/4" />
            <span className="text-2xl text-center w-3/4">
              Tải ứng dụng tại futabus.vn hoặc tìm ứng dụng Futa Bus trên Futa
              Bus trên Google Play hoặc Apple store
            </span>
            <div className="flex flex-col items-center space-y-2">
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
          </div>

          {/* Step 2.2.1 */}
          <div className="flex flex-col items-center">
            {/* Flow section */}
            {FlowSection()}
            <span className="text-3xl text-center pb-6">
              Bước 2: Chọn thông tin hành trình
            </span>
            <img src={GBTStep2_1} alt="step2.1" />
            <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-6 w-full">
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  1
                </span>
                <span className="text-xl font-semibold">
                  Chọn điểm khởi hành
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  2
                </span>
                <span className="text-xl font-semibold">Chọn điểm đến</span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  3
                </span>
                <span className="text-xl font-semibold">Chọn ngày đi</span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  4
                </span>
                <span className="text-xl font-semibold">Chọn ngày về</span>
              </div>
            </div>
          </div>
          {/* Step 2.2.2 */}
          <div className="flex flex-col items-center">
            <img src={GBTStep2_2} alt="step2.1" />
            <div className="grid grid-cols-2 grid-rows-3 gap-4 pt-6 w-full">
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  1
                </span>
                <span className="text-xl font-semibold">
                  Chọn điểm khởi hành
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  2
                </span>
                <span className="text-xl font-semibold">Chọn điểm đến</span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  3
                </span>
                <span className="text-xl font-semibold">Chọn ngày đi</span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  4
                </span>
                <span className="text-xl font-semibold">Chọn ngày về</span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="border-2 border-dashed border-futa-primary rounded-full size-14 font-semibold flex justify-center items-center text-4xl text-futa-primary">
                  5
                </span>
                <span className="text-xl font-semibold">Chọn nhanh số ghế</span>
              </div>
            </div>
          </div>
          {/* Step 2.3 */}
          <div className="flex flex-col items-center">
            {/* Flow section */}
            {FlowSection()}
            <span className="text-3xl text-center">
              Bước 3: Chọn ghế, điểm đón trả, thông tin hành khách
            </span>
            <img src={GBTStep3} alt="step2.3" className="" />
          </div>
          {/* Step 2.4 */}
          <div className="flex flex-col items-center">
            {/* Flow section */}
            {FlowSection()}
            <span className="text-3xl text-center">
              Bước 4: Chọn phương thức thanh toán
            </span>
            <img src={GBTStep4} alt="step2.4" className="" />
          </div>
          {/* Step 2.5 */}
          <div className="flex flex-col items-center">
            {/* Flow section */}
            {FlowSection()}
            <span className="text-3xl text-center">
              Bước 5: Mua vé thành công
            </span>
            <img src={GBTStep5} alt="step2.5" className="" />
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <span className="text-futa-heading text-3xl font-semibold text-center pb-6">
            Bước 3: Vé xe sẽ được gửi về Email. Quý khách vui lòng kiểm tra
            Email để nhận vé
          </span>
          <img src={GBTCoStep3} alt="step3" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default GuideBuyPage;