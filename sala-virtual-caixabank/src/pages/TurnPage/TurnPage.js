import React, { useState, useEffect } from "react";
import logo from '../../images/Logo-CaixaBank-1 1.png'
import "./TurnPage.css";
import LogoCaixa from "../../components/LogoCaixa/LogoCaixa";
import notification from '../../images/Notification.gif';
import counter from '../../images/counter.png';
import icon from '../../images/Frame 33707.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const TuTurno = () => {

  const [showCloseButton, setShowCloseButton] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // Después de 1 minuto (60000 milisegundos), mostrar el botón de cierre
    const timeout = setTimeout(() => {
      setShowCloseButton(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="desktop-content">
      <LogoCaixa />
      <div className="sala-details-turn-page">
        <div className='sala-title-turn-page'>
          Sala Virtual
        </div>
      </div>

      <div className="desktop-modal-su">
        {showCloseButton && (
          <button className="close-button" onClick={() => navigate('/feedback')}>
            X
          </button>

        )}
        <div className="div-2">
          <div className="overlap-group">
            <div className="component">
              <p className="text-wrapper">El tiempo de espera ha terminado</p>
              <div className="text-wrapper-2"><img className="counter" alt="counter" src={counter} /></div>
              <div className="your-turn">¡Ya es tu turno!</div>
              <img className="https-lottiefiles" alt="Https lottiefiles" src={notification} />
              <div className="frame">
                <div className="text-wrapper-3">Te atenderá:</div>
                <div className="gestor-name"><img className="icon-img" alt="Frame" src={icon} />
                  <div className="text-wrapper-8">MARIA CARMEN ALEJO GUERRA</div>
                </div>
                <div className="text-wrapper-4">Mesa: 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuTurno;
