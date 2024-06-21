import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-secondary-subtle">
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
      <Row className="py-4 border-bottom px-5 footer-text-container">
        <Col
          md={4}
          lg={3}
          className="footer-text-col ps-5 px-md-0 mb-4 mb-md-0"
        >
          <div className="footer-text-inner-container ">
            <h4 className="pb-2">Addres</h4>
            <br />
            <p>Sulkhan Tsintsadze st. 22</p>
            <br />
            <p>Tbilisi, Georgia</p>
          </div>
        </Col>
        <Col
          md={4}
          lg={3}
          className="footer-text-col ps-5 px-md-0 mb-4 mb-md-0"
        >
          <div className="footer-text-inner-container">
            <h4 className="pb-2">Working hours</h4>
            <br />
            <p>Mon - Fri, 09:00 - 18:00</p>
            <br />
            <p>Saturday, 10:00 - 17:00</p>
          </div>
        </Col>
        <Col md={4} lg={3} className="footer-text-col ps-5 px-md-0 ">
          <div className="footer-text-inner-container">
            <h4 className="pb-2">Contact</h4>
            <br />
            <div className="number-container footer-info-containers">
              <FontAwesomeIcon icon={faPhone} />
              <p className="fst-italic ps-3">+995 598 598 598</p>
            </div>
            <br />
            <div className="mail-container footer-info-containers">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="fst-italic ps-3">ohmenergy@info.ge</p>
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
