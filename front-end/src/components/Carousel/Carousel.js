import "./Carousel.css";
import React from "react";
import RenderCarouselEditButton from "./RenderCarouselEditButton/RenderCarouselEditButton.js";
import RenderCarousel from "./RenderCarousel/RenderCarousel.js";

export default function Carousel({
  appState,
  editCarousel,
  editImageUploaderState,
}) {
  return (
    <div className="container-fluid justify-content-center">
      <div className="btn-group container-fluid justify-content-center w-100">
        <RenderCarouselEditButton
          editCarousel={editCarousel}
          appState={appState}
          editImageUploaderState={editImageUploaderState}
        />
      </div>
      <div className="carousel-inner" role="listbox">
        <div
          id="HomepageCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="d-flex carousel-inner rounded">
            <RenderCarousel editCarousel={editCarousel} appState={appState} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#HomepageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#HomepageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
