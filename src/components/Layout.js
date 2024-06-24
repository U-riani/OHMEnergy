// src/components/Layout.js
import React from "react";
import Navbar from "./NavbarComponent";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="px-0 App">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
