import React from 'react'
// import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import people from '../../images/people.png';
import './ModificatedPage.css'
import WaitTimeBar from '../../components/WaitTimeBar/WaitTimeBar';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import arrow from '../../images/Flecha.png';

const ModificatedPage = () => {
  return (
    <div className="desktop-content-modificated-page">
      <Link to="/">
        <LogoCaixa />
      </Link>
      <NavBarTitleButtons />
      <WaitTimeBar />
      <div className="custom-div-2-modificated-page">
        <div className="custom-overlap-group-modificated-page">
          <div className="custom-component-modificated-page">
            <img className="custom-https-lottiefiles-modificated-page" alt="Https lottiefiles" src={people} />
            <p className="custom-text-wrapper-modificated-page">¿Quieres cambiar la cita?</p>
            <div className="custom-frame-modificated-page">
              <div className="custom-text-wrapper-8-modificated-page">Presencial</div>
              <img alt='arrow' src={arrow} className='arrow' />
            </div>
            <div className="custom-frame-modificated-page">
              <div className="custom-text-wrapper-8-modificated-page">Videollamada</div>
              <img alt='arrow' src={arrow} className='arrow' />
            </div>
            <div className="custom-frame-modificated-page">
              <div className="custom-text-wrapper-8-modificated-page">Gestor online</div>
              <img alt='arrow' src={arrow} className='arrow' />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ModificatedPage