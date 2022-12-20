import Carousel from "../Carousel/Carousel.js";
import HomeBody from "./HomeBody/HomeBody.js";
import bootstrapStyles from "../../utils/BootstrapStyles/BootstrapStyles.js";

const { home } = bootstrapStyles;
const { wrapper, body, carousel } = home;

export default function Home({
  appState,
  editCarousel,
  editImageUploaderState,
}) {
  return (
    <div className={wrapper} id="wrapper">
      <div className={carousel} id="carousel">
        <Carousel
          appState={appState}
          editCarousel={editCarousel}
          editImageUploaderState={editImageUploaderState}
        />
      </div>
      <div className={body} id="body">
        <HomeBody appState={appState} />
      </div>
    </div>
  );
}
