import React from "react";
import { NavLink } from "react-router-dom";
import SlideContainer from "../../../shared/SlideContainer/SlideContainer";
import promotions from "../../../../constatnts/PromotionSlider";

const NewsSlider = () => {
  return (
    <div className="mt-10 w-screen -mx-50 bg-futa-primary/5 p-4">
      <div className="mx-50 space-y-4 pb-10">
        <div className="flex flex-col space-y-4 relative">
          <span className="text-futa-heading w-full font-semibold text-3xl uppercase text-center">
            TIN TỨC MỚI
          </span>
          <span className="text-center">
            Được khách hàng tin tưởng và lựa chọn
          </span>
          <NavLink
            to="tin-tuc"
            className="text-center text-futa-primary absolute top-10 right-0"
          >
            Xem thêm
          </NavLink>
        </div>

        {/* slider */}
        <SlideContainer>
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className="w-full flex flex-col px-2 space-y-6 h-72"
            >
              <img
                src={promotion.image}
                alt={promotion.title}
                className="rounded-lg w-full"
              />
              <span className="pt-4">{promotion.title}</span>
            </div>
          ))}
        </SlideContainer>
      </div>
    </div>
  );
};

export default NewsSlider;
