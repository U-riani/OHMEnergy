import React from "react";
import { Container, Row } from "react-bootstrap";

import MultiItemCarousel from "./MultiItemCarousel";

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
    <Container fluid className="py-5 border-top" id="projects">
      <Row className="projects-container py-0 d-flex justify-content-evenly mx-0 px-0">
        <MultiItemCarousel projects={projects} />
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
