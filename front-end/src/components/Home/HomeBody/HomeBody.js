import React from "react";
import "./HomeBody.css";

export default function HomeBody({ setPara, appState }) {
  return (
    <div className="m-md-3 p-md-1 d-flex flex-column">
      <div className="m-md-0 m-lg-2 text-center rounded row bg-info">
        <h1 className="p-md-3 font-weight-bold text-md-start">Welcome</h1>
      </div>
      <div className="row ">
        <div className="m-3 col col-lg-8 col-md-11">
          {appState.homeState.para}
        </div>
        <div className="m-4 rounded col">
          <div className="shadow-sm bg-white rounded row mb-3">
            <button
              id="button"
              className="btn btn-primary btn-block"
              to="#"
              onClick={(e) => {
                window.location.href = "/contact-us";
                e.preventDefault();
              }}
            >
              Enrolling
            </button>
            <h4 className="rounded">We are enrolling!</h4>
            <p className="rounded">
              Our preschool is licensed for children between the ages of 2-5. If
              you're interested, please contact us to schedule a tour!
            </p>
          </div>
          <div className="shadow-sm bg-white rounded row">
            <button
              id="button"
              className="btn btn-primary btn-block"
              to="#"
              onClick={(e) => {
                window.location.href = "mailto: mskerri.treeoflife@yahoo.com";
                e.preventDefault();
              }}
            >
              Tours
            </button>
            <h4 className="rounded">Tours are available by appointment.</h4>
            <p className="text-center rounded">please email</p>
            <a
              className="text-center rounded"
              href="mailto: mskerri.treeoflife@yahoo.com"
            >
              mskerri.treeoflife@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
