import "./Slider.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const forSlider = [
  "https://static.vecteezy.com/system/resources/previews/023/871/615/non_2x/louis-vuitton-brand-logo-with-name-white-symbol-design-clothes-fashion-illustration-with-black-background-free-vector.jpg",

  "https://moneyinc.com/wp-content/uploads/2018/12/prada-milano-logo-traxex-gringer.jpg",
  "https://lindeal.com/images/gucci-istoriya-sozdaniya-i-uspekha.png",

  "https://static.tildacdn.com/tild3266-6166-4430-b766-373264666639/Emblme-Herms.png",

  "https://logodix.com/logo/301532.jpg",
  "https://cbgd.ask.fm/wallpapers2/052/000/552/192/original/file.jpg",
  "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1980-1988.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gap_logo.svg/1200px-Gap_logo.svg.png",

  "https://soberger.ru/wp-content/uploads/2018/12/levis-logo.jpg",

  "https://logos-marcas.com/wp-content/uploads/2020/11/Giorgio-Armani-Simbolo.jpg",
  "https://i.ytimg.com/vi/dlnEcsHtPeM/maxresdefault.jpg",
  "https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-zara-logotip-na-prozrachnom-fone-14.jpg",
];
export const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {forSlider.map((el, index) => {
          return (
            <div className="images" key={index}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
