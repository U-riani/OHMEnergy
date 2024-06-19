import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoComponent = () => {
  return (
    <Container fluid className="px-0 mx-0 video-page-inner-container">
      <Row className="justify-content-center mx-0 h-100">
        <div className="video-container px-0 mx-0">
          <video autoPlay loop muted className="h-100">
            <source
              src={require("../images/video/video.mp4")}
              type="video/mp4"
              className="object-fit-cover w-100"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Row>
    </Container>
  );
};

export default VideoComponent;
