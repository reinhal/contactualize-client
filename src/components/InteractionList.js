import React,{Fragment} from 'react';
import {API_BASE_URL} from '../config';
import { soFetch } from '../utils/index';
import Interaction from './Interaction';
import {connect} from 'react-redux';

import './styles/InteractionList.css';

export default class InteractionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: null
    };

    this.deleteInteraction = this.deleteInteraction.bind(this);
  }

  deleteInteraction(id) {
    return soFetch(`${API_BASE_URL}/interactions/${id}`, {
      method: 'DELETE'
    })
    .then(() =>
      this.setState({
        interactions: this.state.interactions.filter(c => c.id !== id)
      })
    )
    .catch(err => console.error(err));
  }

  componentDidMount() {
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
    } else if (Array.isArray(this.state.interactions)) {
      const interactions = this.state.interactions.map((interaction, index) => (
        <li className="interaction=item" key={index}>
          <Interaction
            deleteInteraction={this.deleteInteraction}
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