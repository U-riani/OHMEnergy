import React from "react";
import {
  
  Container,
 
  Row,
  
} from "react-bootstrap";

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
    <Container fluid className="py-5 border-top bg-light" id="projects">
      <Row className="py-5 d-flex justify-content-evenly mx-0 px-0 projects-container pt-5">
        {/* {projects.map((proj, i) => (
          <Col sm={4} className="mb-5 " key={i + 1}>
            <Link to={`projects/${proj.name}`}>
              <Card className="border-0  rounded-0 projects-card-container">
                <Card.Img
                  variant="top"
                  src={proj.src}
                  className={`project-img project-img-${i + 1} rounded-0`}
                />
                <div className="project-img-after"></div>
                <Card.Body className="projects-body-container  border-0">
                  <Card.Title className="">Card Title</Card.Title>
                  <Card.Text className="">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                
              </Card>
            </Link>
          </Col>
        ))} */}
        {/* <Carousel className="h-100 bg-dark" >
          <Carousel.Item>
            <Image src={projects[0].src}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={projects[1].src}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={projects[0].src}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={projects[1].src}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={projects[0].src}/>
          </Carousel.Item>
          
        </Carousel> */}
        <MultiItemCarousel projects={projects}/>
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
