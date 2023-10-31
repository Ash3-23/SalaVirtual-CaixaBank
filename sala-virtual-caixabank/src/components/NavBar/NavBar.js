import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import './NavBar.css';

const NavBar = () => {
  const [tiempoRestante, setTiempoRestante] = useState(300); // 5 minutos en segundos
  const tiempoTotal = 300; // 5 minutos en segundos

  const minutosRestantes = Math.floor(tiempoRestante / 60); // Convierte segundos a minutos

  useEffect(() => {
    const barra = document.querySelector('.tiempo-espera-fill');

    if (barra) {
      barra.style.width = `${((tiempoTotal - tiempoRestante) / tiempoTotal) * 100}%`;
    }

    const interval = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(tiempoRestante - 1);
      }
    }, 1000);

    if (tiempoRestante <= 0) {
      // Aquí puedes agregar el código para mostrar el componente "suTurno"
      // por ejemplo, cambiando el estado o navegando a una nueva pantalla.
    }

    return () => {
      clearInterval(interval);
    };
  }, [tiempoRestante]);

  return (
    <div className="desktop-content">
      <img className="logo-caixabank" alt="Logo caixabank" src={logo} />
      <div className="sala-details">
        <div className="sala-title">Sala Virtual</div>
        <div className="sala-buttons">
          <button className="boton-secondario-modificar">Modificar</button>
          <button className="botn-secundario">Cancelar</button>
        </div>
      </div>
      <div className="tiempo-espera">
        <div className="tiempo-espera-label">Tiempo de espera estimado</div>
        <div className="tiempo-espera-value">
          {minutosRestantes} min
        </div> {/* Mostrar minutos y segundos */}
        <div className="tiempo-espera-barra">
          <div className="tiempo-espera-fill"></div>
        </div>
      </div>
      <p className='sala-p'>Puesto en la cola: 4</p>
      <div className="sala-buttons2">
          <button className="boton-secondario-modificar2">Cancelar</button>
          <button className="botn-secundario2">Modificar</button>
        </div>
    </div>
  );
};


export default NavBar;
