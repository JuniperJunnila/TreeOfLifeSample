import React, { useState } from "react";

export default function CarouselEditButton({
  adminView,
  editNumber,
  images,
  changeImage,
}) {
  const imageNumber = `image${editNumber}`;
  const value = images.urls[imageNumber];

  const [urlSwap, setUrlSwap] = useState({
    urls: images.urls,
  });

  const handleChange = (event) => {
    console.log(event.target.value);

    if (editNumber === "1") {
      setUrlSwap({ ...urlSwap, image1: event.target.value });
      console.log(urlSwap)
    } else if (editNumber === "2") {
      setUrlSwap({ ...urlSwap, image2: event.target.value });
    } else if (editNumber === "3") {
      setUrlSwap({ ...urlSwap, image3: event.target.value });
    }

    console.log("broke out")
    console.log(urlSwap)
    changeImage(urlSwap);
  };

  if (adminView) {
    return (
      <div>
        <button
          className="btn btn-primary border border-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseForm${editNumber}`}
          aria-expanded="false"
          aria-controls={`collapseForm${editNumber}`}
        >
          Edit Carousel Photo {editNumber}
        </button>
        <div className="collapse" id={`collapseForm${editNumber}`}>
          <div className="card card-body">
            <form>
              <label htmlFor="url">
                {`Enter a URL for your new image `}
                <input
                  id="url"
                  type="text"
                  name="url"
                  onChange={handleChange}
                  value={value}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
