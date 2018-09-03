import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <ul>
          <li><a href="#">Login</a></li>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/new-contact">+ Contact</NavLink></li>
          <li><NavLink to="/contact-list">Contact List</NavLink></li>
          <li><NavLink to="/record-interaction">+ Interactions</NavLink></li>
          <li><NavLink to="/interactions">Interactions</NavLink></li>
          {/* <li><a href="http://localhost:8080/api/interactions">Prove Interactions</a></li> */}
        </ul>
      </nav>
    </div>
  );
}