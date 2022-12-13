import React from "react";
import "./Navbar.css";
import NavButtons from "./NavButtons/NavButtons.js";

export default function Navbar({ appState, navButtonsOnOff }) {
  return (
    <nav className="navbar navbar-dark navbar-bg container-fluid mt-0 pt-0">
      <div>
        <a className="navbar-brand" href="/">
          <img
            className="custom-logo"
            src="https://files.catbox.moe/o0rtl1.png"
            alt="Tree of Life Banner"
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
                href="/our-philosophy"
              >
                Our Philosophy
              </a>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/about-us"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/our-curriculum">
                    Our Curriculum
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/our-staff">
                    Our Staff
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/our-programs"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/green-room">
                    Green Room (2-3 Years)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/red-and-purple-rooms">
                    Red & Purple Rooms (3-4 Years)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/blue-and-yellow-rooms">
                    Blue & Yellow Rooms (PreK)
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/for-our-families"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Our Families
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/forms-and-nfo">
                    Forms & Information
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/family-resources">
                    Family Resources
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
            <li className="ml-auto mx-2">
              <NavButtons
                appState={appState}
                navButtonsOnOff={navButtonsOnOff}
              />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
