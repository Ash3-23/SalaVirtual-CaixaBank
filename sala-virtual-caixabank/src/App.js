import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeVirtualPage from './pages/HomeVirtualPage/HomeVirtualPage';
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import ModificatedPage from './pages/ModificatedPage/ModificatedPage';
import TuTurno from './pages/TurnPage/TurnPage';
import { TimeProvider } from './context/TimeContext/TimeContext'; // Importa el TimeProvider
import FeedBackPage from './pages/FeedBackPage/FeedBackPage';
import DatesPage from './pages/DatesPage/DatesPage';
import Reason from './pages/Reason/Reason';
import { CheckIn } from './pages/CheckIn/CheckIn';
import FinalPage from './pages/FinalPage/FinalPage';
import MembersPage from './pages/MembersPage/MembersPage';
import GamesPage from './pages/GamesPage/GamesPage';
import FuncionalidadesPage from './pages/FuncionalidadesPage/FuncionalidadesPage';
import OportunutyPage from './pages/OportunutyPage/OportunutyPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <TimeProvider>
          <Routes>
            <Route path="/" element={<HomeVirtualPage />} />
            <Route path="/tu-turno" element={<TuTurno />} />
            <Route path="/feedback" element={<FeedBackPage />} />
            <Route path="/modificar-cita" element={<ModificatedPage />} />
            <Route path="/date" element={<DatesPage />} />
            <Route path="/reason" element={<Reason />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/thanks" element={<FinalPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route element={<HeaderLayout />}>
              {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
              <Route path="/gaming" element={<GamesPage />} />
              <Route path="/oportunidades" element={<OportunutyPage />} />

              <Route path="/funcionalidades" element={<FuncionalidadesPage />} />

            </Route>
          </Routes>
        </TimeProvider>

      </BrowserRouter>
    </>
  );
}

export default App;