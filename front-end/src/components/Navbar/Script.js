import React, { useEffect, useState } from "react";
import "./Style.css";
import NavButtons from "./NavButtons/Script";

export default function Navbar({ appState, setAppState }) {
  const [navState, setNavState] = useState({ adminView: false });

  useEffect(() => {
    console.log(navState);
    setAppState({ ...appState, navState: navState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navState]);

  return (
    <nav className="navbar navbar-dark navbar-bg container-fluid mt-0 pt-0">
      <div>
        <a className="navbar-brand" href="/">
          <img
            className="custom-logo"
            src="https://files.catbox.moe/o0rtl1.png"
          />
        </a>
        <button
          className="navbar-toggler m-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse navbar-expand-md"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="container-fluid d-flex flex-column flex-md-row justify-content-start">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="/">
                Welcome
              </a>
            </li>

            <li className="nav-item mx-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/OurPhilosophy"
              >
                Our Philosophy
              </a>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/AboutUs"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/OurCurriculum">
                    Our Curriculum
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/OurStaff">
                    Our Staff
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/OurPrograms"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/GreenRoom">
                    Green Room (2-3 Years)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/R+PRooms">
                    Red & Purple Rooms (3-4 Years)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/B+YRooms">
                    Blue & Yellow Rooms (PreK)
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/ForOurFamilies"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Our Families
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Forms+Info">
                    Forms & Information
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/FamilyResources">
                    Family Resources
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/ContactUs"
              >
                Contact Us
              </a>
            </li>
            <li className="ml-auto mx-2">
              <NavButtons navState={navState} setNavState={setNavState} />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
