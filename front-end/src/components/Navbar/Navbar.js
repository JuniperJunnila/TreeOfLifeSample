import React from "react";
import "./Navbar.css";
import NavButtons from "./NavButtons/NavButtons.js";
import bootstrapStyles from "../../utils/BootstrapStyles/BootstrapStyles";

const { navBar } = bootstrapStyles;
const {
  nav,
  brand,
  logo,
  toggle,
  toggleIcon,
  navbarSupportedContent,
  list,
  listContainer,
  listItem,
  llinkActive,
  dropdown,
  dropdownToggle,
  dropdownMenu,
  dropdownItem,
  buttons,
} = navBar;

export default function Navbar({ appState, navButtonsOnOff }) {
  return (
    <nav className={nav} id="nav">
      <div>
        <a className={brand} id="brand" href="/">
          <img
            className={logo}
            id="logo"
            src="https://files.catbox.moe/o0rtl1.png"
            alt="Tree of Life Banner"
          />
        </a>
        <button
          className={toggle}
          id="toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className={toggleIcon} id="toggleIcon"></span>
        </button>
      </div>
      <div className={navbarSupportedContent} id="navbarSupportedContent">
        <ul className={list} id="list">
          <div className={listContainer} id="listContainer">
            <li className={listItem} id="listItem">
              <a
                className={llinkActive}
                id="llinkActive"
                aria-current="page"
                href="/"
              >
                Welcome
              </a>
            </li>

            <li className={listItem} id="listItem">
              <a
                className={llinkActive}
                id="llinkActive"
                aria-current="page"
                href="/our-philosophy"
              >
                Our Philosophy
              </a>
            </li>

            <li className={dropdown} id="dropdown">
              <a
                className={dropdownToggle}
                id="dropdownToggle"
                href="/about-us"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className={dropdownMenu} id="dropdownMenu">
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/our-curriculum"
                  >
                    Our Curriculum
                  </a>
                </li>
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/our-staff"
                  >
                    Our Staff
                  </a>
                </li>
              </ul>
            </li>

            <li className={dropdown} id="dropdown">
              <a
                className={dropdownToggle}
                id="dropdownToggle"
                href="/our-programs"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programs
              </a>
              <ul className={dropdownMenu} id="dropdownMenu">
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/green-room"
                  >
                    Green Room (2-3 Years)
                  </a>
                </li>
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/red-and-purple-rooms"
                  >
                    Red & Purple Rooms (3-4 Years)
                  </a>
                </li>
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/blue-and-yellow-rooms"
                  >
                    Blue & Yellow Rooms (PreK)
                  </a>
                </li>
              </ul>
            </li>

            <li className={dropdown} id="dropdown">
              <a
                className={dropdownToggle}
                id="dropdownToggle"
                href="/for-our-families"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Our Families
              </a>
              <ul className={dropdownMenu} id="dropdownMenu">
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/forms-and-nfo"
                  >
                    Forms & Information
                  </a>
                </li>
                <li>
                  <a
                    className={dropdownItem}
                    id="dropdownItem"
                    href="/family-resources"
                  >
                    Family Resources
                  </a>
                </li>
              </ul>
            </li>

            <li className={listItem} id="listItem">
              <a
                className={llinkActive}
                id="llinkActive"
                aria-current="page"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
            <li className={buttons} id="buttons">
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
