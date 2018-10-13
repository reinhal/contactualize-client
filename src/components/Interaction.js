import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './styles/Interaction.css';

export default class Interaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      title: '',
      text: ''
    };
  
    this.handleDeleteInteraction = this.handleDeleteInteraction.bind(this);
  }

  handleDeleteInteraction(e) {
    e.preventDefault();
    this.props.deleteInteraction(this.props.id);
  }

  render(props) {
    return (
      <Fragment>
        <div>
          <section>
            <div className='copy-container'>
              <div className='interaction'>
                <h3><Link className="interaction-link" to="/contacts/{props.person}">{this.props.title}</Link></h3>
              </div>
              <div className="interaction-text">
                <p>{this.props.text}</p>
              </div>
              <div className="interaction">
                <p>{this.props.person && this.props.person.person}</p>
              </div>
              <div><Link className="edit-interaction-link" to={`/edit-interaction/${this.props.id}`}><i className="far fa-edit"></i> Edit</Link></div>
              <div>
                <button 
                  className ="delete-item" 
                  type="submit" 
                  data-a11y-dialog-hide aria-label="Delete this interaction."
                  onClick={this.handleDeleteInteraction}><i className="far fa-trash-alt"></i> Delete</button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
};

Interaction.defaultProps = {
  title: '',
  text: ''
};