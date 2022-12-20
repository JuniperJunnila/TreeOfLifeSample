import "./Carousel.css";
import React from "react";
import RenderCarouselEditButton from "./RenderCarouselEditButton/RenderCarouselEditButton.js";
import RenderCarousel from "./RenderCarousel/RenderCarousel.js";
import bootstrapStyles from "../../utils/BootstrapStyles/BootstrapStyles";

const { carousel } = bootstrapStyles;
const {
  wrapper,
  inner,
  homepageCarousel,
  innerRound,
  buttonPrev,
  prevIcon,
  hidden,
  buttonNext,
  nextIcon,
} = carousel;

export default function Carousel({
  appState,
  editCarousel,
  editImageUploaderState,
}) {
  return (
    <div className={wrapper} id="wrapper">
      <div className={wrapper} id="wrapper">
        <RenderCarouselEditButton
          editCarousel={editCarousel}
          appState={appState}
          editImageUploaderState={editImageUploaderState}
        />
      </div>
      <div className={inner} id="inner" role="listbox">
        <div
          id="homepageCarousel"
          className={homepageCarousel}
          data-bs-ride="carousel"
        >
          <div className={innerRound} id="innerRound">
            <RenderCarousel editCarousel={editCarousel} appState={appState} />
          </div>
        </div>
        <button
          className={buttonPrev}
          id="buttonPrev"
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide="prev"
        >
          <span className={prevIcon} id="prevIcon" aria-hidden="true"></span>
          <span className={hidden} id="hidden">
            Previous
          </span>
        </button>
        <button
          className={buttonNext}
          id="buttonNext"
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide="next"
        >
          <span className={nextIcon} id="nextIcon" aria-hidden="true"></span>
          <span className={hidden} id="hidden">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
