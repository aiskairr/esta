import React from "react";
import Slider from "react-slick";
import scss from "./About.module.scss";
import { useTheme } from "../mode/useTheme";


function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  const { theme } = useTheme();

  return (
    <div
      className={`${className} ${scss.customPrevArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {
        theme == "light" ? (
          <img src="/images/l_arr.svg" alt="Previous" />
        ) : (
          <img src="/images/arrowLwhite.svg" alt="Previous" />
        )
      }
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  const { theme } = useTheme();

  return (
    <div
      className={`${className} ${scss.customNextArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {
        theme == "light" ? (
          <img src="/images/r_arr.svg" alt="Next" />
        ) : (
          <img src="/images/arrowRwhite.svg" alt="Next" />
        )
      }
    </div>
  );
}

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={scss.About_w + " container"}>
      <div className={scss.left}>
        <p className={scss.title}>С нами быстро, надежно, качественно</p>
        <p className={scss.desc}>
          Швейная фабрика ESTA производит одежду с марта 2022 года. За 2 года мы
          произвели более 200.000 единиц продукции разного кроя. Выпускаем
          одежду под собственным брендом и принимаем заказы на пошив и
          аутсорсинг.
          <br />
          <br />
          Мы предлагаем : полный цикл производства, начиная от разработки
          дизайна, брендирования и заканчивая готовой продукцией.
        </p>
      </div>
      <div className={scss.right}>
        <Slider {...settings}>
          <div><img src="/images/5.jpg" alt="Product 1" /></div>
          <div><img src="/images/6.jpg" alt="Product 2" /></div>
          <div><img src="/images/7.png" alt="Product 3" /></div>
        </Slider>
      </div>
    </div>
  );
}

export default About;
