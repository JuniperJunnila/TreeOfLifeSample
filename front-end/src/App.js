import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Script";
import Home from "./components/Home/Script";
import "./App.css";
import Footer from "./components/Footer/Script";
import PageNotImplemented from "./utils/PageNotImplemented/Script";

export default function App() {
  const initialAppState = {
    navState: { adminView: false },
    homeState: {
      para: [
        <p>
          Tree of Life Learning Center is a private, family-owned,
          developmentally-based Jewish preschool. We are located across from the
          Sycamore Valley Park and Sycamore Valley Elementary School. Our school
          is surrounded by the beautiful, lush rolling hills of Danville. We
          offer full-day, part-day, and school-day programs for children ages 2
          – 5 years-old.
        </p>,
        <p>
          We believe that small student-teacher ratios allow us to better meet
          the needs of the children in our care. This also allows us to support
          children that may need extra guidance, while also supporting the
          children that may need more of a challenge. We strive to keep a six to
          one student-teacher ratio in the 2 year-old program, an eight to one
          ratio in the 3 year-old program and a nine to one ratio in the Pre-K
          program. We are a year round school; open Monday through Friday from
          7:00am to 6:00pm with the exception of major holidays and a spring and
          winter break. We celebrate both Jewish and American holidays. We
          welcome and celebrate children from all religions and backgrounds and
          work with our families to ensure that all family traditions are
          respected and valued.
        </p>,
        <p>
          As a school, we value the process of learning, exploration and
          discovery. We want every child to gain a love of learning in their
          time here. We view families as a valued part of our community and a
          necessary part of growth and development. We strive to help our
          children establish a strong sense of community and social
          responsibility.
        </p>,
        <p>
          Send us an email to schedule a tour of our wonderful school!!! We look
          forward to meeting you and your beautiful children. 
        </p>,
      ],
    },
  };

  const [appState, setAppState] = useState(initialAppState);

  const SetPara = (str) => {
    const paras = str.split("\n");
    console.log(paras);
  };

  const NavButtonsOn = () => {
    setAppState({ ...appState, navState: { adminView: true } });
  };

  const NavButtonsOff = () => {
    setAppState({ ...appState, navState: { adminView: false } });
  };

  return (
    <div className="bg-info app">
      <BrowserRouter>
        <div className="d-flex flex-column">
          <div className="m-0">
            <Navbar
              appState={appState}
              NavButtonsOff={NavButtonsOff}
              NavButtonsOn={NavButtonsOn}
            />
          </div>
          <div className="m-0">
            <Routes>
              <Route
                path=""
                element={<Home SetPara={SetPara} appState={appState} />}
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
          <div className="m-3">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
