import React from "react";
import MapComponent from "../components/MapComponent";
import { Container, Row } from "react-bootstrap";
import ContactsFormComponent from "../components/ContactsFormComponent";

const ContactPage = () => {
  return (
    <Container fluid className="contact-page-container">
      <Row className="contact-page-row cpntact-page-row-forms-container">
        <ContactsFormComponent />
      </Row>
      <Row className="contact-page-row contact-page-row-map">
        <MapComponent />
      </Row>
    </Container>
  );
};

export default ContactPage;
