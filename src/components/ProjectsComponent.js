import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProjectsComponent = () => {
  const projects = [
    { name: "project-1", src: require("../images/projects/project-1.jpg") },
    { name: "project-2", src: require("../images/projects/project-2.jpg") },
    { name: "project-3", src: require("../images/projects/project-1.jpg") },
    { name: "project-4", src: require("../images/projects/project-2.jpg") },
    { name: "project-5", src: require("../images/projects/project-1.jpg") },
    { name: "project-6", src: require("../images/projects/project-2.jpg") },
  ];

  return (
    <Container fluid className="pt-4 pt-0">
      <Row className="py-5 d-flex justify-content-evenly mx-0 px-0">
        {projects.map((proj, i) => (
          <Col sm={4} className="mb-5 " key={i + 1}>
            <Card className="border-0  rounded-0 projects-card-container" >
              <Card.Img variant="top" src={proj.src} className={`project-img project-img-${i + 1} rounded-0`}/>
              <div className="project-img-after"></div>
              <Card.Body className="projects-body-container  border-0">
                <Card.Title className="">Card Title</Card.Title>
                <Card.Text className="">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              {/* <Card.Body className="border border-top-0 border-warning">
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
