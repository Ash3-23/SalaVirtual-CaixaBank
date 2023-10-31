import React from "react";
import "./Boton.css"; // Importa los estilos de Boton

const Boton = ({ text }) => {
  return (
    <button className="boton">
      {text}
    </button>
  );
};

export default Boton;
