import React from "react";
import "./DesktopHome.css";
import { Link } from 'react-router-dom';
import info from '../../images/Frame33699.png';
import news from '../../images/Frame33691.png';
import app from '../../images/Frame33692.png';
import games from '../../images/Frame33693.png';

const DesktopSala = () => {
  return (
    <div className="desktop-sala">
      <div className="information-frames">
        <div className="info-frame">
          <div className="info-frame-icon">
            <img src={info} alt="info" />
          </div>
          <div className="info-frame-text">Información sobre su consulta</div>
        </div>
        <Link className="link-underline" to='/oportunidades'>
          <div className="info-frame">
            <div className="info-frame-icon">
              <img src={news} alt="info" />
            </div>
            <div className="info-frame-text">Oportunidades Caixabank</div>
          </div>
        </Link>
        <Link className="link-underline" to='/funcionalidades'>
          <div className="info-frame">
            <div className="info-frame-icon">
              <img src={app} alt="info" />
            </div>
            <div className="info-frame-text">
              Qué puedes hacer desde la app
            </div>
          </div>
        </Link>
        <Link className="link-underline" to='/gaming'>
          <div className="info-frame">
            <div className="info-frame-icon">
              <img src={games} alt="info" />
            </div>
            <div className="info-frame-text">Juegos interactivos</div>
          </div>
        </Link>

      </div>
    </div>
  );
};


export default DesktopSala;
