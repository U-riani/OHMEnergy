import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { geo, arm, usa, rus, logo } from "../images/flags/flags";

const NavbarComponent = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const yOffset = -70; // Adjust this value to match your navbar height
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    // Add event listener for hashchange and initial load
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="xxl"
        className="bg-body-tertiary px-4 py-0 navbar-container"
        fixed="top"
      >
        <Container fluid className="h-100">
          <Navbar.Brand href="/" className="h-100 me-0 py-0">
            <div className="logo-container">{logo}</div>
          </Navbar.Brand>
          <div className="lang-toggle-container w-10">
            <div className="contact-menu contact-menu-sm d-none d-sm-block">
              <Nav.Link className="me-1 px-2 text-dark bg-warning">
                Contact Us
              </Nav.Link>
            </div>
            <div className="lang-container">
              <NavDropdown
                title={geo}
                id="basic-nav-dropdown"
                className="flags-drop-down-item ps-0"
              >
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
                  <Nav className="justify-content-end flex-grow-1">
                    <Nav.Link href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link href="#stats">STATS</Nav.Link>
                    <Nav.Link href="#calculator">CALCULATOR</Nav.Link>
                    <Nav.Link href="#partners">PARTNERS</Nav.Link>
                    <NavDropdown
                      title="SERVICES"
                      id="basic-nav-dropdown"
                      className="menu-drop-down-item"
                    >
                      <NavDropdown.Item
                        href="#action/3.1"
                        className="menu-drop-down-item"
                      >
                        Solar Installations
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">
                        Modern Heating
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link href="#contact">CONTACTS</Nav.Link>
                    <Nav.Link href="#blog">BLOG</Nav.Link>
                    <Nav.Link href="#solar-calculator">SOLAR CALCULATOR</Nav.Link>
                    <Nav.Link href="#about-us">ABOUT US</Nav.Link>
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
