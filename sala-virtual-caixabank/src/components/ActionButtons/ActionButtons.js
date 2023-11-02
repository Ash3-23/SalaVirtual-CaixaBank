import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './ActionButtons.css'

const ActionButtons = ({ text }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  return (
    <div className="action-buttons">
      <button className="action-buttons-modificar" onClick={handleCancelarCita}>
        Cancelar
      </button>

      <Link to='/modificar-cita'>
        <button className="action-buttons-cancelar">Modificar</button>
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
  );
};

export default ActionButtons;
