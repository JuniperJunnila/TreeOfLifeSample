import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.js";
import Home from "../../components/Home/Home.js";
import Footer from "../../components/Footer/Footer.js";
import PageNotImplemented from "../PageNotImplemented/PageNotImplemented.js";
import bootstrapStyles from "../BootstrapStyles/BootstrapStyles.js";

const { routes } = bootstrapStyles;
const { allRoutes, browserRouter, routeDivs, footer } = routes;

export default function AllRoutes({
  appState,
  editBody,
  navButtonsOnOff,
  editCarousel,
  editImageUploaderState,
}) {
  return (
    <div className={allRoutes} id="allRoutes">
      <BrowserRouter>
        <div className={browserRouter} id="browserRouter">
          <div className={routeDivs} id="routeDivs">
            <Navbar appState={appState} navButtonsOnOff={navButtonsOnOff} />
          </div>
          <div className={routeDivs} id="routeDivs">
            <Routes>
              <Route
                path=""
                element={
                  <Home
                    editBody={editBody}
                    appState={appState}
                    editCarousel={editCarousel}
                    editImageUploaderState={editImageUploaderState}
                  />
                }
              />
              <Route
                path="/our-philosophy"
                element={<PageNotImplemented pageName={"Our Philosophy"} />}
              />
              <Route
                path="/our-curriculum"
                element={<PageNotImplemented pageName={"Our Curriculum"} />}
              />
              <Route
                path="/our-staff"
                element={<PageNotImplemented pageName={"Our Staff"} />}
              />
              <Route
                path="/green-room"
                element={<PageNotImplemented pageName={"Green Room"} />}
              />
              <Route
                path="/red-and-purple-rooms"
                element={
                  <PageNotImplemented pageName={"Red and Purple Rooms"} />
                }
              />
              <Route
                path="/blue-and-yellow-rooms"
                element={
                  <PageNotImplemented pageName={"Blue and Yellow Rooms"} />
                }
              />
              <Route
                path="/forms-and-info"
                element={<PageNotImplemented pageName={"Forms and Info"} />}
              />
              <Route
                path="/family-resources"
                element={<PageNotImplemented pageName={"Family Resources"} />}
              />
              <Route
                path="/contact-us"
                element={<PageNotImplemented pageName={"Contact Us"} />}
              />
            </Routes>
          </div>
          <div className={footer} id="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
