import React from "react";

export default function RenderCarousel({ appState }) {
  const carouselElements = [];
  const { homeState } = appState;
  const { carouselState = {} } = homeState;
  const { urls = [] } = carouselState;
  Object.keys(urls).forEach(function (
    key,
    index
  ) {
    if (index === 1) {
      carouselElements.push(
        <div className="carousel-item active" key={key}>
          <img
            src={appState.homeState.carouselState.urls[key]}
            className="m-0 d-block w-100"
            alt={`Carousel ${index + 1}`}
          />
        </div>
      );
    } else {
      carouselElements.push(
        <div className="carousel-item" key={key}>
          <img
            src={appState.homeState.carouselState.urls[key]}
            className="m-0 d-block w-100"
            alt={`Carousel ${index + 1}`}
          />
        </div>
      );
    }
  });
  return carouselElements
}
