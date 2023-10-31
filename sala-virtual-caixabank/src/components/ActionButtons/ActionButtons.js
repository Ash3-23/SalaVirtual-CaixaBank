import React from "react";
import { Link } from 'react-router-dom';
import './ActionButtons.css'

const ActionButtons = ({ text }) => {
  return (
    <div className="action-buttons">
      <button className="action-buttons-modificar">Cancelar</button>
      <Link to='modificar-cita'>
        <button className="action-buttons-cancelar">Modificar</button>
      </Link>
    </div>
  );
};

export default ActionButtons;
