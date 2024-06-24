import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ProjectPage = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  console.log(projects);

  const handleScroll = (e) => {
    const element = document.getElementById("9");
    if (element) {
      console.log(element.getBoundingClientRect(), window.scrollY);
    }
  };

  const handleClick = () => {
    const element = document.getElementById("9");
    if (element) {
      const yOffset = -70; // Adjust this value to match your navbar height
      const y =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Container>
      <Row>
        {projects.map((proj, i) => (
          <Col sm={12} key={i} id={i + 1} style={{ height: "500px" }}>
            <h1>{proj.name}</h1>
            <p>{proj.description}</p>
            <button onClick={handleClick}>scroll</button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectPage;
