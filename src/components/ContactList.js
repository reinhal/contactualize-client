import React from 'react';
import {connect} from 'react-redux';
import Contact from './Contact';

import './styles/ContactList.css';

export class ContactList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contacts: [{
  //       name: 'Carl',
  //       notes: 'We need to go out for ice cream.'
  //     }, {
  //       name: 'Irma',
  //       notes: 'Weekly date to play cards and bake cookies.'
  //     }, {
  //       name: 'Bertha',
  //       notes: 'Monthly knitting lessons.'
  //     }, {
  //       name: 'William',
  //       notes: 'Yearly camping trip up north'
  //     }]
  //   }
  // }

  render() {
    const contacts = this.props.contacts.map((contact, index) =>
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

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ContactList);