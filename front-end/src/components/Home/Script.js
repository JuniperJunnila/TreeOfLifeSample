import "./Style.css";
import Carousel from "../Carousel/Script";
import HomeBody from "./HomeBody/Script";

export default function Home() {
  return (
    <div className="container d-flex flex-column">
      <div className="m-3">
        <Carousel />
      </div>
      <div className="m-3">
        <HomeBody />
      </div>
    </div>
  );
}
