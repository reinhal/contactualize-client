import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <ul>
          <li><a className="nav-link" href="#">Login</a></li>
          <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/new-contact">+ Contact</NavLink></li>
          <li><NavLink className="nav-link" to="/contact-list">Contact List</NavLink></li>
          <li><NavLink className="nav-link" to="/record-interaction">+ Interactions</NavLink></li>
          <li><NavLink className="nav-link" to="/interactions">Interactions</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}