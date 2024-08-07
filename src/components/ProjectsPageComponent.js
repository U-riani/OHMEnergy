import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectsPageComponent = ({ projects }) => {
  console.log('projects-comp', projects)
  return (
    <Row className="projects-page-component-row">
      {projects.map((project, i) => (
        <div sm={6} md={6} lg={8} className={`projects-page-col projects-page-col-${i}`} key={i}>
          <div className="projects-page-col-inner-container">
            <div className="projects-page-image-container">
              <img
                src={project.imageSrc}
                className="projects-page-image"
                alt={project.name}
              />
            </div>
            <div className="projects-page-image-filter-div"></div>
            <Link to={`/projects/${project.name}`} className="projects-page-project-text-container">
              <div className="projects-page-projects-inner-container">
                <h4>{project.name}</h4>
                <h4>{project.kw}</h4>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default ProjectsPageComponent;
