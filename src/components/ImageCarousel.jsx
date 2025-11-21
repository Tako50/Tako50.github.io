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
    <div className="w-full max-w-5xl mx-auto mb-12 px-4 animate-fade-in">
      <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="relative outline-none">
              <div className="aspect-video w-full relative">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>);
}

export default ImageCarousel;
