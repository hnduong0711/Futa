import React from "react";
import promotions from "../../../constatnts/PromotionSlider";
import SlideContainer from "../../shared/SlideContainer/SlideContainer";

const PromotionSlider = () => {
  return (
    <>
    <span className="text-futa-heading font-semibold text-3xl uppercase text-center">khuyến mãi nổi bật</span>
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
    </>
  );
};

export default PromotionSlider;
