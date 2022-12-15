import "./Footer.css";
import React from "react";
import { Facebook, Yelp, Google } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="bg-info text-center">
      <div className="container-fluid">
        <section className="mb-4 row justify-content-center">
          <a
            className="col-1 btn"
            href="https://www.facebook.com/treeoflifelearningcenter/"
          >
            <Facebook color="#3b5998" />
          </a>
          <a
            className="col-1 btn"
            href="https://www.yelp.com/biz/tree-of-life-learning-center-danville"
          >
            <Yelp color="#c41200" />
          </a>
          <a
            className="col-1 btn"
            href="https://www.google.com/maps/place/Tree+of+Life+Learning+Center/@37.8060302,-121.9441375,15z/data=!4m5!3m4!1s0x0:0xdd462ee6087b0153!8m2!3d37.806144!4d-121.944375"
          >
            <Google color="#dd4b39" />
          </a>
          {/* <a className="col-1 btn" href="">
            <Instagram color="#ac2bac" />
          </a> */}
          <a
            className="col-1 btn"
            href="https://www.berkeleyparentsnetwork.org/recommend/preschool/tree-life-learning-center"
          >
            <img
              className="parents-of-berkeley"
              src="https://www.berkeleyparentsnetwork.org/sites/all/themes/bpn/logo.svg"
              alt="berkeley parents network"
            />
          </a>
        </section>

        {/* Section: Text */}
        <section className="mb-4 row justify-content-center">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <h6 className="fw-bold">Administrative Director</h6>
                <p>Kelley Cohen</p>
              </div>
              <div className="col">
                <h6 className="fw-bold">Director/Teacher</h6>
                <p>Kerri White</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="fw-bold">Loacted at</h6>
                <a
                  className="link-light"
                  href="https://www.google.com/maps/place/Tree+of+Life+Learning+Center/@37.8060302,-121.9441375,15z/data=!4m5!3m4!1s0x0:0xdd462ee6087b0153!8m2!3d37.806144!4d-121.944375"
                >
                  <p>1800 Holbrook Drive, Danville,​California 94506</p>
                </a>
              </div>
              <div className="col">
                <h6 className="fw-bold">Email us at</h6>
                <a className="link-light" href="mailto:mskerri.treeoflife@yahoo.com">
                  <p>mskerri.treeoflife@yahoo.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Text */}
      </div>
      {/* Grid container */}
    </footer>
  );
}
