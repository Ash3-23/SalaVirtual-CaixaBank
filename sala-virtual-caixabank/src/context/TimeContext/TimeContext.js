// TimeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [tiempoRestante, setTiempoRestante] = useState(10); // 5 minutos en segundos 300
  // Resto de tu código para actualizar el tiempoRestante

  return (
    <TimeContext.Provider value={{ tiempoRestante, setTiempoRestante }}>
      {children}
    </TimeContext.Provider>
  );
}

export function useTime() {
  return useContext(TimeContext);
};