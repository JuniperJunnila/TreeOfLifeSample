import React from "react";
import ImageUploader from "../../ImageUploader/ImageUploader";

export default function RenderCarouselEditButton({
  editCarousel,
  appState,
  editImageUploaderState,
}) {
  const { adminView } = appState.navState;
  const { homeState } = appState;
  const { carouselState } = homeState;
  const { heldUrls, urls } = carouselState;

  let editButtons = [];

  if (false) {
    return (
      <form>
        <label htmlFor="url">
          {`Enter a URL for your new image `}
          <input
            id="url"
            type="text"
            name="url"
            onChange={editCarousel}
            // value={typeof heldUrls[key]}
            value={typeof heldUrls[0]}
          />
        </label>
      </form>
    );
  }

  if (adminView) {
    Object.keys(urls).forEach(function (key, index) {
      editButtons.push(
        <div key={key}>
          <button
            className="btn btn-primary border border-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseForm${key}`}
            aria-expanded="false"
            aria-controls={`collapseForm${key}`}
            key={key}
          >
            Edit Carousel Photo {index + 1}
          </button>
          <div className="collapse" id={`collapseForm${key}`}>
            <div className="card card-body">
              <ImageUploader
                appState={appState}
                editImageUploaderState={editImageUploaderState}
              />
            </div>
          </div>
        </div>
      );
    });
  }
  return editButtons;
}
