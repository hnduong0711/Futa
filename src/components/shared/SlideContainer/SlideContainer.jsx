import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pro1, Pro2, Pro3 } from "../../../assets";

const SlideContainer = ({ children }) => {
  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Dưới 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Dưới 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {/* Các slide */}
        {children}
      </Slider>
    </div>
  );
};

export default SlideContainer;
