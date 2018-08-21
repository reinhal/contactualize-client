import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

import './styles/DashboardWindow.css';

export default function DasboardWindow() {
  return (
    <div>
      <main role="main">
        <div class="row">
          <div class="col-4">
            <div class="info-box">
              <h3>Manage Contacts</h3>
              <ul>
                <div>
                  <li><Link to='/AddContact'>Create Contact</Link></li>
                </div>
                <div>
                <li><Link to='/ContactList'>Contact List</Link></li>
                </div>     
              </ul>
            </div>    
          </div>
          <div class="col-4">
            <div class="info-box">
              <h3>Manage Interactions</h3>
              <ul>
                <div>
                  <li><Link to='/NewInteraction'>Schedule Interactions</Link></li>
                </div>
                <div>
                <li><Link to='/InteractionList'>Upcoming Interactions</Link></li>
                </div>     
              </ul>
            </div>    
          </div>
        <div class="col-4">
            <div class="info-box">
              <h3>Important Notes</h3>
              <ul>
                <div>
                  <li>Note Linked to Contact</li>
                </div>
                <div>
                  <li>Note Linked to Contact</li>
                </div>
                <div>
                  <li>Note Linked to Contact</li>
                </div>
                <div>
                  <li>Note Linked to Contact</li>
                </div>
              </ul>
            </div>    
          </div>
        </div>
      </main>
    </div>
  );
}