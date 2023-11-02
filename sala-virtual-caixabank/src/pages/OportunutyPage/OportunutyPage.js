import React from 'react';
import './OportunutyPage.css';
import { Link } from 'react-router-dom';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.png'


const OportunutyPage = () => {
  return (
    <>
      <Link to="/" className="go-back-link-oportunidades">
        <span className="back-arrow-oportunidades">←</span>
      </Link>
      <div className="custom-div-2-oportunidades-page">
        <div className="custom-overlap-group-oportunidades-page">
          <div className="component-oportunidades-page">
            <p className="text-wrapper-oportunidades-page">Descubre</p>
            <div className='link-frames-oportunidades'>
              <div className="shadow-box">
                <div className="label-tarjeta">Seguros</div>
                <img alt='oportunidades' src={image1} className='arrow-oportunidades' />
                <p className='text-images-oport'>Disfruta el doble con tu seguro de salud</p>
              </div>
              <div className="shadow-box">
                <div className="label-tarjeta">Mobilidad</div>
                <img alt='oportunidades' src={image2} className='arrow-oportunidades' />
                <p className='text-images-oport'>Descubre el renting de la gama KIA</p>
              </div>
              <div className="shadow-box">
                <div className="label-tarjeta">Tarjetas</div>
                <img alt='oportunidades' src={image3} className='arrow-oportunidades' />
                <p className='text-images-oport'>Fracciona el pago de tus compras al mismo precio</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OportunutyPage