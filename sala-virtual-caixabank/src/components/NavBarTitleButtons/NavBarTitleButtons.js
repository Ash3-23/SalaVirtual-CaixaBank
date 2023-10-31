import React from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from '../ActionButtons/ActionButtons';

const NavBarTitleButtons = ({ titulo, minutosRestantes, posicionEnCola }) => {
  return (
    <div className="sala-details">
      <div className={`sala-title`}>{titulo}</div>
      <div className="sala-buttons">
        <button className="botn-secundario">Cancelar</button>
        <Link to="/modificar-cita" className="boton-secondario-modificar">
          Modificar
        </Link>
      </div>
      <div className="tiempo-espera">
        <div className="tiempo-espera-label">Tiempo de espera estimado</div>
        <div className="tiempo-espera-value">{minutosRestantes} min</div>
        <div className="tiempo-espera-barra">
          <div className="tiempo-espera-fill"></div>
        </div>
      </div>
      <p className='sala-p'>Tu posición en la cola: {posicionEnCola}</p>
      <ActionButtons />
    </div>
  );
};

export default NavBarTitleButtons;
