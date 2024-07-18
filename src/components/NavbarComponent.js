import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { geo, arm, usa, rus, logo } from "../images/flags/flags";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHourglassHalf, faSolarPanel, faHouse } from "@fortawesome/free-solid-svg-icons";

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
      expand="lg"
      className="bg-body-tertiary py-0 navbar-container mb-0 pb-0 px-0"
      fixed="top"
    >
      <Container fluid className="h-100 navbar-inner-container">
        <Navbar.Brand as={Link} to="/" className="h-100 me-0 py-0">
          <div className="logo-container">{logo}</div>
        </Navbar.Brand>
        <div className="lang-toggle-container">
          <div className="contact-menu contact-menu-sm d-none d-sm-block">
            <Nav.Link
              as={Link}
              to="/contact"
              className="me-0 py-2 px-3 text-dark contact-us-button"
            >
              Contact Us
            </Nav.Link>
          </div>
          <div className="lang-container">
            <NavDropdown
              title={geo}
              id="basic-nav-dropdown"
              className="flags-drop-down-item ps-0 "
            >
              <NavDropdown.Divider className="w-100" />
              <NavDropdown.Item className="w-25 px-1">{arm}</NavDropdown.Item>
              <NavDropdown.Divider className="w-100" />
              <NavDropdown.Item className="w-25 px-1">{usa}</NavDropdown.Item>
              <NavDropdown.Divider className="w-100" />
              <NavDropdown.Item className="w-25 px-1">{rus}</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="menu-toggle-container px-xxl-0">
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              className="border-0 close-open-menu"
            />
            <Navbar.Offcanvas
            scroll={true}
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
              className="offcanvas-menu "
            >
              <Offcanvas.Header
                closeButton
                className="offcanvas-header-background-color"
              >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-sm`}
                  className="w-100 text-center"
                >
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className="w-75 mx-auto px-0 rounded-0 offcanvas-contact"
                  >
                    Contact Us
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="px-3 px-lg-0 offcanvas-body-background-color">
                <Nav className="offcanvas-full-navbar flex-grow-1">
                  <Nav.Link as={Link} to="/about-us">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link as={Link} to="/projects">
                    PROJECTS
                  </Nav.Link>
                  {/* <NavDropdown
                    title="OUR PROJECTS"
                    id="basic-nav-dropdown"
                    className="menu-drop-down-item navbar-drop-down-1400px"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="large-scale"
                      className="menu-drop-down-item menu-drop-down-item-container"
                    >
                      <FontAwesomeIcon icon={faHourglassHalf} className="navbar-dropdown-icon"/>
                      <p>Large Scale</p>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="comercial" className="menu-drop-down-item-container">
                    <FontAwesomeIcon icon={faSolarPanel} className="navbar-dropdown-icon"/><p>Comercial</p>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="residential"
                      className="menu-drop-down-item menu-drop-down-item-container"
                    >
                      <FontAwesomeIcon icon={faHouse} className="navbar-dropdown-icon" /><p>Residential</p>
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <Nav.Link as={Link} to="/blog">
                    BLOG
                  </Nav.Link> */}

                  <Nav.Link as={Link} to="/partners">
                    PARTNERS
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#calculator">
                  SOLAR CALCULATOR
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
