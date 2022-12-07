import "./Style.css";
import React, { useState } from "react";
import CarouselEditButton from "./CarouselEditButton/Script";

export default function Carousel({ appState }) {
  const adminView = appState.navState.adminView;
  const [images, setImages] = useState({
    urls: {
      image1: "https://files.catbox.moe/nhfolx.png",
      image2: "https://files.catbox.moe/8u29q2.png",
      image3: "https://files.catbox.moe/cysajy.png",
    },
    alts: { image1: "Image 1", image2: "Image 2", image3: "Image 3" },
  });

  const changeImage = (urlSwap) => {
    console.log(images);
    console.log(urlSwap);
    setImages({ ...images, urlSwap });
    console.log(images);
  };

  return (
    <div className="container-fluid justify-content-center">
      <div className="btn-group">
        <CarouselEditButton
          adminView={adminView}
          editNumber={"1"}
          images={images}
          changeImage={changeImage}
        />
        <CarouselEditButton
          adminView={adminView}
          editNumber={"2"}
          images={images}
          changeImage={changeImage}
        />
        <CarouselEditButton
          adminView={adminView}
          editNumber={"3"}
          images={images}
          changeImage={changeImage}
        />
      </div>
      <div className="carousel-inner" role="listbox">
        <div
          id="HomepageCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="d-flex carousel-inner">
            <div className="carousel-item active ">
              <img
                src={images.urls.image1}
                className="m-0 d-block w-100"
                alt={images.alts.image1}
              />
            </div>
            <div className="carousel-item ">
              <img
                src={images.urls.image2}
                className="m-0 d-block w-100"
                alt={images.alts.image2}
              />
            </div>
            <div className="carousel-item ">
              <img
                src={images.urls.image3}
                className="m-0 d-block w-100"
                alt={images.alts.image3}
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
