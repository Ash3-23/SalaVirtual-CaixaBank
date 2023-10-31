import React from "react";
import "./TimeCounter.css"; // Importa los estilos de TiempoEspera

const TimeCounter = ({ tiempo }) => {
  return (
    <div className="tiempo-espera">
      <div className="tiempo-label">Tiempo de espera estimado</div>
      <div className="tiempo-value">{tiempo}</div>
    </div>
  );
};

export default TimeCounter;
