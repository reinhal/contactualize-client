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
        <div className='interaction-border'>
          <section className='interaction-copy-container'>
            <div>
              <h3 className='interaction-title'>{this.props.title} <span className='spanText'>with</span> Contact Name</h3>
              <p>{this.props.text}</p>
              <Link className="edit-interaction-link" to={`/edit-interaction/${this.props.id}`}><i className="far fa-edit"></i> Edit</Link>
              <button 
                    className ="delete-interaction" 
                    type="submit" 
                    data-a11y-dialog-hide aria-label="Delete this interaction."
                    onClick={this.handleDeleteInteraction}><i className="far fa-trash-alt"></i> Delete  
              </button>
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