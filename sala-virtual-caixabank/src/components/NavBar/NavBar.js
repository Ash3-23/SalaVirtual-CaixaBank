import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo-CaixaBank-1 1.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ActionButtons from '../ActionButtons/ActionButtons';
import axios from 'axios'; // Asegúrate de que axios esté instalado


const NavBar = () => {
  const [tiempoRestante, setTiempoRestante] = useState(300); // 5 minutos en segundos
  const tiempoTotal = 300; // 5 minutos en segundos
  const [titulo, setTitulo] = useState('Sala Virtual');
  const [posicionEnCola, setPosicionEnCola] = useState(1);

  const minutosRestantes = Math.floor(tiempoRestante / 60);

  useEffect(() => {
    const bienvenidaYaMostrada = localStorage.getItem('bienvenidaMostrada');

    if (!bienvenidaYaMostrada) {
      setTitulo('Bienvenido!');
      localStorage.setItem('bienvenidaMostrada', 'true');

      // Realiza una solicitud POST al servidor para agregar el cliente a la cola
      axios.post('http://localhost:4000/agregar-cliente', { nombre: 'NombreCliente' })
        .then((response) => {
          const nuevaPosicion = response.data.posicion;
          setPosicionEnCola(nuevaPosicion);

          // Guardar la posición en el LocalStorage
          localStorage.setItem('posicionEnCola', nuevaPosicion);
        })
        .catch((error) => {
          console.error('Error al obtener la posición:', error);
        });
    } else {
      // Cargar la posición almacenada en el LocalStorage al cargar la página
      const posicionAlmacenada = localStorage.getItem('posicionEnCola');
      if (posicionAlmacenada) {
        setPosicionEnCola(Number(posicionAlmacenada));
      }
    }
  }, []);

  useEffect(() => {
    // Actualiza la posición cuando el tiempo de espera se agota
    if (tiempoTotal <= 0) {
      const posicion = localStorage.getItem('posicionEnCola');
      if (posicion) {
        const nuevaPosicion = Number(posicion) + 1;
        setPosicionEnCola(nuevaPosicion);
        localStorage.setItem('posicionEnCola', nuevaPosicion);
      }
    }
  }, [tiempoTotal]);

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
          <button className="botn-secundario">Cancelar</button>
          <Link to="/modificar-cita" className="boton-secondario-modificar">
            Modificar
          </Link>
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
     
        <p className="sala-p">
          Tu posición en la cola: {posicionEnCola}
        </p>

      <div className="sala-buttons2">
        <ActionButtons />
      </div>
    </div>
  );
};

export default NavBar;
