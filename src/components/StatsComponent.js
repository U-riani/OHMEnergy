import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const StatsComponent = () => {
  const images = [
    {
      name: "svg1",
      src: require("../images/stats/icons-03.png"),
    },
    {
      name: "svg2",
      src: require("../images/stats/icons-02.png"),
    },
    {
      name: "svg3",
      src: require("../images/stats/icons-01.png"),
    },
  ];
  return (
    <Container fluid className="mt-0 pt-0 stats-container">
      <Row className="bg-dark text-light pt-4 pb-2">
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container  w-100 pb-3 pt-3">
            <Image src={images[0].src} className=""/>
            <div className="stats-text-container pt-2">
              <h2>3</h2>
              <p>Countries</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container w-100 pb-3 pt-3">
          <Image src={images[1].src} />
          <div className="stats-text-container pt-2">
              <h2>1000+</h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container w-100 pb-3 pt-3">
          <Image src={images[2].src} />
          <div className="stats-text-container pt-2">
              <h2>70+</h2>
              <p>mWh Produced</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsComponent;
