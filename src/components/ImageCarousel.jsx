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
    dots: true, // 🔘 丸インジケータ
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // ⏪⏩ ボタン
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // モバイルは矢印消すとかも可
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              style={{
                width: "100%", // 幅を100%にする
                height: "400px", // 高さを固定
                objectFit: "cover", // 画像が枠に収まるように切り取る
                borderRadius: "16px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
