import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const LargeScaleProjectsComponent = ({ projects }) => {
  // console.log(projects);
  return (
    <Row className="projects-page-component-row">
      {projects.map((project, i) => (
        <div to={`projects/1`} sm={6} md={6} lg={8} className={`projects-page-col`} key={i}>
          <div className="projects-page-col-inner-container">
            <div className="projects-page-image-container">
              <img
                src={project.imageSrc}
                className="projects-page-image"
                alt=""
              />
            </div>
            <div className="projects-page-image-filter-div"></div>
            <Link to={`/projects/${project.name}`} className="projects-page-project-text-container">
              <div className="projects-page-projects-inner-container">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default LargeScaleProjectsComponent;
