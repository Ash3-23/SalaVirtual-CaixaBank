import React from "react";
import './ActionButtons.css'

const ActionButtons = ({ text }) => {
  return (
    <div className="action-buttons">
      <button className="action-buttons-modificar">Cancelar</button>
        <button className="action-buttons-cancelar">Modificar</button>
    </div>
  );
};

export default ActionButtons;
