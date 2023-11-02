import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/Flecha.png';
import './FuncionalidadesPage.css'


const FuncionalidadesPage = () => {
  return (
    <>
      <Link to="/" className="go-back-link">
        <span className="back-arrow">←</span>
      </Link>
      <div className="custom-div-2-funcionalidades-page">
        <div className="custom-overlap-group-funcionalidades-page">
          <div className="component-funcionalidades-page">
            <p className="text-wrapper-funcionalidades-page">¿Sabías que esto lo
              puedes hacer desde Caixabank Now?</p>
            <div className='link-frames-funcionalidades'>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Identifícate    </div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Búsqueda, consulta y pago de un recibo</div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Consulta de liquidación de tarjetas</div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Habla con tu gestor a través de tu muro</div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Haz transferencias</div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
                <div className="frame-funcionalidades-page">
                  <div className="custom-text-wrapper-8-funcionalidades-page">Haz reintegros sin libreta ni tarjeta</div>
                  <img alt='arrow-funcionalidades' src={arrow} className='arrow' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FuncionalidadesPage