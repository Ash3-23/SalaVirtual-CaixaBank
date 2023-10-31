import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomeVirtualPage.css'
import DesktopSala from '../../containers/DesktopHome/DesktopHome';

const HomeVirtualPage = () => {
  return (
    <div className='container'>
      <NavBar />
      <DesktopSala />
    </div>
  )
}

export default HomeVirtualPage