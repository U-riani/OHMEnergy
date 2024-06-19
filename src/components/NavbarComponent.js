import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { geo, arm, usa, rus, logo } from "../images/flags/flags";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  // const geo1 = (
  //   geo
  // );
  return (
    <>
      <Navbar
        expand="xxl"
        className="bg-body-tertiary px-4 py-0 navbar-container"
      >
        <Container fluid className="h-100 ">
          <Navbar.Brand href="/" className="h-100 me-0  py-0 ">
            <div className="logo-container">{logo}</div>
          </Navbar.Brand>
          {/* <div className="contact-container">
            <Nav.Link href="/contact" className="btn btn-outline-success">Contact Us</Nav.Link>
          </div> */}
          <div className="lang-toggle-container w-10">
              <div className="contact-menu contact-menu-sm d-none d-sm-block ">
                <Nav.Link className="me-1 px-2 text-dark bg-warning ">Contact Us</Nav.Link>
              </div>
            <div className="lang-container">
              <NavDropdown
                title={geo}
                id="basic-nav-dropdown"
                className="flags-drop-down-item ps-0"
              >
                {/* <NavDropdown.Item className="menu-drop-down-item"></NavDropdown.Item> */}
                <NavDropdown.Divider className="w-100" />
                <NavDropdown.Item className="w-25 px-1">{arm}</NavDropdown.Item>
                <NavDropdown.Divider className="w-100" />
                <NavDropdown.Item className="w-25 px-1">{usa}</NavDropdown.Item>
                <NavDropdown.Divider className="w-100" />
                <NavDropdown.Item className="w-25 px-1">{rus}</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="menu-toggle-container">
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-sm`}
              className="border-0 close-open-menu"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
              className="offcanvas-menu"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-sm`}
                  className="w-100 text-center"
                >
                  <Nav.Link
                    href="/contact"
                    className="w-75 mx-auto px-0 rounded-pill bg-warning text-dark"
                  >
                    Contact Us
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="px-0">
                <Nav className="justify-content-end flex-grow-1 ">
                  <Nav.Link href="#action1">PROJECTS</Nav.Link>

                  <NavDropdown
                    title="SERVICES"
                    id="basic-nav-dropdown"
                    className="menu-drop-down-item"
                  >
                    
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="menu-drop-down-item"
                    >
                      Solar Installisations
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Modern Heatting
                    </NavDropdown.Item>
                    <NavDropdown.Divider  />
                  </NavDropdown>
                  <NavDropdown title="SOLUTIONS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Solar PV plants
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Mounting systems
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown title="PRODUCTIONS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Solar modules
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Solar inverters
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Connectors
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Electrical heaters
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link href="#action2">FUNDING</Nav.Link>
                  <Nav.Link href="#action2">SERVICES</Nav.Link>
                  <Nav.Link href="#action2">CONTACTS</Nav.Link>
                  <Nav.Link href="#action2">BLOG</Nav.Link>
                  <Nav.Link href="#action2">SOLAR CALCULATOR</Nav.Link>
                  <Nav.Link href="#action2">ABOUT US</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
