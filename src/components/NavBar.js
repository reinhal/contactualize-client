import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <ul>
          <li className="nav-link" ><a href="#">Login</a></li>
          <li className="nav-link" ><NavLink to="/home">Home</NavLink></li>
          <li className="nav-link" ><NavLink to="/new-contact">+ Contact</NavLink></li>
          {/* <li className="nav-link" ><NavLink to="/contact-list">Contact List</NavLink></li> */}
          <li className="nav-link" ><NavLink to="/record-interaction">+ Interactions</NavLink></li>
          {/* <li className="nav-link" ><NavLink to="/interactions">Interactions</NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
}