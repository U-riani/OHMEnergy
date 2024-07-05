// src/components/Layout.js
import React from "react";
import Navbar from "./NavbarComponent";
// import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container fluid className=" App">
        <Outlet />
      </Container>
      {/* <Footer /> */}
      {<FooterComponent />}
    </>
  );
};

export default Layout;
