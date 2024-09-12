import React from "react";
import "./style.css";

export const Bentolio = () => {
  return (
    <div className="bentolio">
      <div className="div">
        <div className="SOCIALS">
          <div className="LINKS">
            <div className="text-wrapper">GITHUB</div>
            <div className="text-wrapper-2">EMAIL</div>
            <div className="text-wrapper">LINKEDIN</div>
          </div>
        </div>
        <div className="overlap">
          <div className="overlap-group">
            <div className="CONTACT">
              <div className="text-wrapper-3">Contact me</div>
              <div className="TOP-BAR">
                <div className="have-some-questions">
                  Have some
                  <br />
                  questions?
                </div>
                <img className="ARROW" alt="Arrow" src="/img/arrow.svg" />
              </div>
            </div>
            <div className="overlap-group-2">
              <div className="ABOUT">
                <p className="p">
                  Soy una estudiante de ingeniería intentando aprender todo lo que esta a mi alcance. Aquí quiero
                  resumir todos los proyectos que he hecho, y todas las pruebas que he realizado.
                </p>
              </div>
              <img className="SLOGAN-INTRO" alt="Slogan INTRO" src="/img/slogan-intro.svg" />
              <p className="estudiante-de">
                <span className="span">Estudiante</span>
                <span className="text-wrapper-4">
                  {" "}
                  <br />
                  de Ingeniería de tecnologías <br />
                  especificas de{" "}
                </span>
                <span className="span">Telecomunicaciones</span>
              </p>
            </div>
          </div>
          <div className="PORTRAIT">
            <img className="image" alt="Image" src="/img/image-1.png" />
          </div>
        </div>
        <div className="WORK">
          <div className="ITEM">
            <img className="BORDER" alt="Border" src="/img/border.svg" />
          </div>
          <div className="BORDER-wrapper">
            <img className="BORDER" alt="Border" src="/img/border-1.svg" />
          </div>
          <div className="text-wrapper-5">Certificaciones, cursos, etc</div>
          <div className="img-wrapper">
            <img className="img" alt="Border" src="/img/border-2.svg" />
          </div>
          <img className="image-2" alt="Image" src="/img/image-2.png" />
          <div className="group">
            <img className="image-3" alt="Image" src="/img/image-3.png" />
            <img className="image-4" alt="Image" src="/img/image-4.png" />
          </div>
          <img className="preparar-first" alt="Preparar first" src="/img/preparar-first-certificate-1.png" />
          <img className="DELF" alt="Delf" src="/img/delf-a2-1.png" />
        </div>
        <header className="HEADER">
          <div className="NAV">
            <p className="ana-espeso">
              <span className="span">Ana </span>
              <span className="text-wrapper-6">Espeso</span>
            </p>
            <div className="PAGE-LINKS">
              <div className="frame">
                <div className="text-wrapper-7">GUIDES</div>
                <div className="text-wrapper-8">PROJECTS</div>
                <div className="text-wrapper-8">ABOUT</div>
                <div className="text-wrapper-8">CONTACT</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
