import React, { useState } from "react";
import BookingBox from "../components/user/HomePageComponent/BookingBox/BookingBox";
import PromotionSlider from "../components/user/HomePageComponent/CustomSlider/PromotionSlider";
import FavouriteRoutes from "../components/user/HomePageComponent/FavouriteRoute/FavouriteRoutes";
import ServiceStats from "../components/user/HomePageComponent/ServiceStats/ServiceStats";
import NewsSlider from "../components/user/HomePageComponent/CustomSlider/NewsSlider";
import { CMS1 } from "../assets";

const Homepage = () => {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    departureDate: null,
    returnDate: null,
    isRoundTrip: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [schedules, setSchedules] = useState([]);

  return (
    <div className="px-50 py-10 relative">
      <div className="flex flex-col pt-44 space-y-12">
        <BookingBox
          form={form}
          setForm={setForm}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          setSchedules={setSchedules}
        />
        <PromotionSlider />
        <FavouriteRoutes />
        <ServiceStats />
        {/* <NewsSlider /> */}
        {/* End of section */}
        <div className="flex flex-col space-y-4">
          <span className="text-futa-heading w-full font-semibold text-3xl uppercase text-center">
            KẾT NỐI FUTA GROUP
          </span>
          <span className="text-center w-[52%] mx-auto">
            Kết nối đa dạng hệ sinh thái FUTA Group qua App FUTA: mua vé Xe
            Phương Trang, Xe Buýt, Xe Hợp Đồng, Giao Hàng,...
          </span>
        </div>
        <img src={CMS1} alt="cms1" className="p-10 w-4/5 flex m-auto" />
      </div>
    </div>
  );
};

export default Homepage;