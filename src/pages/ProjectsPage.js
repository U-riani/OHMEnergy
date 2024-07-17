import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ProjectsPageComponent from "../components/ProjectsPageComponent";
import useFilteredProjectsHook from "../hooks/useFilteredProjectsHook";

const ProjectPage = () => {
  
  const radios = [
    { name: "Large Scale", value: "large scale" },
    { name: "Comercial", value: "comercial" },
    { name: "Residential", value: "residential" },
  ];
  const [radioValue, setRadioValue] = useState("large scale");
  const filteredProjects = useFilteredProjectsHook(radioValue)
  
  
  const handleToggleClick = (e) => {
    setRadioValue(e.currentTarget.value);
    // projects.filter((project) => project.type === radioValue);
    // console.log(projects);
    // console.log(filteredProjects);
  };

  return (
    <Container fluid className="projects-page-container">
      <Row className="projects-page-row projects-page-row-1">
        <div className="projects-page-title">
          <h5>Our Projects</h5>
        </div>
      </Row>
      <Row className="projects-page-row projects-page-row-2">
        <ButtonGroup className="d-flex flex-column flex-sm-row px-0 projects-page-btn-group">
          {radios.map((radio, i) => (
            <ToggleButton
              key={i}
              id={`radio-${i}`}
              type="radio"
              // variant={idx % 2 ? "outline-success" : "outline-danger"}
              variant={""}
              name="radio"
              className={`text-dark projects-page-toggle-button ${
                radioValue === radio.value
                  ? "projects-page-toggle-button-selected"
                  : ""
              }`}
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => handleToggleClick(e)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Row>
      <Row className="projects-page-row projects-page-row-1">
        {filteredProjects && (
          <ProjectsPageComponent projects={filteredProjects} />
        )}
      </Row>
    </Container>
  );
};

export default ProjectPage;
