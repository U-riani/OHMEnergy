import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const StatsComponent = () => {
  const images = [
    {
      name: "svg4",
      src: require("../images/stats/icons-04.png"),
    },
    {
      name: "svg5",
      src: require("../images/stats/icons-05.png"),
    },
    {
      name: "svg6",
      src: require("../images/stats/icons-06.png"),
    },
  ];
  return (
    <Container fluid className="mt-0 mt-5 stats-container">
      <Row className="bg-dark text-light pt-4 pb-2">
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container  w-100 pb-3 pt-3">
            <Image src={images[0].src} className=""/>
            <div className="stats-text-container pt-2">
              <h6>15 YEARS</h6>
              <p>Product quality Warranty</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container w-100 pb-3 pt-3">
          <Image src={images[1].src} />
          <div className="stats-text-container pt-2">
              <h6>25 YEARS</h6>
              <p>Performance Warranty</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container w-100 pb-3 pt-3">
          <Image src={images[2].src} />
          <div className="stats-text-container pt-2">
              <h6>10 YEARS</h6>
              <p>Inverter Warranty</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsComponent;
