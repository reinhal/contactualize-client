import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {deleteInteraction, fetchInteraction} from '../actions';
import Interaction from './Interaction';

import './styles/InteractionList.css';

export class InteractionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      interactions: null
    };

    this.deleteInteraction = this.deleteInteraction.bind(this);
  }

  deleteInteraction(id) {
    this.props.dispatch(deleteInteraction(id))
  }

  componentDidMount() {
    this.props.dispatch(fetchInteraction())
  }

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
  interactions: state.contactReducer.interactions
});

export default connect(mapStateToProps)(InteractionList);