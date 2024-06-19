import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import newSvg from '../images/stats/newSvg'

const StatsComponent = () => {
  return (
    <Container fluid className="mt-0 mt-5">
      <Row className="bg-dark text-light">
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container border-end w-100">
           {/* {newSvg} */}
            {/* <img src={warranty}  alt="Warranty Icon" />  Use the correct variable name */}
          </div>
          {/* <div className="divider divider-1 ms-auto"></div> */}
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container border-end w-100">scsac</div>
          {/* <div className="divider divider-1 ms-auto"></div> */}
        </Col>
        <Col sm={4} className="d-flex justify-content-center">
          <div className="stats-inner-container">scsac</div>
          {/* <div className="divider divider-1 ms-auto"></div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default StatsComponent;
