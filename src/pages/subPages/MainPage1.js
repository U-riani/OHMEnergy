import React from "react";
import { Container, Image, Row, Col, NavLink } from "react-bootstrap";
import VideoComponent from "../../components/VideoComponent";
import { Link } from "react-router-dom";

const MainPage1 = () => {
  return (
    <Container fluid className="p-relative px-0 mx-0 video-page-container">
      <Row className="mx-0 w-100 h-100">
        <VideoComponent />
      </Row>
      <Row className="p-absolute-center mx-0">
        <div className="p-relative px-0">
          <div className="black-pattern p-absolute-center bg-black"></div>
          <div className="video-text p-absolute-center">
            <h1 className="text text-light fs-1">OHM ENERGY</h1>
            <hr />
            <NavLink href="/projects" className="text-light fs-3 border border-2 py-2 px-3">All Projects</NavLink>
            {/* <Link to={'/projects'}>All Projects</Link> */}
            {/* <p className="text text-light">describe 1</p>
            <p className="text text-light">describe 2</p>
            <p className="text text-light">describe 3</p> */}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default MainPage1;
