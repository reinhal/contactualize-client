import React from 'react';
import DeleteInteraction from './DeleteInteraction';
import {Link} from 'react-router-dom';
import './styles/Interaction.css';

export default function Interaction(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='interaction'>
            <h3><Link className="interaction-link" to="/contacts/{props.person}">{props.title}</Link></h3>
            <p>{props.text}</p>
            <p>Contact Name</p>
            <div><Link className="edit-interaction-link" to={`/edit-interaction/${props.id}`}><i className="far fa-edit"></i> Edit</Link></div>
            <DeleteInteraction interactionID={props.id}/>
          </div>
        </div>
      </section>
    </div>
  );
};

Interaction.defaultProps = {
  title: '',
  text: ''
};