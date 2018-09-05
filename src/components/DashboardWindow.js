import React from 'react';
import ContactList from './ContactList';
import InteractionList from './InteractionList';
import {Link} from 'react-router-dom';

import './styles/DashboardWindow.css';

export default function DasboardWindow() {
  return (
    <div>
      <main role="main">
        <div class="row">
          <div class="col-6">
            <div class="info-box">
              <h2>Manage Contacts</h2>
              <ul>
                <div>
                  <li><Link to="/new-contact">New Contact</Link></li>
                </div>
                <div>
                  <li><ContactList /></li>
                </div>     
              </ul>
            </div>    
          </div>
        <div class="col-6">
            <div class="info-box">
              <h2>Recent Interactions</h2>
              <ul>
                <div>
                  <li><Link to="/record-interaction">New Interaction</Link></li>
                </div>
                <div>
                  <li><InteractionList /></li>
                </div>
              </ul>
            </div>    
          </div>
        </div>
      </main>
    </div>
  );
}