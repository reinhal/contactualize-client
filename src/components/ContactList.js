import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {deleteContact, fetchContact} from '../actions';
import Contact from './Contact';

import './styles/ContactList.css';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   contacts: null
    // };

    this.deleteContact = this.deleteContact.bind(this);
  }

  deleteContact(id) {
    this.props.dispatch(deleteContact(id))
  }
 
  componentDidMount() {
    this.props.dispatch(fetchContact())
  }

  render() {
    console.log(this.props);
    let main;
    if(this.props.error) {
      main = (
        <div className="message message-error">{this.props.error}</div>
      );
    } else if (this.props.loading) {
      main = (
        <div className="message message-default">Loading contacts...</div>
      );
    } else if (Array.isArray(this.props.contacts)){
        const contacts = this.props.contacts.map((contact, index) => (
          <li className="contact-item" key= {`contact-${index}`}>
            <Contact
              key= {`contact-${index}`}
              deleteContact={this.deleteContact}
              {...contact}
            />
          </li>
        ));
        console.log('contacts', contacts);
        main = <ul>{contacts}</ul>;
    } 
    return (
      <Fragment>{main}</Fragment>
    );
  }
}

ContactList.defaultProps = {
  name: '',
  notes: '',
  contacts: null
};

const mapStateToProps = state => ({
  contacts: state.contactReducer.contacts
});

export default connect(mapStateToProps)(ContactList);
