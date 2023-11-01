import React, { useState, useEffect } from "react";
import "./CheckIn.css";
import WaitTimeBar from '../../components/WaitTimeBar/WaitTimeBar';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import check from '../../images/check2.png';
import mc from '../../images/Frame 33707.png';
import { Link } from 'react-router-dom';


export const CheckIn = () => {
  return (
    <div className="desktop-content-reason-page">
      <Link to="/">
        <LogoCaixa className='logo-caixabank' />
      </Link>
      <NavBarTitleButtons />
      <WaitTimeBar />
      <div className="check-in-component">
        <img className="check-in-icon-bootstrap" alt='icon-check' src={check} />
        <p className="check-in-text-wrapper">¡Su cita ha sido confirmada!</p>
        <div className="check-in-frame">
          <div className="check-in-text-wrapper-2">Te atenderá:</div>
          <div className="check-in-frame-2">
            <div className="check-in-frame-3">
              <img className="check-in-ellipse" alt="Ellipse" src={mc} />
            </div>
            <div className="check-in-text-wrapper-4">MARIA DEL CARMEN LOPEZ</div>
          </div>
        </div>
        <div className="check-in-overlap-group">
          <div className="check-in-div">Detalles de la cita:</div>
          <p className="check-in-fecha-de">
            Fecha: 15 de Noviembre 2023
            <br />
            Hora: 13:30
            <br />
            Oficina: Paseo de las Acacias
            <br />
            Motivo: Solicitar hipoteca
            <br />
            <br />
            Cod. Cita: 38996
          </p>
        </div>
        <Link to="/feedback">
          <button className="finish-button">
            Finalizar
          </button>
        </Link>
      </div>
    </div>
  );
};
