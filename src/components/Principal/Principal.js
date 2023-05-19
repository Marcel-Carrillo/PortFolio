import { React, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Principal.scss";

import { NavbarPrincipal } from "../Navbar/NavbarPrincipal";

export const Principal = () => {
  const [mensaje, setMensaje] = useState("");
  const [showContact, setShowContact] = useState(false);

  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendEmail(mensaje)
    console.log("Mensaje enviado:", mensaje);
    setMensaje("");
  };

  const handleGithubClickCalc = () => {
    window.open("https://github.com/Marcel-Carrillo/Calculadora");
  };
  const handleGithubClickInsta = () => {
    window.open("https://github.com/Marcel-Carrillo/Prueba-Instagram");
  };
  const handleGithubClickAll = () => {
    window.open("https://github.com/Marcel-Carrillo/AllCinema");
  };
  const handleGithubClickViajes = () => {
    window.open("https://github.com/Marcel-Carrillo/Viajes.git");
  };
  const handleGithubClickBiobuk = () => {
    window.open("https://github.com/Marcel-Carrillo/Biobuk");
  };

  const frontEnd = ["react.png", "javascript.png", "typescript.png"];
  const backEnd = ["node.png", "express.png", "mysql.png"];
  const diseño = [
    "html5.png",
    "css3.png",
    "sass.png",
    "bootstrap.png",
    "flexbox.png",
  ];
  const desarrollo = ["vscode.png", "terminal.png"];
  const trabajo = ["github.png", "teams.png", "slack.png", "discord.png"];
  const metodologias = ["agile.png", "scrum.png"];

  return (
    <>
      <NavbarPrincipal
        setShowContact={setShowContact}
        showContact={showContact}
      />
      {/* {showContact && (
        <Row>
          <Col>
            <h1 className="h1contact">Contacto</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control
                  className="p-0"
                  as="textarea"
                  rows={3}
                  value={mensaje}
                  onChange={handleChangeMensaje}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      )} */}
      <div className="bodyPrincipal p-0">
        <Row className="m-0">
          <Col xs={12} md={12} lg={12} className="text-center coltitulo">
            <h1 className="titulo">Mi nombre es Marcel Carrillo</h1>
          </Col>
          <Col xs={1} md={2} lg={1}></Col>
          <Col xs={10} md={8} lg={10} className="text-center">
            <div className="divfront">
              <p>
                Soy un apasionado de la tecnologia , estoy ahora inmerso en el
                mundo de la programacion y el desarrollo web, por fin he dado
                con lo que realmente me gusta que es la programacion, he estado
                trabajando muchos años en temas tecnologicos y espero que
                disfruteis viendo mi web.
              </p>
            </div>
          </Col>
          <Col xs={1} md={2} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} md={12} lg={12} className="text-center">
            <h1>Tecnologias</h1>
          </Col>
          <Col xs={2} md={2} lg={1}></Col>
          <Col xs={8} md={8} lg={10} className="text-center divfront">
            <p>
              Por ahora estas son las tecnologias que he aprendido y en las que
              sigo profundizando
            </p>
          </Col>
          <Col xs={2} md={2} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="text-center">
            <h1 className="h1Front">Front-end</h1>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
          <Col
            xs={8}
            md={10}
            lg={10}
            className="d-flex flex-column flex-md-row divfront"
          >
            {frontEnd.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="text-center">
            <h1>Back-end</h1>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
          <Col
            xs={8}
            md={10}
            lg={10}
            className="d-flex flex-column flex-md-row divfront"
          >
            {backEnd.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
        </Row>
        <Row className="justify-content-center m-0">
          <Col xs={12} className="text-center">
            <h1>Diseño y maquetación</h1>
          </Col>
          <Col xs={1} md={1} lg={1}></Col>
          <Col
            xs={10}
            md={10}
            lg={10}
            className="d-flex flex-column flex-md-row divfront"
          >
            {diseño.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={1} md={1} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="text-center">
            <h1>Herramientas de desarrollo</h1>
          </Col>
          <Col xs={3} md={2} lg={2}></Col>
          <Col
            xs={6}
            md={8}
            lg={8}
            className="d-flex flex-column flex-md-row divfront"
          >
            {desarrollo.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={3} md={2} lg={2}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="text-center">
            <h1>Trabajo en equipo y comunicacion</h1>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
          <Col
            xs={8}
            md={10}
            lg={10}
            className="d-flex flex-column flex-md-row divfront"
          >
            {trabajo.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="text-center">
            <h1>Metodologias de trabajo</h1>
          </Col>
          <Col xs={3} md={2} lg={2}></Col>
          <Col
            xs={6}
            md={8}
            lg={8}
            className="d-flex flex-column flex-md-row divfront"
          >
            {metodologias.map((technology, index) => (
              <div className="divimg" key={index}>
                <img
                  className="imgtech mx-auto d-block text-center"
                  src={technology}
                  alt={technology}
                />
                <span className="spanhov">
                  {technology.replace(".png", "").toUpperCase()}
                </span>
              </div>
            ))}
          </Col>
          <Col xs={3} md={2} lg={2}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} md={12} lg={12} className="text-center">
            <h1 className="titulo">Mis proyectos</h1>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
          <Col xs={8} md={10} lg={10} className="text-center divfront">
            <p>
              Estos son los proyectos que he realizado durante mi formacion y
              tambien algunas pruebas tecnicas que he realizado a posteriori.
            </p>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front">
            <h1>Calculadora</h1>
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
          <Col xs={10} md={10} lg={6} className="d-flex flex-column divfront">
            <img
              className="imgnav"
              src="github.png"
              onClick={handleGithubClickCalc}
            />
            <img className="imgpro" src="calculadora.png" />
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front">
            <h1>Copia Instagram</h1>
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
          <Col xs={10} md={10} lg={6} className="d-flex flex-column divfront">
            <img
              className="imgnav"
              src="github.png"
              onClick={handleGithubClickInsta}
            />
            <img className="imgpro" src="instagram.png" />
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front">
            <h1>Proyecto club de cine</h1>
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
          <Col xs={10} md={10} lg={6} className="d-flex flex-column divfront">
            <img
              className="imgnav"
              src="github.png"
              onClick={handleGithubClickAll}
            />
            <img className="imgpro" src="allcinema.png" />
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front">
            <h1>Proyecto red social de viajes</h1>
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
          <Col xs={10} md={10} lg={6} className="d-flex flex-column divfront">
            <img
              className="imgnav"
              src="github.png"
              onClick={handleGithubClickViajes}
            />
            <img className="imgpro" src="viajes.png" />
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front">
            <h1>MVP Biobuk</h1>
          </Col>
          <Col xs={1} md={1} lg={3}></Col>
          <Col xs={10} md={10} lg={6} className="d-flex flex-column divfront">
            <img
              className="imgnav"
              src="github.png"
              onClick={handleGithubClickBiobuk}
            />
            <img className="imgpro" src="biobuk.png" />
          </Col>
          <Col xs={1} md={1} lg={3} className="paddinggg"></Col>
        </Row>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </>
  );
};
