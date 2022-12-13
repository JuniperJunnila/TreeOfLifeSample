import "./Home.css";
import Carousel from "../Carousel/Carousel.js";
import HomeBody from "./HomeBody/HomeBody.js";

export default function Home({ appState, setPara, editCarousel, editImageUploaderState }) {
  return (
    <div className="container d-flex flex-column">
      <div className="m-3 flex-row">
        <Carousel appState={appState} editCarousel={editCarousel} editImageUploaderState={editImageUploaderState} />
      </div>
      <div className="bg-light m-3 flex-row">
        <HomeBody appState={appState} setPara={setPara} />
      </div>
    </div>
  );
}
