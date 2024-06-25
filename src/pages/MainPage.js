import React from "react";
import { Container } from "react-bootstrap";
import MainPage1 from "./subPages/MainPage1";
import Calculator from "../components/CalculatorComponent";
import Partners from "../components/Partners";
import ProjectsComponent from "../components/ProjectsComponent";
import StatsComponent from "../components/StatsComponent";

const MainPage = () => {
  return (
    <Container fluid className="px-0 main-page">
      <div id="mainpage1">
        <MainPage1 />
      </div>
      <div id="stats">
        <StatsComponent />
      </div>
      <div id="calculator">
        <Calculator />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="projects">
        <ProjectsComponent />
      </div>
    </Container>
  );
};

export default MainPage;
