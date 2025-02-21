import React from "react";
import { BannerQnA, qna1, qna2, qna3 } from "../assets";
import { div } from "framer-motion/client";

const QnAPage = () => {
  return (
    <div className="px-50 py-10">
      <div className="flex flex-col justify-center border border-slate-200 items-center rounded-lg space-y-8 px-6 py-8">
        <span className="uppercase text-futa-primary text-4xl font-semibold">
          LIÊN HỆ VỚI CHÚNG TÔI
        </span>
        <span className="text-2xl">
          Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ đâu!
        </span>
        <img src={BannerQnA} alt="" />
        <span className="text-futa-heading text-4xl font-semibold">
          Chủ đề phổ biến
        </span>
        <div className="grid grid-cols-3 gap-2">
          <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
            <div className="flex items-center justify-evenly">
              <img src={qna1} alt="qna" />
              <span className="text-2xl font-semibold">FUTA BUS LINES</span>
            </div>
            <span className="text-center">
              Khách hàng dễ dàng tìm kiếm các thông tin bao gồm: giá vé, hành
              trình, quy định..v.v..
            </span>
            <span className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer">
              Xem thêm
            </span>
          </div>
          <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
            <div className="flex items-center justify-evenly">
              <img src={qna2} alt="qna" />
              <span className="text-2xl font-semibold">FUTA APP</span>
            </div>
            <span className="text-center">
              Khách hàng dễ dàng tìm kiếm các thông tin về sử dụng App, thanh
              toán, khuyến mãi ...v.v..
            </span>
            <span className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer">
              Xem thêm
            </span>
          </div>
          <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
            <div className="flex items-center justify-evenly">
              <img src={qna3} alt="qna" />
              <span className="text-2xl font-semibold">TRUNG CHUYỂN</span>
            </div>
            <span className="text-center">
              Cập nhật các thông tin về quy định trung chuyển cụ thể
            </span>
            <span className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer">
              Xem thêm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnAPage;
