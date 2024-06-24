import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { geo, arm, usa, rus, logo } from "../images/flags/flags";

const NavbarComponent = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const handleHashChange = () => {
      const yOffset = -70; // Adjust this value to match your navbar height
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Scroll to hash on initial load
    if (location.hash) {
      handleHashChange();
    }

    // Add event listener for hashchange
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  return (
    <Navbar
      expand="xxl"
      className="bg-body-tertiary px-4 py-0 navbar-container"
      fixed="top"
    >
      <Container fluid className="h-100">
        <Navbar.Brand as={Link} to="/" className="h-100 me-0 py-0">
          <div className="logo-container">{logo}</div>
        </Navbar.Brand>
        <div className="lang-toggle-container w-10">
          <div className="contact-menu contact-menu-sm d-none d-sm-block">
            <Nav.Link
              as={Link}
              to="/contact"
              className="me-1 px-2 text-dark bg-warning"
            >
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
                    as={Link}
                    to="/contact"
                    className="w-75 mx-auto px-0 rounded-pill bg-warning text-dark"
                  >
                    Contact Us
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="px-0">
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link as={Link} to="/#projects">
                    PROJECTS
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#stats">
                    STATS
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#calculator">
                    CALCULATOR
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#partners">
                    PARTNERS
                  </Nav.Link>
                  <NavDropdown
                    title="SERVICES"
                    id="basic-nav-dropdown"
                    className="menu-drop-down-item"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="#action/3.1"
                      className="menu-drop-down-item"
                    >
                      Solar Installations
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="#action/3.2">
                      Modern Heating
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link as={Link} to="/#contact">
                    CONTACTS
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#blog">
                    BLOG
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#solar-calculator">
                    SOLAR CALCULATOR
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#about-us">
                    ABOUT US
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
