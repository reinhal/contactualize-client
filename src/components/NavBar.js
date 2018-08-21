import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

import './styles/NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <i class="fas fa-bars"></i>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="dashboard.html">Home</a></li>
          <li><a href="new_contact.html">+ Contact</a></li>
          <li><a href="contact_list.html">Contact List</a></li>
          <li><a href="interactions.html">Interactions</a></li>
          <li><a href="record_interaction.html">+ Interaction</a></li>
        </ul>
      </nav>
    </div>
  );
}