import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Script";
import Home from "./components/Home/Script";
import "./App.css";
import Footer from "./components/Footer/Script";

export default function App() {
  const [appState, setAppState] = useState({ navState: { adminView: false } });
  return (
    <div className="h-100 bg-info">
      <BrowserRouter>
        <div className="d-flex flex-column">
          <div className="m-0">
            <Navbar appState={appState} setAppState={setAppState} />
          </div>
          <div className="m-0">
            <Routes>
              <Route path="" element={<Home />} />
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
