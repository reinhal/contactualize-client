import React, { Fragment } from 'react';
import ContactList from './ContactList';
import InteractionList from './InteractionList';
import {Link} from 'react-router-dom';

import './styles/DashboardWindow.css';

export default class  DashboardWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null, 
      loading: false
    };
  }

  render(index) {
    return (
      <Fragment>
        <div className="dashboard-window">
          <main role="main">
            <div className="row">
              <div className="col-6">
                <div className="contact-info-box">
                  <h2 className="manage-contacts">Manage Contacts</h2>
                  <ul>
                    <div>
                      <li><Link className="contact-dashboard-link" to="/new-contact">New Contact</Link></li>
                    </div>
                    <div>
                      <li><ContactList key={`contact-${index}`}/></li>
                    </div>     
                  </ul>
                </div>    
              </div>
            <div className="col-6">
                <div className="interaction-info-box">
                  <h2>Recent Interactions</h2>
                  <ul>
                    <div>
                      <li><Link className="interaction-dashboard-link" to="/record-interaction">New Interaction</Link></li>
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
      </Fragment>
    );
  }
}