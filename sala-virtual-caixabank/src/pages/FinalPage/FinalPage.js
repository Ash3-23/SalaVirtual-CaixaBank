import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import NavBarTitleButtons from '../../components/NavBarTitleButtons/NavBarTitleButtons';
import './FinalPage.css';
import Dani from '../../images/Dani.jpg'
import Jairo from '../../images/Jairo.jpeg'
import Sara from '../../images/Sara.jpeg'
import Juliana from '../../images/Juliana.jpeg'
import Liset from '../../images/Liset.jpeg'
import Nerea from '../../images/Nerea.jpeg'


const FinalPage = () => {
  return (
    <div className="desktop-content-reason-page">
      <Link to="/">
        <LogoCaixa className="logo-caixabank" />
      </Link>
      <div className="final-sala-second-navbar">
        <div className="final-title-second-navbar">
          ¡Gracias por acceder a nuestra Sala Virtual!
        </div>
      </div>
        <h2 className='h2-final'>Esperamos que este espacio te haya sido útil.</h2>
        <h4>Descubre a los creadores:</h4>
        <div className="check-in-component-final-page">
        <div className="person-card">
          <img src={Juliana} alt="Person 1" className="person-image" />
          <p>Juliana Amorim</p>
        </div>
        <div className="person-card">
          <img src={Dani} alt="Person 2" className="person-image" />
          <p>Daniel Montaña</p>
        </div>
        <div className="person-card">
          <img src={Nerea} alt="Person 3" className="person-image" />
          <p>Nerea Trebol</p>
        </div>
        <div className="person-card">
          <img src={Liset} alt="Person 4" className="person-image" />
          <p>Liset Valderrama</p>
        </div>
        <div className="person-card">
          <img src={Jairo} alt="Person 5" className="person-image" />
            <p>Jairo Misael Vásquez</p>
        </div>
        <div className="person-card">
          <img src={Sara} alt="Person 6" className="person-image" />
          <p>Sara Velázquez</p>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;