import { React, useState } from "react";
import { Row, Col, Nav} from "react-bootstrap";
import "./Principal.scss";
import { NavbarPrincipal } from "../Navbar/NavbarPrincipal";
import githubIcon from '../../assets/images/github.png';
import youtubeIcon from '../../assets/images/youtube.png';
import calculadoraImg from '../../assets/images/Calculadora.png';
import instagramImg from '../../assets/images/instagram.png';
import allCinemaImg from '../../assets/images/allcinema.png';
import biobukImg from '../../assets/images/biobuk.png';
import viajesImg from '../../assets/images/viajes.png';
import { Footer } from "../Footer/Footer";

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
      <div className="bodyPrincipal p-0">
        <Row className="m-0 vistacompleta" id="Inicio">
          <Col xs={12} md={6} lg={8} className="text-center">
            <h1 className="titulo2">Soy Marcel Carrillo</h1>
            <div className="divfront">
              <p>
                Un apasionado de la tecnología, completamente inmerso en el mundo
                de la programación y el desarrollo web, es mi pasión. Espero que
                disfrutéis viendo mi espacio WEB donde os voy a mostrar mis habilidades.
              </p>
            </div>
          </Col>
            <Col xs={12} md={6} lg={4} className="colimg">
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
              <h1 className="h1front">Metodologías de trabajo</h1>
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
              Estos son algunos de los proyectos que he realizado.
            </p>
          </Col>
          <Col xs={2} md={1} lg={1}></Col>
        </Row>
        <Row className="m-0">
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Calculadora</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <div className="ordenicons">
                <img
                className="imgnav2"
                src={githubIcon}
                onClick={handleGithubClickCalc} 
                alt="alt"
              />
              <img
                className="imgnav2"
                src={youtubeIcon}
                onClick={handleYoutubeClickCalc}
                alt="alt"
              /></div>
              
              <img className="imgpro" src={calculadoraImg} alt="alt"/>
            </div></div>
           
          </Col>
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Copia Instagram</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <img
                className="imgnav2"
                src={githubIcon}
                onClick={handleGithubClickInsta}
                alt="alt"
              />
              <img className="imgpro" src={instagramImg} alt="alt"/>
            </div></div>
          </Col>
        </Row>
        <Row className="m-0">
          <Col lg={6}>
            <div className="pruebadiv"> <h1 className="h1Front">Proyecto club de cine</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <div><img
                className="imgnav2"
                src={githubIcon}
                onClick={handleGithubClickAll}
                alt="alt"
              />
              <img
                className="imgnav2"
                src={youtubeIcon}
                onClick={handleYoutubeClickAll}
                alt="alt"
              /></div>
              
              <img className="imgpro" src={allCinemaImg} alt="alt"/>
            </div></div>
          </Col>
          <Col lg={6}>
            <div className="pruebadiv"><h1 className="h1Front">Proyecto red social de viajes</h1>
            <div xs={10} md={10} lg={6} className="d-flex flex-column divfront">
              <img
                className="imgnav2"
                src={githubIcon}
                onClick={handleGithubClickViajes}
                alt="alt"
              />
              <img className="imgpro" src={viajesImg} alt="alt"/>
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
                src={githubIcon}
                onClick={handleGithubClickBiobuk}
                alt="alt"
              />
              <img
                className="imgnav2"
                src={youtubeIcon}
                onClick={handleYoutubeClickBiobuk}
                alt="alt"
              /></div>
              
              <img className="imgpro" src={biobukImg} alt="alt"/>
            </div></div>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row className="m-0 vistacompleta">
          <Col md={1} lg={3}></Col>
          <Col xs={12} md={10} lg={6} className="h1Front" id="Sobremi">
            <div className="pruebadiv">
            <h1 className="h1Front titulo">Sobre mí</h1>
            <div className="divfrontexto">
            <p className="textosobremi">
              Me llamo Marcel Carrillo, nací en Gelsenkirchen (Alemania). He
              estado 10 años alistado en el ejército profesional de la Armada
              Española, donde he realizado diferentes misiones de ayuda
              humanitaria como la "Operación Atalanta", ayudando en la lucha
              contra la piratería en el Golfo Pérsico. También he aprendido
              mucho con lo que respecta a la tecnología militar ya que estuve
              destinado en un buque de mando de la OTAN donde estábamos a la
              última en cuanto a lo tecnológico del momento. Más tarde cambié de
              sector y me fui al mundo del marketing digital y las consultorías
              tecnológicas, asesorando a los diferente clientes profesionales
              del sector donde estuve 4 años aprendiendo mucho y trabajando para
              compañías tan importantes como Vodafone y Orange. Finalmente, ahora
              me encuentro inmerso en el mundo de la programación y el
              desarrollo web que es mi pasión y donde quiero formarme
              profesionalmente y mejorar cada día en lo que a este mundo se
              refiere. Me gustan los videojuegos, escuchar música y hacer
              deporte como montar en bicicleta, jugar al fútbol y al baloncesto.
            </p>
            </div>
            </div>
          </Col>
          <Col md={1} lg={3}></Col>
        </Row>
        <Footer />
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
