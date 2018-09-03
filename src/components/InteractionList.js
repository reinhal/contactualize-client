import React,{Fragment} from 'react';

import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import Interaction from './Interaction';
import './styles/InteractionList.css';

export default class InteractionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: null
    };
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
        setTimeout(() => (
          this.setState({
            interactions: interactions,
            loading: false
          })
        ), 5000);
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