import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!Array.isArray(images) || images.length <= 0) return null;

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <div className="ProductShowImage">
      <div className="ImageThumbnail">
        {images.map((image, index) => {
          return (
            <div
              className={index === current ? "ActiveThumb" : "Thumb"}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <img src={image} alt="product thumb" />
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevImg} />
      <div className="ImageSlider">
        {images.map((image, index) => {
          return (
            <div
              className={index === current ? "ActiveSlider" : "Slider"}
              key={index}
            >
              {index === current && (
                <img src={image} alt="product image" className="ProductImage" />
              )}
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextImg} />
    </div>
  );
};

export default ImageSlider;
