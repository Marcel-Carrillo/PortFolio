import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Principal.scss";
import { NavbarPrincipal } from "../Navbar/NavbarPrincipal";

export const Principal = () => {
  const [showContact, setShowContact] = useState(false);

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
        <Row className="m-0" id="Inicio">
          <Col xs={12} md={12} lg={12} className="text-center coltitulo">
            <h1 className="titulo">Soy Marcel Carrillo</h1>
          </Col>
          <Col xs={1} md={2} lg={1}></Col>
          <Col xs={10} md={8} lg={10} className="text-center">
            <div className="divfront">
              <p>
                Un apasionado de la tecnología , estoy ahora inmerso en el
                mundo de la programación y el desarrollo web, por fin he dado
                con lo que realmente me gusta que es la programación, he estado
                trabajando muchos años en temas tecnológicos y espero que
                disfruteis viendo mi espacio WEB.
              </p>
            </div>
          </Col>
          <Col xs={1} md={2} lg={1}></Col>
        </Row>
        <Row className="m-0" id="Tecnologias">
          <Col xs={12} md={12} lg={12} className="text-center">
            <h1 className="titulo">Tecnologías</h1>
          </Col>
          <Col xs={2} md={2} lg={1}></Col>
          <Col xs={8} md={8} lg={10} className="text-center divfront">
            <p>
              Por ahora estas son las tecnologías que he aprendido y en las que
              sigo profundizando.
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
            <h1>Trabajo en equipo y comunicación</h1>
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
        <Row className="m-0" id="Proyectos">
          <Col xs={12} md={12} lg={12} className="text-center">
            <h1 className="titulo">Mis proyectos</h1>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
          <Col xs={8} md={10} lg={10} className="text-center divfront">
            <p>
              Estos son los proyectos que he realizado durante mi formación.
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
              className="imgnav2"
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
              className="imgnav2"
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
              className="imgnav2"
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
              className="imgnav2"
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
              className="imgnav2"
              src="github.png"
              onClick={handleGithubClickBiobuk}
            />
            <img className="imgpro" src="biobuk.png" />
          </Col>
          <Col xs={1} md={1} lg={3} className="paddinggg"></Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} className="h1Front" id="Sobremi">
          <h1 className="titulo">Sobre mi</h1>
          </Col>
          <Col></Col>
          <Col xs={10} md={8} lg={8} className="divfront">
          <p className="textosobremi">Me llamo Marcel Carrillo, nací en Gelsenkirchen (Alemania).
            He estado 10 años alistado en el ejercito profesional de la Armada Española, donde he realizado diferentes misiones de ayuda humanitaria como la "Operacion Atalanta", ayudando en la lucha contra la pirateria en el Golfo pérsico. También he aprendido mucho con lo que respecta a la tecnologia militar ya que estuve destinado en un Buque de mando de la OTAN donde estábamos a la última en cuanto a lo tecnológico del momento.
            Mas tarde cambie de sector y me fui al mundo del marketing digital y las consultorias Tecnológicas, asesorando a los diferente clientes profesionales del sector donde estuve 4 años aprendiendo mucho y trabajando para compañías tan importantes como Vodafone y Orange.
            Finalmente ahora me encuentro inmerso en el mundo de la programación y el desarrollo web que es mi pasión y donde quiero formarme profesionalmente y mejorar cada dia en lo que a este mundo se refiere.
            Me gustan los videojuegos, escuchar música y hacer deporte como andar en bicicleta, jugar al fútbol y al baloncesto.
          </p>
          </Col>
          <Col></Col>
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
