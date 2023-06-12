import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Principal");
  };

  return (
    <div className="bodyHome">
      <p id="head1" class="header">
        Hola A tod@S!
      </p>
      <p id="head2" class="header">
        Bienvenid@s
      </p>
      <p id="head3" class="header">
        Al Portfolio
      </p>
      <p id="head4" class="header">
        de Marcel Carrillo
      </p>
      <p id="head5" class="header ultimoP">
        Full Stack Web Developer
      </p>
      <button onClick={() => handleClick()} className="button-cont">
        Continuar
      </button>
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
  );
};
