import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container fluid className="">
      <Row className="bg-body-secondary py-4">
        <Col sm={12} className="text-center">
          <h3>Follow us</h3>
        </Col>
        <Col sm={12}>
          <div className="footer-icons d-flex justify-content-center gap-3">
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon icon={faFacebookF} className="icon-size" />
            </div>
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon icon={faInstagram} className="icon-size" />
            </div>
            <div className="footer-icon-inner-container bg-body-tertiary p-3">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-size" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="py-4 border-bottom px-5 ">
        <Col sm={4}>
          <div className="footer-text-inner-container">
            <h4>Addres</h4>
            <p>Sulkhan Tsintsadze st. 22</p>
            <p>Tbilisi, Georgia</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="footer-text-inner-container">
            <h4>Working hours</h4>
            <p>Mon - Fri, 09:00 - 18:00</p>
            <p>Saturday, 10:00 - 17:00</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="footer-text-inner-container">
            <h4>Contact</h4>
            <p>+995 598 598 598</p>
            <p>ohmenergy@info.ge</p>
          </div>
        </Col>
      </Row>
      <Row className="py-4">
        <p className="text-center">© Ohm Energy Solutions 2024</p>
      </Row>
    </Container>
  );
};

export default Footer;
