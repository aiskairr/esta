import Slider from "react-slick";
import scss from "./Catalog.module.scss";

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${scss.customPrevArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="/images/c_r_arr.svg" alt="Previous" />
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${scss.customNextArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="/images/c_l_arr.svg" alt="Next" />
    </div>
  );
}

const cardArr = [
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "100"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "200"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "300"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "400"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "500"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "600"
    },
    {
        img: "/images/ss.png",
        title: "Платье с цветами",
        price: "700"
    },
]

function Catalog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const Csettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className={scss.category_wrapper}>
        <div className={scss.top_block}>
            <p className={scss.title}>Каталог</p>
            <div>
                <button className={scss.active}>детские</button>
                <button>подростковые</button>
            </div>
        </div>
      <Slider {...settings}>
        {
            cardArr.map((el) => {
                return (
                    <div className={scss.card_wrapper}>
                        <div className={scss.img_w}>
                            <img src={el.img} alt="" />
                        </div>
                        <p className={scss.c_title}>
                            {el.title}
                        </p>
                        <p className={scss.price}>
                          {el.price} с
                        </p>
                        <div className={scss.colors}>
                          <div style={{backgroundColor: "red"}}></div>
                          <div style={{backgroundColor: "#FC9DC6"}}></div>
                          <div style={{backgroundColor: "#FF8800"}}></div>
                          <div style={{backgroundColor: "#000000", border: "1px solid white"}}></div>
                          <div style={{backgroundColor: "#FFFFFF", border: "1px solid black"}}></div>
                        </div>
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
}

export default Catalog;
