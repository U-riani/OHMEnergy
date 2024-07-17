import React from "react";
import { Container, Row } from "react-bootstrap";

import MultiItemCarousel from "./MultiItemCarousel";
import { useSelector } from "react-redux";

const ProjectsComponent = () => {
  const projects = useSelector(state => state.projects)

  return (
    <Container fluid className="py-5 projects" >
      <Row className="projects-container py-0 d-flex justify-content-evenly mx-0 px-0">
        <MultiItemCarousel projects={projects} />
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
