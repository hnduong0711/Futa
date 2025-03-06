import React from "react";
import BookingBox from "../components/user/BookingBox/BookingBox";
import PromotionSlider from "../components/user/CustomSlider/PromotionSlider";
import FavouriteRoutes from "../components/user/FavouriteRoute/FavouriteRoutes";

const Homepage = () => {
  return (
    <div className="px-50 py-10 relative">
      <div className="flex flex-col pt-44 space-y-12">
        <BookingBox />
        <PromotionSlider />
        <FavouriteRoutes />
      </div>
    </div>
  );
};

export default Homepage;
