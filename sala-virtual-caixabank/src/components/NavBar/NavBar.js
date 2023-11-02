import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import ActionButtons from '../ActionButtons/ActionButtons';
import axios from 'axios';
import { useTime } from '../../context/TimeContext/TimeContext';

const NavBar = () => {
  const { tiempoRestante, setTiempoRestante } = useTime();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const tiempoTotal = 300;
  const [titulo, setTitulo] = useState('Sala Virtual');
  const storedPosition = localStorage.getItem('posicionEnCola');
  const [posicionEnCola, setPosicionEnCola] = useState(
    storedPosition ? parseInt(storedPosition, 10) : 0
  );
  const navigate = useNavigate();
  const minutosRestantes = Math.floor(tiempoRestante / 60);

  useEffect(() => {
    const storedPosition = localStorage.getItem('posicionEnCola');
    if (!storedPosition) {
      // Genera un número aleatorio en el rango del 1 al 50
      const randomPosition = Math.floor(Math.random() * 15) + 1;

      // Almacena el valor aleatorio en localStorage
      localStorage.setItem('posicionEnCola', randomPosition.toString());

      // Actualiza el estado local con el nuevo valor
      setPosicionEnCola(randomPosition);
    }
  }, []);

  const handleCancelarCita = () => {
    setShowConfirmation(true);
  }

  const handleConfirmCancel = () => {
    navigate('/feedback');
  }

  const handleCancel = () => {
    setShowConfirmation(false);
  }

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
      navigate('/tu-turno');
    }

    return () => {
      clearInterval(interval);
    };
  }, [tiempoRestante]);

  useEffect(() => {
    const bienvenidaYaMostrada = localStorage.getItem('bienvenidaMostrada');

    if (!bienvenidaYaMostrada) {
      setTitulo('Bienvenido!');
      setTimeout(() => {
        setTitulo('Sala Virtual');
        localStorage.setItem('bienvenidaMostrada', 'true');
      }, 5000);
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
          <button className="action-buttons-modificar" onClick={handleCancelarCita}>
            Cancelar
          </button>
          <Link to="/modificar-cita" className="boton-secondario-modificar">
            Modificar
          </Link>
          {showConfirmation && (
            <div className="confirmation-popup">
              <p>¿Estás seguro de que quieres cancelar tu cita?</p>
              <button onClick={handleConfirmCancel}>Sí</button>
              <button onClick={handleCancel}>No</button>
            </div>
          )}
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
      <p className='sala-p'>
        Tu posición en la cola: {posicionEnCola}
      </p>
      <div className="sala-buttons2">
        <ActionButtons />
      </div>
    </div>
  );
};

export default NavBar;
