// WaitTimeBar.js
import React, { useEffect, useState } from 'react';
import { useTime } from '../../context/TimeContext/TimeContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './WaitTimeBar.css'

const WaitTimeBar = () => {
  const { tiempoRestante, setTiempoRestante } = useTime();
  const tiempoTotal = 300; // 5 minutos en segundos
  const [titulo, setTitulo] = useState('Sala Virtual');
  const storedPosition = localStorage.getItem('posicionEnCola');
  const [posicionEnCola, setPosicionEnCola] = useState(storedPosition ? parseInt(storedPosition, 10) : 0);
  const navigate = useNavigate();

  const minutosRestantes = Math.floor(tiempoRestante / 60);

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
    const barra = document.querySelector('.tiempo-espera-fill-wait-time');

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

  return (
    <div className="tiempo-espera-wait-time">
      <div className="tiempo-espera-label-wait-time">Tiempo de espera estimado</div>
      <div className="tiempo-espera-value-wait-time">{minutosRestantes} min</div>
      <div className="tiempo-espera-barra-wait-time">
        <div className="tiempo-espera-fill-wait-time"></div>
      </div>
      <p className='sala-p-wait-time'>
        Tu posición en la cola: {posicionEnCola}
      </p>
    </div>
  );
};

export default WaitTimeBar;
