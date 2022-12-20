import React from "react";
import bootstrapStyles from "../../../utils/BootstrapStyles/BootstrapStyles";

const { renderCarousel } = bootstrapStyles;
const { activeItem, image, item } = renderCarousel;

export default function RenderCarousel({ appState }) {
  const carouselElements = [];
  const { homeState } = appState;
  const { carouselState = {} } = homeState;
  const { urls = [] } = carouselState;
  Object.keys(urls).forEach(function (key, index) {
    if (index === 1) {
      carouselElements.push(
        <div className={activeItem} id="activeItem" key={key}>
          <img
            src={appState.homeState.carouselState.urls[key]}
            className={image}
            id="image"
            alt={`Carousel ${index + 1}`}
          />
        </div>
      );
    } else {
      carouselElements.push(
        <div className={item} id="item" key={key}>
          <img
            src={appState.homeState.carouselState.urls[key]}
            className={image}
            id="image"
            alt={`Carousel ${index + 1}`}
          />
        </div>
      );
    }
  });
  return carouselElements;
}
