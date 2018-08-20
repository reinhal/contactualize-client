import React from 'react';


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
                  <li><a href="new_contact.html">Create Contact</a></li>
                </div>
                <div>
                  <li><a href="contact_list.html">Contact List</a></li>
                </div>     
              </ul>
            </div>    
          </div>
          <div class="col-4">
            <div class="info-box">
              <h3>Manage Interactions</h3>
              <ul>
                <div>
                  <li><a href="schedule.html">Schedule Interactions</a></li>
                </div>
                <div>
                  <li><a href="interactions.html">Upcoming Interactions</a></li>
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