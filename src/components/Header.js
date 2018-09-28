import React from 'react';

import NavBar from './NavBar';
import Title from './Title';
import './styles/Header.css';

export default function Header() {
  return (
    <div className="header-bckgrnd">
      <NavBar />
      <Title />
    </div>
  );
}