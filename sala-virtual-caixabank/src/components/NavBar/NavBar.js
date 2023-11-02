import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import ActionButtons from '../ActionButtons/ActionButtons';
import axios from 'axios';
import { useTime } from '../../context/TimeContext/TimeContext'; // Importa el hook useTime


const NavBar = () => {
  const { tiempoRestante, setTiempoRestante } = useTime(); // Obtiene el tiempo de espera desde el contexto
  const [showConfirmation, setShowConfirmation] = useState(false);


  const tiempoTotal = 300; // 5 minutos en segundos
  const [titulo, setTitulo] = useState('Sala Virtual');
  const storedPosition = localStorage.getItem('posicionEnCola');
  const [posicionEnCola, setPosicionEnCola] = useState(storedPosition ? parseInt(storedPosition, 10) : 0);
  const navigate = useNavigate();


  const minutosRestantes = Math.floor(tiempoRestante / 60);


  const handleCancelarCita = () => {
    // Muestra la ventana emergente de confirmación
    setShowConfirmation(true);
  }

  const handleConfirmCancel = () => {
    // Realiza la cancelación (puedes agregar tu lógica aquí) y luego redirige a /feedback
    navigate('/feedback');
  }

  const handleCancel = () => {
    // Cierra la ventana emergente de confirmación
    setShowConfirmation(false);
  }

  useEffect(() => {
    // Verifica si la posición en la cola ya está en el localStorage
    const storedPosition = localStorage.getItem('posicionEnCola');

    if (!storedPosition) {
      // Si no está en el localStorage, realiza la solicitud al servidor
      axios.post('http://localhost:4000/agregar-cliente')
        .then((response) => {
          const nuevaPosicion = response.data.posicion;

          // Actualiza el estado local con la nueva posición
          setPosicionEnCola(nuevaPosicion);

          // Almacena la posición en el localStorage
          localStorage.setItem('posicionEnCola', nuevaPosicion.toString());
        })
        .catch((error) => {
          console.error('Error al obtener la posición en cola:', error);
        });
    }
  }, []);


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
    // Verifica si el mensaje de bienvenida ya se mostró antes
    const bienvenidaYaMostrada = localStorage.getItem('bienvenidaMostrada');

    if (!bienvenidaYaMostrada) {
      // Mostrar el mensaje de bienvenida por primera vez
      setTitulo('Bienvenido!');

      // Establecer un temporizador para cambiar a "Sala Virtual" después de 5 segundos
      setTimeout(() => {
        setTitulo('Sala Virtual');
        // Marcar que la bienvenida se ha mostrado en localStorage
        localStorage.setItem('bienvenidaMostrada', 'true');
      }, 5000); // Cambia después de 5 segundos
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
          {/* Ventana emergente de confirmación */}
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
