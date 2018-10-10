import React, { Fragment } from 'react';
import {API_BASE_URL} from '../config';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import InteractionList from './InteractionList';
import {Link} from 'react-router-dom';

import './styles/DashboardWindow.css';

export default class DashboardWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null, 
      loading: false
    };
  }

  render(props) {
    return (
      <Fragment>
        <div>
          <main role="main">
            <div className="row">
              <div className="col-6">
                <div className="contact-info-box">
                  <h2>Manage Contacts</h2>
                  <ul>
                    <div>
                      <li><Link className="dashboard-link" to="/new-contact">New Contact</Link></li>
                    </div>
                    <div>
                      <li><ContactList /></li>
                    </div>     
                  </ul>
                </div>    
              </div>
            <div className="col-6">
                <div className="interaction-info-box">
                  <h2>Recent Interactions</h2>
                  <ul>
                    <div>
                      <li><Link className="dashboard-link" to="/record-interaction">New Interaction</Link></li>
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