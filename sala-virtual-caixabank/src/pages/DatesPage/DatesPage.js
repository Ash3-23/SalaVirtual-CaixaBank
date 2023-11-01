import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DatesPage.css';
import WaitTimeBar from '../../components/WaitTimeBar/WaitTimeBar';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import check from '../../images/calendar2-check.png';
import one from '../../images/one.png';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css'; // Importa los estilos de react-calendar

const DatesPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(''); // Estado para almacenar la hora seleccionada
  const [showContinueButton, setShowContinueButton] = useState(false); // Nuevo estado para mostrar el botón "Continuar"


  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowContinueButton(true);
  }

  return (
    <div className="desktop-content-dates-page">
      <Link to="/">
        <LogoCaixa className='logo-caixabank'/>
      </Link>
      <NavBarTitleButtons />
      <WaitTimeBar />
      <div className="custom-div-2-dates-page">
        <div className="custom-overlap-group-dates-page">
          <div className="custom-component-dates-page">
            <img className="custom-https-lottiefiles-dates-page" alt="Https lottiefiles" src={check} />
            <div className='first-condition'>
              <p className="custom-text-wrapper-dates-page">
                <img className='first-position' alt='1' src={one} />Planificar
              </p>
            </div>
            <div className="component-dates-page">
              <p className="p-dates-page">Selecciona una fecha para la cita:</p>
              <Calendar
                onChange={date => {
                  setSelectedDate(date);
                }}
                value={selectedDate}
              />
              <div className="box-dates-page">
                <div className="rectangle-dates-page">
                  <p className="p-dates-page-2">Seleciona la hora de la cita:</p>
                  <div className="hour-buttons">
                    <button className="hour-button" onClick={() => handleTimeSelection("9:00 AM")}>9:00 AM</button>
                    <button className="hour-button" onClick={() => handleTimeSelection("11:00 AM")}>11:00 AM</button>
                    <button className="hour-button" onClick={() => handleTimeSelection("1:00 PM")}>1:00 PM</button>
                    <button className="hour-button" onClick={() => handleTimeSelection("3:00 PM")}>3:00 PM</button>
                    <button className="hour-button" onClick={() => handleTimeSelection("5:00 PM")}>5:00 PM</button>
                  </div>
                  <p className='selection-date-wrapper'>Fecha seleccionada: </p>
                  <p className='selection-date'>{selectedDate.toDateString()} a las {selectedTime}</p>
                  {showContinueButton && ( // Mostrar el botón "Continuar" cuando se ha seleccionado la fecha y la hora
                    <button className="continuar-button">Continuar</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatesPage;
