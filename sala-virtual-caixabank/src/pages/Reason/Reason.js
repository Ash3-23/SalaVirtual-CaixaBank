import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reason.css';
import WaitTimeBar from '../../components/WaitTimeBar/WaitTimeBar';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import chat from '../../images/chat-text.png';
import two from '../../images/two.png';

const Reason = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="desktop-content-reason-page">
      <Link to="/">
        <LogoCaixa className='logo-caixabank' />
      </Link>
      <NavBarTitleButtons />
      <WaitTimeBar />
      <div className="custom-div-2-reason-page">
        <div className="custom-overlap-group-reason-page">
          <div className="custom-component-reason-page">
            <img className="custom-https-lottiefiles-reason-page" alt="Https lottiefiles" src={chat} />
            <div className='first-condition-reason'>
              <p className="custom-text-wrapper-reason-page">
                <img className='first-position-reason' alt='1' src={two} />
                Detallar
              </p>
              <div className="component-reason-page">
                <p className="p-reason-page">Indica el motivo de la cita:</p>
                <textarea
                  rows="4"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="reason-input"
                  placeholder="Escribe aquí el motivo"
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                />
                <p className='input-value-reason'>{inputValue.length}/150</p>
              </div>

              <div className="box-reason-page">

              <Link className='underline-link' to="/check-in"> {/* Agrega un enlace al botón */}
                  <button
                    className={`continuar-button-2 ${inputValue ? 'blue' : ''}`}
                  >
                    Continuar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
