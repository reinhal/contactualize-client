import React, { Fragment } from 'react';
import {API_BASE_URL} from '../config';
import { connect } from 'react-redux';
import {deleteInteraction} from '../actions';
import Interaction from './Interaction';

import './styles/InteractionList.css';

class InteractionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: null
    };

    this.deleteInteraction = this.deleteInteraction.bind(this);
    this.findContact = this.findContact.bind(this);
  }

  deleteInteraction(id) {
    this.props.dispatch(deleteInteraction(id))
  }

  componentDidMount() {
    this.loadContact();
    this.loadInteraction();
  }

  loadInteraction() {
    this.setState({
      error: null, 
      loading: true
    });
    return fetch(`${API_BASE_URL}/interactions`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(interactions => {
        this.setState({
          interactions: interactions,
          loading: false
        })
      })
      .catch(err => 
        this.setState({
          error: 'Could not load interactions',
          loading: false
        })
      );
  }

  loadContact() {
    this.setState({
      contactError: null,
      contactLoading: true
    });
    return fetch(`${API_BASE_URL}/contacts`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(contacts => {
        this.setState({
          contacts: contacts,
          contactLoading: false
        })
      })
      .catch(err =>
        this.setState({
          contactError: 'Could not load contacts',
          contactLoading: false
        })
      );
  }

  findContact(contacts, person_id) {
    console.log(contacts);
    let interactionContact;
    this.state.contacts.forEach((contact) => {
      if (contact._id === person_id) {
        interactionContact = contact.person;
      }
    });
    return interactionContact;
  }

  render() {
    let main;
    if(this.state.error || this.state.contactError) {
      main = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading || this.state.contactLoading) {
      main = (
        <div className="message message-default">Loading interactions...</div>
      );
    } else if (Array.isArray(this.state.interactions) && Array.isArray(this.state.contacts)) {
      const interactions = this.state.interactions.map((interaction, index) => (
        <li className="interaction=item" key={index}>
          <Interaction
            deleteInteraction={this.deleteInteraction}
            findContact={this.findContact}
            index={index}
            {...interaction}
          />
        </li>
      ));
      main = <ul>{interactions}</ul>
    }
    return (
      <Fragment>{main}</Fragment>
    );
  }
}

Interaction.defaultProps = {
  title: '',
  text: ''
};

const mapStateToProps = state => ({
  interactions: state.interactions
});

export default connect(mapStateToProps)(InteractionList);