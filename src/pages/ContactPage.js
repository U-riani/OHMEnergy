import React from "react";
import MapComponent from "../components/MapComponent";
import { Col, Container, Row } from "react-bootstrap";
import ContactsFormComponent from "../components/ContactsFormComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <Container fluid className="contact-page-container">
      <Row className="contact-page-row contact-page-row-title">
        <h4>Contact page</h4>
      </Row>
      <Row className="contact-page-row contact-page-row-info">
        <Col sm={6} className="contact-page-adress-col">
          <div className="contact-page-adress-inner-container">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="location-icon"
            />
            <div className="map-page-adress-working-hours">
              <h6>Tbilisi, Zakaria Paliashvili st. #11A</h6>
              <p className="mb-0">Mon - Fri, 10:00 - 19:00</p>
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
        </Col>
        <Col sm={6} className="contact-page-map-col">
          <MapComponent />
        </Col>
      </Row>
      {/* <Row className="contact-page-row contact-page-row-map">
        <MapComponent />
      </Row> */}
      <Row className="contact-page-row cpntact-page-row-forms-container">
        <h4 className="text-center pb-3">Send us Email</h4>
        <ContactsFormComponent />
      </Row>
    </Container>
  );
};

export default ContactPage;
