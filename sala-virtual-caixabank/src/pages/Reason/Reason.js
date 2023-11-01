import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reason.css';
import WaitTimeBar from '../../components/WaitTimeBar/WaitTimeBar';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import chat from '../../images/chat-text.png';
import two from '../../images/two.png';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';


const Reason = () => {
  return (
    <div className="desktop-content-dates-page">
      <Link to="/">
        <LogoCaixa className='logo-caixabank' />
      </Link>
      <NavBarTitleButtons />
      <WaitTimeBar />
      <div className="custom-div-2-dates-page">
        <div className="custom-overlap-group-dates-page">
          <div className="custom-component-dates-page">
            <img className="custom-https-lottiefiles-dates-page" alt="Https lottiefiles" src={chat} />
            <div className='first-condition'>
              <p className="custom-text-wrapper-dates-page">
                <img className='first-position' alt='1' src={two} />Planificar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reason