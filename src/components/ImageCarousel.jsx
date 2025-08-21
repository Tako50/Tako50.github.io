import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "profile-tottenam.jpg",
  "profile-soccer.jpg",
  "profile-hokudai.jpg",
  "profile-aba.jpg",
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-4 sm:px-6">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
