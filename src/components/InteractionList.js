import React from 'react';
import {connect} from 'react-redux';
import Interaction from './Interaction';
import './styles/InteractionList.css';

export class InteractionList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     interactions: [{
  //       title: 'Coffee Date',
  //       text: 'Chatted about vacations. And a lot of other amazing information.'
  //     },  {
  //       title: 'Business Meeting',
  //       text: 'Discussed a new website.  And a lot of other amazing information.'
  //     },  {
  //       title: 'Dinner Out',
  //       text: 'Enjoyed good food.  And a lot of other amazing information.'
  //     }]
  //   }
  // }

  render(props) {
    console.log(this.props)
    const interactions = this.props.interactions.map((interaction, index) =>
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

const mapStateToProps = state => ({
  interactions: state.interactions
});

export default connect(mapStateToProps)(InteractionList);