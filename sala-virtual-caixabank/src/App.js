import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeVirtualPage from './pages/HomeVirtualPage/HomeVirtualPage';
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import ModificatedPage from './pages/ModificatedPage/ModificatedPage';
import TuTurno from './pages/TurnPage/TurnPage';
import { TimeProvider } from './context/TimeContext/TimeContext'; // Importa el TimeProvider



function App() {
  return (
    <>
      <BrowserRouter>
        <TimeProvider>
          <Routes>
            
            <Route path="/" element={<HomeVirtualPage />} />
            <Route path="/tu-turno" element={<TuTurno />} />
            <Route path="/modificar-cita" element={<ModificatedPage />} />


            <Route element={<HeaderLayout />}>


              {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
            </Route>
          </Routes>
        </TimeProvider>

      </BrowserRouter>
    </>
  );
}

export default App;