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

const Footer = () => {
  return (
    <Container fluid className="bg-secondary-subtle">
      <Row className="py-4 border-bottom px-5 footer-text-container">
        {/* <Col
          sm={6}
          lg={3}
          className="footer-text-col ps-sm-0 ps-md-5 ps-lg-0 px-md-0 mb-4 mb-md-0  order-sm-3 order-lg-0 pt-0 pt-sm-3 pt-lg-0"
        > */}
        <Col sm={6} md={6} lg={4} className="footer-text-col px-0">
          <div className="footer-map-inner-container">
            <div className="py-2">
              <h4 className="mb-3">Site Map</h4>
              <hr className="" />
            </div>
            <div className="footer-logo-menu-container">
              <div className="footer-logo-container pt-0">{logo}</div>
              <div className="footer-nav">
                <Nav className="footer-nav-inner">
                  <Nav.Link>PROJECTS</Nav.Link>
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
                        SERVICES
                      </Accordion.Header>
                      <Accordion.Body className="py-0 ps-2 pe-0 d-flex flex-column">
                        <Nav.Link className="pt-3 pe-0">Solar Install</Nav.Link>
                        <Nav.Link className=" pe-0">Modern Heating</Nav.Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Nav.Link>BLOG</Nav.Link>
                  <Nav.Link className="one-line-link">
                    SOLAR CALCULATOR
                  </Nav.Link>
                  <Nav.Link className="one-line-link">ABOUT US</Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
        </Col>
        <Col
          sm={3}
          md={3}
          lg={3}
          // className="footer-text-col ps-sm-0 ps-md-5 px-md-0 pe-sm-5 mb-4 mb-md-0 order-sm-1 order-lg-1 pt-3 pt-sm-0 ps-lg-0"
          className="footer-text-col px-0"
        >
          <div className="footer-text-inner-container ms-sm-0 me-md-5 me-lg-0 ">
          <div className="py-2 w-100">
              <h4 className="mb-3">Address</h4>
              <hr className="" />
            </div>
            <div className="footer-addres">
              <p>Sulkhan Tsintsadze st. 22</p>
              <p>Tbilisi, Georgia</p>
            </div>
          </div>
        </Col>
        <Col
          sm={6}
          lg={3}
          md={6}
          xxl={3}
          className="footer-text-col footer-working-hours-container px-0"
        >
          <div className="footer-text-inner-container">
          <div className="py-2">
              <h4 className="mb-3">Working Hours</h4>
              <hr className="" />
            </div>
            <p>Mon - Fri, 09:00 - 18:00</p>
            <p>Saturday, 10:00 - 17:00</p>
          </div>
        </Col>
        <Col sm={6} md={6} lg={2} className="footer-text-col footer-contact-container px-0">
          <div className="footer-text-inner-container">
          <div className="py-2 w-100">
              <h4 className="mb-3">Contact</h4>
              <hr className="" />
            </div>
          
            <div className="number-container footer-info-containers">
              <FontAwesomeIcon icon={faPhone} />
              <p className="fst-italic ps-3">+995 598 598 598</p>
            </div>
            <div className="mail-container footer-info-containers">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="fst-italic ps-3">ohmenergy@info.ge</p>
            </div>
          </div>
        </Col>
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
            <div className="footer-icon-inner-container p-3">
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
          © <span className="text-warning">Ohm Energy</span> Solutions 2024
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
