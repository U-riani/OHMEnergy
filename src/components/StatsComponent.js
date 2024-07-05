import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const StatsComponent = () => {
  const images = [
    {
      name: "svg1",
      src: require("../images/stats/icon-1.png"),
    },
    {
      name: "svg2",
      src: require("../images/stats/icon-2.png"),
    },
    {
      name: "svg3",
      src: require("../images/stats/icon-3.png"),
    },
  ];
  return (
    <Container fluid className="mt-0 pt-0 stats-container py-0">
      <Row className="bg-dark text-light  stats-row-contaier py-4">
        <div  className="d-flex justify-content-center stats-icons-text-container">
          <div className="stats-inner-container ">
            <Image src={images[0].src} className=""/>
            <div className="stats-text-container pt-2">
              <h2>3</h2>
              <p>Countries</p>
            </div>
          </div>
        </div>
        <div  className="stats-icons-text-container d-flex justify-content-center">
          <div className="stats-inner-container w-100 ">
          <Image src={images[1].src} />
          <div className="stats-text-container pt-2">
              <h2>2500+</h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div  className=" stats-icons-text-container d-flex justify-content-center">
          <div className="stats-inner-container ">
          <Image src={images[2].src} />
          <div className="stats-text-container pt-2">
              <h2>70+</h2>
              <p>mWh Produced</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default StatsComponent;
