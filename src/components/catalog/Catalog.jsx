import Slider from "react-slick";
import scss from "./Catalog.module.scss";
import useHook from "../hook/useHook";
import { useEffect, useState } from "react";
import CatalogCard from "./CatalogCard";

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

function Catalog() {
  const [activeCategory, setActiveCategory] = useState('children');
  const { getItemsWhere, items } = useHook("catalog");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: items.length > 1 ? 4 : 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: items.length > 1 ? 3 : 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: items.length > 1 ? 2 : 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: items.length > 1 ? 1 : 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    getItemsWhere(activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={scss.category_wrapper}>
      <div className={scss.top_block}>
        <p className={scss.title}>Каталог</p>
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
        {items?.map((el) => (
          <CatalogCard key={el.id} item={el} />
        ))}
      </Slider>
    </div>
  );
}

export default Catalog;