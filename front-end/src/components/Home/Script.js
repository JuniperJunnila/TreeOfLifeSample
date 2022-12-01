import "./Style.css";
import Carousel from "../Carousel/Script";

export default function Home() {
  return (
    <div className="container d-flex flex-column">
      <div className="m-3">
        <Carousel />
      </div>
    </div>
  );
}
