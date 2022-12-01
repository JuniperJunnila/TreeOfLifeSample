import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Script";
import Home from "./components/Home/Script";
import "./App.css";

export default function App() {
  const [appState, setAppState] = useState({ navState: { adminView: false } });
  return (
    <div className="bg-info">
      <BrowserRouter>
        <div className="d-flex flex-column">
          <div className="mb-2">
          <Navbar appState={appState} setAppState={setAppState} /></div>
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
