import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ActionButtons from '../ActionButtons/ActionButtons';

const NavBar = () => {
  const [tiempoRestante, setTiempoRestante] = useState(300); // 5 minutos en segundos
  const tiempoTotal = 300; // 5 minutos en segundos
  const [titulo, setTitulo] = useState('Sala Virtual');

  const minutosRestantes = Math.floor(tiempoRestante / 60);

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

  useEffect(() => {
    // Verifica si el mensaje de bienvenida ya se mostró antes
    const bienvenidaYaMostrada = localStorage.getItem('bienvenidaMostrada');

    if (!bienvenidaYaMostrada) {
      // Mostrar el mensaje de bienvenida por primera vez
      setTitulo('Bienvenido!');
      // Marcar que la bienvenida se ha mostrado en localStorage
      localStorage.setItem('bienvenidaMostrada', 'true');
    }
  }, []);

  return (
    <div className="desktop-content">
      <Link to='/'>
        <img className="logo-caixabank" alt="Logo caixabank" src={logo} />
      </Link>
      <div className="sala-details">
        <div className={`sala-title`}>
          {titulo}
        </div>
        <div className="sala-buttons">
          <Link to="/modificar-cita" className="boton-secondario-modificar">
            Modificar
          </Link>
          <button className="botn-secundario">Cancelar</button>
        </div>
      </div>
      <div className="tiempo-espera">
        <div className="tiempo-espera-label">Tiempo de espera estimado</div>
        <div className="tiempo-espera-value">
          {minutosRestantes} min
        </div>
        <div className="tiempo-espera-barra">
          <div className="tiempo-espera-fill"></div>
        </div>
      </div>
      <p className='sala-p'>Puesto en la cola: 4</p>
      <div className="sala-buttons2">
        <ActionButtons />
      </div>
    </div>
  );
};

export default NavBar;
