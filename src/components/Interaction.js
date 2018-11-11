import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/Interaction.css';

class Interaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person_id: '',
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
    console.log(this.props);
    // let contact = this.props.findContact(this.props.contacts, this.props.person_id);
    return (
      <Fragment>
        <div>
          <section>
            <div className='interaction-copy-container'>
              <div className='interaction'>
                <h3 className="interaction-title">{this.props.title}</h3>
              </div>
              <div className="interaction-text">
                <p>{this.props.text}</p>
              </div>
              <div className="interaction">
                <p>Contact Name</p>
                <p>{this.props.person}</p>
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
  person: '',
  title: '',
  text: ''
};

const mapStateToProps = state => ({
  interactions: state.interactions
});

export default connect(mapStateToProps)(Interaction);