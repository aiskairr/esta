import Slider from "react-slick";
import scss from "./Category.module.scss";
import { useState } from "react";

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
    img: "/images/c_1.png",
    title: "Футболка"
  },
  {
    img: "/images/c_2.png",
    title: "Лонгслив"
  },
  {
    img: "/images/c_3.png",
    title: "Свитшот"
  },
  {
    img: "/images/c_4.png",
    title: "Худи"
  },
  {
    img: "/images/c_5.png",
    title: "Водолазка"
  },
  {
    img: "/images/c_6.png",
    title: "Рубашка"
  },
  {
    img: "/images/c_7.png",
    title: "Блузка"
  },
]

function Category() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const [activeCategory, setActiveCategory] = useState('children');
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={scss.category_wrapper}>
      <div className={scss.top_block}>
        <p className={scss.title}>Категории</p>
        <div>
          <button
            className={activeCategory === 'children' ? scss.active : ''}
            onClick={() => handleCategoryClick('children')}
          >
            детские
          </button>
          <button
            className={activeCategory === 'teens' ? scss.active : ''}
            onClick={() => handleCategoryClick('teens')}
          >
            подростковые
          </button>
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
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default Category;
