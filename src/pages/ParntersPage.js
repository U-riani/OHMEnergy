import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Partner11 from "../images/partners/partner-11";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const PartnersPage = () => {
  const partners = useSelector((state) => state.partners);
  console.log(partners);

  return (
    <Container fluid className="partners-page-container">
      <h4 className="partners-page-title">Our partners</h4>
      {partners &&
        partners.map((partner, i) => (
          <Row className="partners-page-row" key={i}>
            <Col sm={3} className="partners-page-col">
              <div className="partners-page-img-container">
                <div className="partners-page-img-inner-container">
                    {partner.name === 'AEG' ? <Partner11 /> : <Image src={partner.logo} className="partners-page-img" />}
                  
                </div>
              </div>
            </Col>
            <Col sm={9} className="partners-page-text-col">
              <div className="partners-page-text-container">
                <div className="partners-page-title-container">
                  <h5>{partner.name}</h5>
                </div>
                <div className="partners-page-paragraph-container">
                  <p>{partner.paragraph}</p>
                </div>
              </div>
              <div className="partners-page-flag-name-container">
                <div className="partners-page-flag-container">
                  <img src={partner.flag} alt=""/>
                </div>
                <div className="partners-page-partner-name">
                  <div className="partners-page-globe-container">
                  <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <h5 >{partner.name}</h5>
                </div>
              </div>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default PartnersPage;
