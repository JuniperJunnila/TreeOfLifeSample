import "./Footer.css";
import React from "react";
import { Facebook, Yelp, Google } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import bootstrapStyles from "../../utils/BootstrapStyles/BootstrapStyles";

const { footerStyles } = bootstrapStyles;
const { footer, container, section, button, info, linkLight } = footerStyles;

export default function Footer() {
  return (
    <footer className={footer} id="footer">
      <div className={container} id="container">
        <section className={section} id="section">
          <a
            className={button}
            id="button"
            href="https://www.facebook.com/treeoflifelearningcenter/"
          >
            <Facebook color="#3b5998" />
          </a>
          <a
            className={button}
            id="button"
            href="https://www.yelp.com/biz/tree-of-life-learning-center-danville"
          >
            <Yelp color="#c41200" />
          </a>
          <a
            className={button}
            id="button"
            href="https://www.google.com/maps/place/Tree+of+Life+Learning+Center/@37.8060302,-121.9441375,15z/data=!4m5!3m4!1s0x0:0xdd462ee6087b0153!8m2!3d37.806144!4d-121.944375"
          >
            <Google color="#dd4b39" />
          </a>
          {/* <a className={button} id="button" href="">
            <Instagram color="#ac2bac" />
          </a> */}
          <a
            className={button}
            id="button"
            href="https://www.berkeleyparentsnetwork.org/recommend/preschool/tree-life-learning-center"
          >
            <img
              className="parents-of-berkeley"
              id="parents-of-berkeley"
              src="https://www.berkeleyparentsnetwork.org/sites/all/themes/bpn/logo.svg"
              alt="berkeley parents network"
            />
          </a>
        </section>

        {/* Section: Text */}
        <section className={section} id="section">
          <div className={info} id="info">
            <Row>
              <Col>
                <h6>Administrative Director</h6>
                <p>Kelley Cohen</p>
              </Col>
              <Col>
                <h6>Director/Teacher</h6>
                <p>Kerri White</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Loacted at</h6>
                <a
                  className={linkLight}
                  id="linkLight"
                  href="https://www.google.com/maps/place/Tree+of+Life+Learning+Center/@37.8060302,-121.9441375,15z/data=!4m5!3m4!1s0x0:0xdd462ee6087b0153!8m2!3d37.806144!4d-121.944375"
                >
                  <p>1800 Holbrook Drive, Danville,​California 94506</p>
                </a>
              </Col>
              <Col>
                <h6>Email us at</h6>
                <a
                  className={linkLight}
                  id="linkLight"
                  href="mailto:mskerri.treeoflife@yahoo.com"
                >
                  <p>mskerri.treeoflife@yahoo.com</p>
                </a>
              </Col>
            </Row>
          </div>
        </section>
        {/* Section: Text */}
      </div>
      {/* Grid container */}
    </footer>
  );
}
