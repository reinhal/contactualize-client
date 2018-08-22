import React from 'react';
import Contact from './Contact';

import './styles/ContactList.css';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{
        name: 'Carl',
        notes: 'We need to go out for ice cream.'
      }, {
        name: 'Irma',
        notes: 'Weekly date to play cards and bake cookies.'
      }, {
        name: 'Bertha',
        notes: 'Monthly knitting lessons.'
      }, {
        name: 'William',
        notes: 'Yearly camping trip up north'
      }]
    }
  }

  render() {
    const contacts = this.state.contacts.map((contact, index) =>
      <li key={index}>
        <Contact {...contact}/>
      </li>
    );
    return (
      <div>
        <h2>Contacts</h2>
        {contacts}
        <h3>{this.props.name}</h3>
        <p>{this.props.notes}</p>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: '',
  notes: ''
};