import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ActionButtons from '../ActionButtons/ActionButtons';


const NavBar = () => {
  const [tiempoRestante, setTiempoRestante] = useState(300); // 5 minutos en segundos
  const tiempoTotal = 300; // 5 minutos en segundos
  const [titulo, setTitulo] = useState('Bienvenido!'); // Estado para el título
  const [mostrarBienvenido, setMostrarBienvenido] = useState(true);
  const [transicionTerminada, setTransicionTerminada] = useState(false);

  const minutosRestantes = Math.floor(tiempoRestante / 60); // Convierte segundos a minutos

  useEffect(() => {
    const barra = document.querySelector('.tiempo-espera-fill');
  
    if (barra) {
      barra.style.width = `${((tiempoTotal - tiempoRestante) / tiempoTotal) * 100}%`;
    }
  
    const interval = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(tiempoRestante - 1);
        if (mostrarBienvenido && tiempoTotal - tiempoRestante === 5) {
          // Cambia a "Bienvenido!" después de 5 segundos
          setMostrarBienvenido(false);
  
          // Simula la transición al cambiar el título después de un retraso
          setTimeout(() => {
            setTitulo('Sala Virtual');
          }, 1000); // Cambia después de 1 segundo
        }
      }
    }, 1000);
  
    if (tiempoRestante <= 0) {
      // Aquí puedes agregar el código para mostrar el componente "suTurno"
      // por ejemplo, cambiando el estado o navegando a una nueva pantalla.
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [tiempoRestante, mostrarBienvenido]);
  

  return (
    <div className="desktop-content">
      <Link to='/'>
        <img className="logo-caixabank" alt="Logo caixabank" src={logo} />
      </Link>
     <div className="sala-details">
     <div className={`sala-title ${transicionTerminada ? 'visible' : 'hidden'}`}>
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
        </div> {/* Mostrar minutos y segundos */}
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
