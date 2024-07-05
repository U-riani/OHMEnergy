import React from "react";
import { Accordion,  Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { logo } from "../images/flags/flags";
import "../footer.css";
import { Link } from "react-scroll";

const FooterComponent = () => {
  return (
    <Container
      fluid
      className="footer d-flex flex-column justify-content-center align-center px-0 py-5"
    >
      <Container fluid className="footer-inner-container">
        <Row className=" border-bottom ">
          <div className="footer-menu-info-container ">
            <div className="footer-site-map-container">
              <div className="footer-site-map-title-container">
                <h4>Site Map</h4>
                <hr />
              </div>
              <div className="footer-site-map-logo-menu-container">
                {/* <div className="footer-site-map-logo-container">
                <div className="footer-site-map-logo-container">
                  <div className="footer-site-map-logo-inner-container pt-0">
                    {logo}
                  </div>
                </div>
              </div> */}
                <div className="footer-site-map-menu-container">
                  <Nav className="footer-nav-inner">
                    <Nav.Link>
                      <p>ABOUT US</p>
                    </Nav.Link>
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
                          <p>OUR PROJECTS</p>
                        </Accordion.Header>
                        <Accordion.Body className="py-0 ps-2 pe-0 d-flex flex-column">
                          <Nav.Link className="py-0 pe-0">
                            <p>LARGE SCALE</p>
                          </Nav.Link>
                          <Nav.Link className=" pe-0">
                            <p>COMMERCIAL</p>
                          </Nav.Link>
                          <Nav.Link className=" pe-0">
                            <p>RESIDENTIALL</p>
                          </Nav.Link>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Nav.Link>
                      <p>BLOG</p>
                    </Nav.Link>
                    <Nav.Link className="one-line-link">
                      <p>PARTNERS</p>
                    </Nav.Link>
                    <Nav.Link className="one-line-link">
                      <p>SOLAR CALCULATOR</p>
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
              <div className="footer-site-map-p-container footer-site-map-address-text-container pb-4">
                <p>11a Paliashvili Street</p>
                <p>Tbilisi, Georgia</p>
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
            </div>
              <div className="footer-contact-menu-container">
                <div className="footer-site-map-title-container">
                  <h4>Contact</h4>
                  <hr />
                </div>
                <div className="footer-site-map-p-container footer-site-map-contact-text-container">
                  <div className="footer-site-map-contact-info-container footer-site-map-contact-number-container">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="ps-3 text-center">+995 32 280 00 33</p>
                  </div>
                  <div className="footer-site-map-contact-info-container footer-site-map-contact-mail-container">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="ps-3 text-center">info@ohmenergy.ge</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center pb-2">
                  <h3>Follow us</h3>
                </div>
                <div className="follow-us">
                  <div className="footer-icons d-flex justify-content-center gap-3">
                    <div className="footer-icon-inner-container">
                      <Link to="facebook">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="icon-size"
                          size="2x"
                        />
                      </Link>
                    </div>
                    <div className="footer-icon-inner-container">
                      <Link to="instagram">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="icon-size"
                          size="2x"
                        />
                      </Link>
                    </div>
                    <div className="footer-icon-inner-container">
                      <Link to="linkdin">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="icon-size"
                          size="2x"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            {/* <div className="footer-site-map-"></div> */}
          </div>
        </Row>
        {/*<Row className="footer-social-media-container">
           <Col sm={12} className="text-center pb-2">
          <h3>Follow us</h3>
        </Col>
        <Col sm={12}>
          <div className="footer-icons d-flex justify-content-center gap-3">
            <div className="footer-icon-inner-container">
              <Link to='facebook'>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon-size"
                size="2x"
              />
              </Link>
            </div>
            <div className="footer-icon-inner-container">
              <Link to='instagram'>
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon-size"
                size="2x"
              />
              </Link>
            </div>
            <div className="footer-icon-inner-container">
              <Link to='linkdin'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon-size"
                size="2x"
              />
              </Link>
            </div>
          </div>
        </Col> 
        </Row>*/}
        <Row className="pt-4">
          <p className="text-center mb-0">
            © <span className="text-warning pe-2">OHM ENERGY </span> SOLUTIONS
            2024
          </p>
        </Row>
      </Container>
    </Container>
  );
};

export default FooterComponent;
