import React,{ Fragment } from 'react';

import {API_BASE_URL} from '../config';
import Contact from './Contact';
import {connect} from 'react-redux';

import './styles/ContactList.css';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      currentContact: null
    };
  }

  componentDidMount() {
    this.loadContact();
  }

  loadContact() {
    this.setState({
      error: null,
      loading: true
    });
    return fetch(`${API_BASE_URL}/contacts`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(contacts => {
        setTimeout(() => (
          this.setState({
            contacts: contacts,
            loading: false
          })
        ), 5000);
      })
      .catch(err =>
        this.setState({
          error: 'Could not load contacts',
          loading: false
        })
      );
  }
  render() {
    let main;
    if(this.state.error) {
      main = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading) {
      main = (
        <div className="message message-default">Loading contacts...</div>
      );
    } else if (Array.isArray(this.state.contacts)){
        const contacts = this.state.contacts.map((contact, index) => (
          <li className="contact-item" key={index}>
            <Contact 
              index={index}
              {...contact} 
            />
          </li>
        ));
        main = <ul>{contacts}</ul>;
    }
    return (
      <Fragment>{main}</Fragment>
    );
  }
}
// one part of state is all contacts, as soon as someone "picks", then the state updates
// re-renders

ContactList.defaultProps = {
  name: '',
  notes: ''
};