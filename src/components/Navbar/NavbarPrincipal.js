import React from "react";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import Curriculum from "../Descargas/CV-MarcelCarrillo.pdf";
import "./NavbarPrincipal.scss"

export const NavbarPrincipal = ({ showContact, setShowContact }) => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/marcel-carrillo/");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Marcel-Carrillo");
  };

  return (
    <Row>
      <Col>
        <Navbar bg="light" variant="light" className="navbar" expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="md m-2">
            <Nav className="me-auto">
              <Nav.Link className="enlacesNav" href="#Inicio" >
                Home
              </Nav.Link>
              <Nav.Link className="enlacesNav" href="#Tecnologias" >
                Tecnologias
              </Nav.Link>
              <Nav.Link className="enlacesNav" href="#Proyectos" >
                Proyectos
              </Nav.Link>
              <Nav.Link
                className="enlacesNav"
                href={Curriculum}
                download="CV-MarcelCarrillo.pdf"
              >
                Download CV
              </Nav.Link>
              <Nav.Link className="enlacesNav" href="#Sobremi">
                Sobre mí
              </Nav.Link>
            </Nav>
            <Nav>
              <img
              alt="alt"
                className="imgnav"
                src="linkedIn.png"
                onClick={handleLinkedInClick}
              />
              <img
              alt="alt"
                className="imgnav"
                src="github.png"
                onClick={handleGithubClick}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
