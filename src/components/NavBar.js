import React from 'react';
import {Link} from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <ul>
          <li><a href="#">Login</a></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/new-contact">+ Contact</Link></li>
          <li><Link to="/contact-list">Contact List</Link></li>
          <li><Link to="/record-interaction">+ Interactions</Link></li>
          <li><Link to="/interactions">Interactions</Link></li>
        </ul>
      </nav>
    </div>
  );
}