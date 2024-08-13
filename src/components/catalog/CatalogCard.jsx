import React, { useState } from "react";
import scss from "./CatalogCard.module.scss";

function CatalogCard({ item }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % item.images.length
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + item.images.length) % item.images.length
        );
    };

    return (
        <div>
            <div className={scss.card_wrapper}>
                <div className={scss.image_navigation}>
                    <button onClick={handlePrevImage}>
                        <img src="/images/prevArIm.svg" />
                    </button>
                    <button onClick={handleNextImage}>
                        <img src="/images/nextArIm.svg" />
                    </button>
                </div>
                <div className={scss.img_w}>
                    <img
                        src={item.images[currentImageIndex]?.url || ""}
                        alt=""
                        className={scss.mainImage}
                    />
                    <div className={scss.size_overlay}>
                        <p className={scss.size}>Размеры:</p>
                        <div className={scss.size__cont}>
                            {item.size.map((size, index) => (
                                <p key={index}>{size}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.bottom}>
                <p className={scss.c_title}>{item.title}</p>
                <p className={scss.price}>{item.price} с</p>
                <div className={scss.colors}>
                    {item.colors.map((color, index) => (
                        <div
                            key={`${index}_${color}`}
                            style={{ backgroundColor: color, border: "1px solid #333333" }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;