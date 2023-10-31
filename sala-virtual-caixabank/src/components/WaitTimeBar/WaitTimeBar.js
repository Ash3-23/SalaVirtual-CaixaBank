// TiempoEspera.js
import React, { useEffect } from 'react';
import { useTime } from '../../context/TimeContext/TimeContext';

const WaitTimeBar = () => {
  const { tiempoRestante, setTiempoRestante } = useTime();
  const tiempoTotal = 300;
  const minutosRestantes = Math.floor(tiempoRestante / 60);

  // Código relacionado con el tiempo de espera

  return (
    <div className="tiempo-espera">
      <div className="tiempo-espera-label">Tiempo de espera estimado</div>
      <div className="tiempo-espera-value">{minutosRestantes} min</div>
      <div className="tiempo-espera-barra">
        <div className="tiempo-espera-fill"></div>
      </div>
    </div>
  );
};

export default WaitTimeBar;
