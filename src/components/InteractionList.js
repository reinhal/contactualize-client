import React from 'react';

import Interaction from './Interaction';
import './styles/InteractionList.css';

export default class InteractionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactions: [{
        title: 'Coffee Date',
        text: 'Chatted about vacations. And a lot of other amazing information.'
      },  {
        title: 'Business Meeting',
        text: 'Discussed a new website.  And a lot of other amazing information.'
      },  {
        title: 'Dinner Out',
        text: 'Enjoyed good food.  And a lot of other amazing information.'
      }]
    }
  }
  
  render() {
    const interactions = this.state.interactions.map((interaction, index) =>
      <li key={index}>
        <Interaction {...interaction} />
      </li>
    );
    return (
      <div>
        <h2>Interactions</h2>
        {interactions}
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Interaction.defaultProps = {
  title: '',
  text: ''
};