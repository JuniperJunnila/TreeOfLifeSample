import "./Style.css";
import Carousel from "../Carousel/Script";
import HomeBody from "./HomeBody/Script";

export default function Home({appState, SetPara}) {
  return (
    <div className="container d-flex flex-column">
      <div className="m-3 flex-row">
        <Carousel appState={appState}/>
      </div>
      <div className="bg-light m-3 flex-row">
        <HomeBody appState={appState} SetPara={SetPara} />
      </div>
    </div>
  );
}
