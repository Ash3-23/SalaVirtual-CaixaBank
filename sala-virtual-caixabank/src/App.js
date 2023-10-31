import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeVirtualPage from './pages/HomeVirtualPage/HomeVirtualPage';
import HeaderLayout from './components/HeaderLayout/HeaderLayout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeVirtualPage />} />
          <Route element={<HeaderLayout />}>
            {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
            {/* <Route path="/locals" element={<Locals />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;