import React from "react";
import { CMS, Group, Group2, Store } from "../../../../assets";

const ServiceStats = () => {
  return (
    <div className="">
      <div className="flex flex-col space-y-4">
        <span className="text-futa-heading w-full font-semibold text-3xl uppercase text-center">
          FUTA BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ
        </span>
        <span className="text-center">
          Được khách hàng tin tưởng và lựa chọn
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-3 gap-4">
          <div className="flex items-center space-y-2">
            <img src={Group} alt="20 million customers" className="size-20" />
            <div className="flex flex-col space-y-2 pl-2">
              <h3 className="text-xl font-semibold">Hơn 20 Triệu Lượt Khách</h3>
              <p className="text-gray-500">
                Phương Trang phục vụ hơn 20 triệu lượt khách trong 1 năm trên
                toàn quốc
              </p>
            </div>
          </div>
          <div className="flex items-center space-y-2">
            <img src={Store} alt="350 vehicles" className="size-20" />
            <div className="flex flex-col space-y-2 pl-2">
              <h3 className="text-xl font-semibold">Hơn 350 Phương Vận</h3>
              <p className="text-gray-500">
                Phương Trang sở hữu 350 phương tiện, từ xe trạm, xe bến, xe...
              </p>
            </div>
          </div>
          <div className="flex items-center space-y-2">
            <img src={Group2} alt="1000 trips" className="size-20" />
            <div className="flex flex-col space-y-2 pl-2">
              <h3 className="text-xl font-semibold">Hơn 1,000 Chuyến Xe</h3>
              <p className="text-gray-500">
                Phương Trang phục vụ hơn 1,000 chuyến xe đường dài mỗi ngày
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <img
            src={CMS}
            alt="Travel illustration"
            className="mx-auto w-full max-w-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
