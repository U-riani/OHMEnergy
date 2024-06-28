import React from "react";
import { Accordion, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { logo } from "../images/flags/flags";
import "../footer.css";

const FooterComponent = () => {
  return (
    <Container fluid className="bg-secondary-subtle">
      <Row className="py-4 border-bottom px-5 ">
        <div className="footer-menu-info-container ">
          <div className="footer-site-map-container mb-5">
            <div className="footer-site-map-title-container">
              <h4>Site Map</h4>
              <hr />
            </div>
            <div className="footer-site-map-logo-menu-container">
              <div className="footer-site-map-logo-container">
                <div className="footer-site-map-logo-container">
                  <div className="footer-site-map-logo-inner-container pt-0">
                    {logo}
                  </div>
                </div>
              </div>
              <div className="footer-site-map-menu-container">
                <Nav className="footer-nav-inner">
                  <Nav.Link>ABOUT US</Nav.Link>
                  {/* <NavDropdown title="SERViCES" id="basic-nav-dropdown" className="d-inline-flex p-relative">
                    <Dropdown.Item>Solar Install</Dropdown.Item>
                    <Dropdown.Item>Modern Heating</Dropdown.Item>
                  </NavDropdown> */}
                  <Accordion
                    className="footer-accordion-container"
                    // defaultActiveKey="0"
                    flush
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="footer-accordion">
                        OUR PROJECTS
                      </Accordion.Header>
                      <Accordion.Body className="py-0 ps-2 pe-0 d-flex flex-column">
                        <Nav.Link className="pt-3 pe-0">LARGE SCALE</Nav.Link>
                        <Nav.Link className=" pe-0">COMMERCIAL</Nav.Link>
                        <Nav.Link className=" pe-0">RESIDENTIALL</Nav.Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Nav.Link>BLOG</Nav.Link>
                  <Nav.Link className="one-line-link">PARTNERS</Nav.Link>
                  <Nav.Link className="one-line-link">
                    SOLAR CALCULATOR
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
          <div className="footer-address-menu-container">
            <div className="footer-site-map-title-container">
              <h4>Address</h4>
              <hr />
            </div>
            <div className="footer-site-map-p-container footer-site-map-address-text-container">
              <p>11a Paliashvili Street</p>
              <p>Tbilisi, Georgia</p>
            </div>
          </div>
          <div className="footer-working-hours-menu-container">
            <div className="footer-site-map-title-container">
              <h4>Working Hours</h4>
              <hr />
            </div>
            <div className="footer-site-map-p-container footer-site-map-working-hours-text-container">
              <p>Mon - Fri, 10:00 - 19:00</p>
            </div>
          </div>
          {/* <div className="footer-site-map-"></div> */}
          <div className="footer-contact-menu-container">
            <div className="footer-site-map-title-container">
              <h4>Contact</h4>
              <hr />
            </div>
            <div className="footer-site-map-p-container footer-site-map-contact-text-container">
              <div className="footer-site-map-contact-info-container footer-site-map-contact-number-container">
                <FontAwesomeIcon icon={faPhone} />
                <p className="ps-3">+995 32 280 00 33</p>
              </div>
              <div className="footer-site-map-contact-info-container footer-site-map-contact-mail-container">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="ps-3">info@ohmenergy.ge</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className="py-4">
        <Col sm={12} className="text-center pb-2">
          <h3>Follow us</h3>
        </Col>
        <Col sm={12}>
          <div className="footer-icons d-flex justify-content-center gap-3">
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon-size"
                size="2x"
              />
            </div>
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon-size"
                size="2x"
              />
            </div>
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon-size"
                size="2x"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="py-4">
        <p className="text-center">
          © <span className="text-warning">OHM ENERGY</span> SOLUTIONS 2024
        </p>
      </Row>
    </Container>
  );
};

export default FooterComponent;
