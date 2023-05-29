import { React, useState } from "react";
import { Row, Col, Nav} from "react-bootstrap";
import "./Principal.scss";
import { NavbarPrincipal } from "../Navbar/NavbarPrincipal";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

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
  const handleYoutubeClickCalc = () => {
    window.open("https://www.linkedin.com/posts/marcel-carrillo_html-javascript-css-activity-7023895322426814465-5Ak7?utm_source=share&utm_medium=member_desktop");
  };
  const handleYoutubeClickAll = () => {
    window.open("https://www.youtube.com/watch?v=v2B8D3ATP50&t=11s");
  };
  const handleYoutubeClickBiobuk = () => {
    window.open("https://www.youtube.com/watch?v=gYZQVz66hAM");
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
        <Row className="m-0 vistacompleta" id="Inicio">
          <Col xs={12} md={5} lg={8} className="text-center">
            <h1 className="titulo2">Soy Marcel Carrillo</h1>
            <div className="divfront">
              <p>
                Un apasionado de la tecnología , completamente inmerso en el mundo
                de la programación y el desarrollo web, es mi pasión. Espero que
                disfruteis viendo mi espacio WEB donde os voy a mostrar mis habilidades.
              </p>
            </div>
          </Col>
            <Col xs={12} md={3} lg={4} className="colimg">
            <img className="imgyo imgtech" src="/Yo/marcel.jpeg" alt="alt"/>
          </Col>
          <Col xs={12} md={12} lg={12} className="flechita">
              <Nav.Link href="#Tecnologias" >
            <img className="imgtech2" src="/flecha.png" alt="alt"/>
              </Nav.Link></Col>
        </Row>
        <Row className="m-0">
          <Col md={2} lg={3}></Col>
          <Col md={8} lg={6} className="m-0 text-center" id="Tecnologias">
            <h1 className="h1Front titulo">Tecnologías</h1>
            <div className="text-center divfront">
              <p>
                Por ahora estas son las tecnologías que he aprendido y en las
                que sigo profundizando.
              </p>
            </div>
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
        <Row className="m-0">
          <Col lg={3} >
            <div className="pruebadiv">
              <h1 className="h1Front">Front-end</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="pruebadiv">
              <h1 className="h1Front">Back-end</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pruebadiv">
              <h1 className="h1Front">Diseño y maquetación</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="pruebadiv">
              <h1 className="h1Front">Herramientas de desarrollo</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pruebadiv">
              <h1 className="h1front">Trabajo en equipo y comunicación</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="pruebadiv">
              <h1 className="h1front">Metodologias de trabajo</h1>
              <div className="divfront d-flex flex-column flex-md-row">
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
              </div>
            </div>
          </Col>
        </Row>
        <Row className="m-0" id="Proyectos">
          <Col xs={12} md={12} lg={12} className="text-center">
            <h1 className="h1Front titulo">Mis proyectos</h1>
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
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Calculadora</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <div className="ordenicons"><img
                className="imgnav2"
                src="github.png"
                onClick={handleGithubClickCalc} 
                alt="alt"
              />
              <img
                className="imgnav2"
                src="youtube.png"
                onClick={handleYoutubeClickCalc}
                alt="alt"
              /></div>
              
              <img className="imgpro" src="calculadora.png" alt="alt"/>
            </div></div>
           
          </Col>
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Copia Instagram</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <img
                className="imgnav2"
                src="github.png"
                onClick={handleGithubClickInsta}
                alt="alt"
              />
              <img className="imgpro" src="instagram.png" alt="alt"/>
            </div></div>
          </Col>
        </Row>
        <Row className="m-0">
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Proyecto club de cine</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <div><img
                className="imgnav2"
                src="github.png"
                onClick={handleGithubClickAll}
                alt="alt"
              />
              <img
                className="imgnav2"
                src="youtube.png"
                onClick={handleYoutubeClickAll}
                alt="alt"
              /></div>
              
              <img className="imgpro" src="allcinema.png" alt="alt"/>
            </div></div>
          </Col>
          <Col lg={6}>
            <div className="pruebadiv"><h1 className="h1Front">Proyecto red social de viajes</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <img
                className="imgnav2"
                src="github.png"
                onClick={handleGithubClickViajes}
                alt="alt"
              />
              <img className="imgpro" src="viajes.png" alt="alt"/>
            </div></div>
          </Col>
        </Row>
        <Row className="m-0">
          <Col lg={3}></Col>
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">MVP Biobuk</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <div><img
                className="imgnav2"
                src="github.png"
                onClick={handleGithubClickBiobuk}
                alt="alt"
              />
              <img
                className="imgnav2"
                src="youtube.png"
                onClick={handleYoutubeClickBiobuk}
                alt="alt"
              /></div>
              
              <img className="imgpro" src="biobuk.png" alt="alt"/>
            </div></div>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row className="m-0 vistacompleta">
          <Col md={1} lg={3}></Col>
          <Col xs={12} md={10} lg={6} className="h1Front" id="Sobremi">
            <div className="pruebadiv">
            <h1 className="h1Front titulo">Sobre mi</h1>
            <div className="divfrontexto">
            <p className="textosobremi">
              Me llamo Marcel Carrillo, nací en Gelsenkirchen (Alemania). He
              estado 10 años alistado en el ejercito profesional de la Armada
              Española, donde he realizado diferentes misiones de ayuda
              humanitaria como la "Operacion Atalanta", ayudando en la lucha
              contra la pirateria en el Golfo pérsico. También he aprendido
              mucho con lo que respecta a la tecnologia militar ya que estuve
              destinado en un Buque de mando de la OTAN donde estábamos a la
              última en cuanto a lo tecnológico del momento. Mas tarde cambie de
              sector y me fui al mundo del marketing digital y las consultorias
              Tecnológicas, asesorando a los diferente clientes profesionales
              del sector donde estuve 4 años aprendiendo mucho y trabajando para
              compañías tan importantes como Vodafone y Orange. Finalmente ahora
              me encuentro inmerso en el mundo de la programación y el
              desarrollo web que es mi pasión y donde quiero formarme
              profesionalmente y mejorar cada dia en lo que a este mundo se
              refiere. Me gustan los videojuegos, escuchar música y hacer
              deporte como andar en bicicleta, jugar al fútbol y al baloncesto.
            </p>
            </div>
            </div>
          </Col>
          <Col md={1} lg={3}></Col>
        </Row>
        <Row className="footerFinal">
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted w-100'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Derechos reservados®</span>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Hasta pronto
              </h6>
              <p>
                Muchas gracias por visitarme, cualquier consulta al respecto del contenido estare encantado de resolverlo.
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                Benalmádena , Málaga
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mcarhue.ti@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +34 654703621
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 -
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Marcel Carrillo Huerta-
        </a>
      </div>
    </MDBFooter>
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
