import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {deleteInteraction, fetchInteraction} from '../actions';
import Interaction from './Interaction';

import './styles/InteractionList.css';

class InteractionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      interactions: null
    };

    this.deleteInteraction = this.deleteInteraction.bind(this);
    // this.findContact = this.findContact.bind(this);
  }

  deleteInteraction(id) {
    this.props.dispatch(deleteInteraction(id))
  }

  componentDidMount() {
    this.props.dispatch(fetchInteraction())
  }

  // findContact(contacts, person_id) {
  //   console.log(contacts);
  //   let interactionContact;
  //   this.state.contacts.forEach((contact) => {
  //     if (contact._id === person_id) {
  //       interactionContact = contact.person;
  //     }
  //   });
  //   return interactionContact;
  // }

  render() {
    let main;
    if(this.state.error) {
      main = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading) {
      main = (
        <div className="message message-default">Loading interactions...</div>
      );
    } else if (Array.isArray(this.props.interactions)){
      const interactions = this.props.interactions.map((interaction, index) => (
        <li className="interaction-item" key={index}>
          <Interaction
            deleteInteraction={this.deleteInteraction}
            // findContact={this.findContact}
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