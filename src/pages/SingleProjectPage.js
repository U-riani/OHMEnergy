import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import MultiItemCarousel from "../components/MultiItemCarousel";
import useFilteredProjectsHook from "../hooks/useFilteredProjectsHook";

const SingleProjectPage = () => {
  const { projectId } = useParams();
  const project = useSelector((state) =>
    state.projects.find((proj) => proj.name === projectId)
  );
  const filteredProjects = useFilteredProjectsHook(project.type);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <Container fluid className="single-project-container">
      {project ? (
        <Row className="single-page-row-container">
          <Row className="single-page-row-1-inner-container">
            <div className="single-page-main-image-container">
              <img
                src={project.imageSrc}
                alt=""
                className="single-page-main-image"
              />
              <div className="single-page-main-image-layer"></div>
            </div>
            <div className="single-page-row-1-name-table-container">
              <div className="single-page-row-1-name-table-inner-container">
                <div className="single-page-row-1-name-container">
                  <h2>{project.name}</h2>
                </div>
                <div className="single-page-row-1-table-container">
                  <TableComponent project={project} />
                </div>
              </div>
            </div>
          </Row>
          <Row className="single-page-rows-container">
          <Row className="single-page-row single-page-row-2">
            <div className="single-page-description-container">
              <h5>Description</h5>
              <p>{project.description}</p>
            </div>
            <div className="single-page-video-container">
              <iframe
                
                src="https://www.youtube.com/embed/RAO_aOzBItE"
                title="Large scale solar power plant with the power of 3 MW | OHM ENERGY | Armenia #Solar #pv #OHM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Row>
          <Row className="single-page-row single-page-row-3">
            <Col className="single-page-row-3-col">
              <img src={project.imageSrc} alt="" />
            </Col>
          </Row>
          <Row className="single-page-carousel-row single-page-row">
            <h6>{project.type} projects</h6>
            <MultiItemCarousel projects={filteredProjects} />
          </Row>
          </Row>
        </Row>
      ) : (
        <Row>
          <div>not found</div>
        </Row>
      )}
    </Container>
  );
};

export default SingleProjectPage;
