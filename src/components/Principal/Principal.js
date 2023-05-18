import {React, useState} from "react";
import {Navbar, Container, Nav, Form, Button, NavDropdown} from "react-bootstrap"
import './Principal.scss'
import Curriculum from "../Descargas/Curriculum.pdf"
// import sendEmail from "../Email/sendEmail";

export const Principal = () => {
  const [mensaje, setMensaje] = useState('');
  const [showContact, setShowContact] = useState(false)

  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendEmail(mensaje)
    console.log('Mensaje enviado:', mensaje);
    setMensaje('');
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/marcel-carrillo/")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Marcel-Carrillo")
  }
  const handleGithubClickCalc = () => {
    window.open("https://github.com/Marcel-Carrillo/Calculadora")
  }
  const handleGithubClickInsta = () => {
    window.open("https://github.com/Marcel-Carrillo/Prueba-Instagram")
  }
  const handleGithubClickAll = () => {
    window.open("https://github.com/Marcel-Carrillo/AllCinema")
  }
  const handleGithubClickViajes = () => {
    window.open("https://github.com/Marcel-Carrillo/Viajes.git")
  }
  const handleGithubClickBiobuk = () => {
    window.open("https://github.com/Marcel-Carrillo/Biobuk")
  }

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

    return(
        <>
          <Navbar bg="light" variant="light" className="navbar">
        <Container className="container">
          <Nav className="me-auto">
            <Nav.Link className="imgnav" href="">Home</Nav.Link>
            <Nav.Link className="imgnav" href="">Tecnologias</Nav.Link>
            <Nav.Link className="imgnav" href="">Proyectos</Nav.Link>
            <Nav.Link className="imgnav" href={Curriculum} download="Curriculum.pdf">Download CV</Nav.Link>
            <Nav.Link className="imgnav" href="">Sobre mi</Nav.Link>
          </Nav>
            <img className="imgnav" src="linkedIn.png" onClick={handleLinkedInClick}/>
            <img className="imgnav" src="github.png" onClick={handleGithubClick}/>
            <Nav.Link className="imgnav" onClick={()=>setShowContact(!showContact)}>Contactar</Nav.Link>
        </Container>
      </Navbar>
      {showContact && 
      <Container>
      <h1>Contacto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mensaje">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} value={mensaje} onChange={handleChangeMensaje} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
}
      <div className="bodyPrincipal">
        <div>
          <h1 className="titulo">Mi nombre es Marcel Carrillo</h1>
          <div className="divfront">
            <p>Soy un apasionado de la tecnologia , estoy ahora inmerso en el mundo de la programacion y el desarrollo web, por fin he dado con lo que realmente me gusta que es la programacion, he estado trabajando muchos años en temas tecnologicos y espero que disfruteis viendo mi web.</p>
          </div>
        </div>
        <h1>Tecnologias</h1>
        <div className="divfront">
        <p>Por ahora estas son las tecnologias que he aprendido y en las que sigo profundizando</p>
        </div>
      <h1 className="h1Front">Front-end</h1>
        <div className="divfront">
          {frontEnd.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <h1>Back-end</h1>
        <div className="divfront">
          {backEnd.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <h1>Diseño y maquetación</h1>
        <div className="divfront">
          {diseño.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <h1>Herramientas de desarrollo</h1>
        <div className="divfront">
          {desarrollo.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <h1>Trabajo en equipo y comunicacion</h1>
        <div className="divfront">
          {trabajo.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <h1>Metodologias de trabajo</h1>
        <div className="divfront">
          {metodologias.map((technology, index) => (
            <div className="divimg" key={index}>
              <img className="imgtech" src={technology} alt={technology} />
              <span className="spanhov">
                {technology.replace(".png", "").toUpperCase()}
              </span>
            </div>
          ))}
        </div>
          <h1>Mis proyectos</h1>
          <div className="divfront"><p>Estos son los proyectos que he realizado durante mi formacion y tambien algunas pruebas tecnicas que he realizado a posteriori</p></div>
          <div className="divfront">
              <div className="divimg"><p>Calculadora realizada con Vanilla JavaScript</p><img className="imgnav" src="github.png" onClick={handleGithubClickCalc}/><img className="imgpro" src="calculadora.png"/></div>
             </div>
          <div className="divfront">
              <div className="divimg"><p>Pequeña prueba tecnica de una copia de Instagram realizada con clases de Javascript</p><img className="imgnav" src="github.png" onClick={handleGithubClickInsta}/><img className="imgpro" src="instagram.png"/></div>
             </div>
          <div className="divfront">
              <div className="divimg"><p>Proyecto simulando un club de cine, realizado con NODE</p><img className="imgnav" src="github.png" onClick={handleGithubClickAll}/><img className="imgpro" src="allcinema.png"/></div>
             </div>
          <div className="divfront">
              <div className="divimg"><p>Proyecto realizado con REACT simulando una red social de viajes</p><img className="imgnav" src="github.png" onClick={handleGithubClickViajes}/><img className="imgpro" src="viajes.png"/></div>
             </div>
          <div className="divfront">
              <div className="divimg"><p>MVP Biobuk proyecto completo con NODE, REACT y MySQL</p><img className="imgnav" src="github.png" onClick={handleGithubClickBiobuk}/><img className="imgpro" src="biobuk.png"/></div>
             </div>

      </div>
      <div class="light x1"></div>
      <div class="light x2"></div>
      <div class="light x3"></div>
      <div class="light x4"></div>
      <div class="light x5"></div>
      <div class="light x6"></div>
      <div class="light x7"></div>
      <div class="light x8"></div>
      <div class="light x9"></div>
        </>
        )
}



