import React from 'react'
// import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import LogoCaixa from '../../components/LogoCaixa/LogoCaixa'

const ModificatedPage = () => {
  return (
    <div className="desktop-content">
      <Link to="/">
        <LogoCaixa />
      </Link>

    </div>
  )
}

export default ModificatedPage