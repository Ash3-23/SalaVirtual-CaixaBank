import React, { useState, useEffect } from "react";
import "./GamesPage.css";
import { Link } from 'react-router-dom';
import escape from '../../images/escape.png'
import ruleta from '../../images/ruleta.png'
import monopoli from '../../images/monopoli.png'
import trivia from '../../images/trivia.png'


const GamesPage = () => {
  return (

    <div className="desktop-sala">
      <Link to="/" className="go-back-link">
        <span className="back-arrow">←</span>
      </Link>
      <div className="information-frames">
        <div className="info-frame">
        <a href="https://minijuegos.billetesargentinos.com.ar/juegos/ruleta/ruleta.htm" target="_blank" rel="noopener noreferrer" className="info-frame">
          <div className="info-frame-icon">
            <img src={ruleta} alt="info" />
          </div>
        </a>
          <div className="info-frame-text">Ruleta</div>
        </div>
        <div className="info-frame">
        <a href="https://srunners.com/aventuras/un-viaje-inesperado/personajes/" target="_blank" rel="noopener noreferrer" className="info-frame">
          <div className="info-frame-icon">
            <img src={escape} alt="info" />
          </div>
        </a>
          <div className="info-frame-text">Escape Room</div>
        </div>
        <div className="info-frame">
        <a href="https://www.cooljuegos.com/juego-en-linea/monopoly-online/" target="_blank" rel="noopener noreferrer" className="info-frame">
          <div className="info-frame-icon">
            <img src={monopoli} alt="info" />
          </div>
        </a>
          <div className="info-frame-text">
            Monopoly
          </div>
        </div>
        <div className="info-frame">
        <a href="https://www.cerebriti.com/juegos-de-matematicas/calculo-mental-rapido" target="_blank" rel="noopener noreferrer" className="info-frame">
          <div className="info-frame-icon">
            <img src={trivia} alt="info" />
          </div>
        </a>
          <div className="info-frame-text">Trivia</div>
        </div>
      </div>
    </div>)
}

export default GamesPage