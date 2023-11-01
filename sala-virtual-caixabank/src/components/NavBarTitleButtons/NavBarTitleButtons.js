import React, { useEffect, useState } from 'react';
import './NavBarTitleButtons.css'


const NavBarTitleButtons = () => {
  const [titulo, setTitulo] = useState('Sala Virtual');



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
    <div className="sala-details-second-navbar">
      <div className="sala-title-second-navbar">
        {titulo}
      </div>
    </div>
  );
};

export default NavBarTitleButtons;
