// src/components/Layout.js
import React from "react";
import Navbar from "./NavbarComponent";
// import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";
// import FacebookChat from "./FacebookChat";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container fluid className=" App">
        <Outlet />
      </Container>
      {/* <Footer /> */}
      {/* <FacebookChat /> */}
      {<FooterComponent />}
    </>
  );
};

export default Layout;
