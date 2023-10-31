import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo-CaixaBank-1 1.png';

const LogoCaixa = () => {
  return (
    <Link to='/'>
      <img className="logo-caixabank" alt="Logo caixabank" src={logo} />
    </Link>
  );
};

export default LogoCaixa;
