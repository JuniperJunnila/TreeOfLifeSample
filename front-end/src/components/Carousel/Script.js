import "./Style.css";
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [images, setImages] = useState({
    image1:
      "https://static.wixstatic.com/media/df1e3c_3bb2bb55ab564c2a8705c383f19264bc~mv2.jpg/v1/fill/w_500,h_277,q_90/df1e3c_3bb2bb55ab564c2a8705c383f19264bc~mv2.jpg",
    image2:
      "https://static.wixstatic.com/media/df1e3c_d4badefc6ebc4f21b7e9b63be9b59449~mv2.jpg/v1/fill/w_478,h_280,q_90/df1e3c_d4badefc6ebc4f21b7e9b63be9b59449~mv2.jpg",
    image3:
      "https://static.wixstatic.com/media/df1e3c_403f8e4141124288a61f7484c3270123~mv2.jpg/v1/fill/w_478,h_280,q_90/df1e3c_403f8e4141124288a61f7484c3270123~mv2.jpg",
  });

  if (false) setImages({ ...images });

  return (
    <div
      className="d-flex bg-dark container-fluid justify-content-center"
      id="container"
    >
      <div className="carousel-inner carouselStyle" role="listbox">
        <div
          id="HomepageCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img
                src={images["image1"]}
                className="d-block w-100 img-customization"
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src={images["image2"]}
                className="d-block w-100 img-customization"
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src={images["image3"]}
                className="d-block w-100 img-customization"
                alt="..."
              />
            </div>
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
