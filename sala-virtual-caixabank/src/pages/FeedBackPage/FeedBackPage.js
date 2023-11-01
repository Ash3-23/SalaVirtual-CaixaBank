import React, { useState } from 'react';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa';
import './FeedBackPage.css';
import emoji1 from '../../images/emoji1.png'
import emoji2 from '../../images/emoji2.png'

import emoji3 from '../../images/emoji3.png'

import emoji4 from '../../images/emoji4.png'

import emoji5 from '../../images/emoji5.png'


const FeedBackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [emojiSelected, setEmojiSelected] = useState(null);
  const [showFinalizar, setShowFinalizar] = useState(false);

  // Función para manejar cambios en el input del feedback
  const handleFeedbackChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 150) {
      setFeedback(inputValue);
    }
  }

  // Función para manejar la selección de emojis
  const handleEmojiClick = (emoji) => {
    setEmojiSelected(emoji);
    setShowFinalizar(true);
  }

  // Función para finalizar
  const handleFinalizarClick = () => {
    // Coloca aquí la lógica para finalizar, por ejemplo, enviar los datos al servidor.
    console.log('Finalizado');
  }

  return (
    <div className="desktop-content">
      <LogoCaixa />
      <div className="sala-details-turn-page">
        <div className='sala-title-turn-page'>
          Sala Virtual
        </div>
      </div>
      <div className="feedback-container">
        <h2>¡Te agradeceríamos un poco de <span className="blue-text">FEEDBACK</span>!</h2>
        <div className='subtitle-h3'>
          <h3>¿Qué emoji representa mejor tu experiencia en la gestión?</h3>
        </div>
        <div className="emoji-container">
          <img alt="emoji" className="reaction-emoji" src={emoji1} onClick={() => handleEmojiClick('emoji1')} />
          <img alt="emoji" className="reaction-emoji" src={emoji2} onClick={() => handleEmojiClick('emoji2')} />
          <img alt="emoji" className="reaction-emoji" src={emoji3} onClick={() => handleEmojiClick('emoji3')} />
          <img alt="emoji" className="reaction-emoji" src={emoji4} onClick={() => handleEmojiClick('emoji4')} />
          <img alt="emoji" className="reaction-emoji" src={emoji5} onClick={() => handleEmojiClick('emoji5')} />
        </div>
        <div className="feedback-input">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Motivo:"
          />
          <p>{feedback.length}/150</p>
        </div>
        {showFinalizar && (
          <button className="finalizar-button" onClick={handleFinalizarClick}>
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}


export default FeedBackPage;
