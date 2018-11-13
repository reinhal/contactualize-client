import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {deleteContact, fetchContact} from '../actions';
import Contact from './Contact';

import './styles/ContactList.css';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null
    };

    this.deleteContact = this.deleteContact.bind(this);
  }

  deleteContact(id) {
    this.props.dispatch(deleteContact(id))
  }
 
  componentDidMount() {
    this.props.dispatch(fetchContact())
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
    } else if (Array.isArray(this.props.contacts)){
        const contacts = this.props.contacts.map((contact, index) => (
          <li className="contact-item" key={this.props.contacts.index}>
            <Contact
              deleteContact={this.deleteContact}
              key={this.props.index}
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

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ContactList);
