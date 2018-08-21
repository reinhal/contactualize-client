import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

import './styles/DashboardWindow.css';

export default function DasboardWindow() {
  return (
    <div>
      <main role="main">
        <div class="row">
          <div class="col-6">
            <div class="info-box">
              <h3>Manage Contacts</h3>
              <ul>
                <div>
                  <li><a href="new_contact.html">Create Contact</a></li>
                </div>
                <div>
                  <li><a href="contact_list.html">Contact List</a></li>
                </div>     
              </ul>
            </div>    
          </div>
        <div class="col-6">
            <div class="info-box">
              <h3>Important Notes</h3>
              <ul>
                <div>
                  <li>Some really interesting information.</li>
                </div>
                <div>
                  <li>Some really interesting information.</li>
                </div>
                <div>
                  <li>Some really interesting information.</li>
                </div>
                <div>
                  <li>Some really interesting information.</li>
                </div>
              </ul>
            </div>    
          </div>
        </div>
      </main>
    </div>
  );
}