import React from "react";
// import { BotonCancelar } from "./BotonCancelar"; // Asegúrate de importar el componente correcto
// import { BotonModificar } from "./BotonModificar"; // Asegúrate de importar el componente correcto
import "./TurnPage.css";

const TuTurno = () => {
  return (
    <div className="desktop-modal-su">
      <div className="div-2">
        <div className="overlap-group">
          <img className="logo-caixabank" alt="Logo caixabank" src="logo-caixabank-1-1.png" />
          <div className="rectangle" />
          <div className="text-wrapper-2">Sala Virtual</div>
          {/* <BotonModificar className="boton-modificar-instance" /> */}
          {/* <BotonCancelar className="boton-cancelar-instance" /> */}
        </div>
        <p className="p">El tiempo de espera ha terminado</p>
        <div className="text-wrapper-3">¡Ya es tu turno!</div>
        <div className="text-wrapper-4">00:00</div>
        <img className="https-lottiefiles" alt="Https lottiefiles" src="notification-xapbf6gb4w.png" />
        <div className="frame">
          <div className="text-wrapper-5">Te atenderá:</div>
          <div className="text-wrapper-6">Mesa: 5</div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="ellipse" />
              <div className="text-wrapper-7">MC</div>
            </div>
            <div className="text-wrapper-8">MARIA CARMEN ALEJO GUERRA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuTurno;
