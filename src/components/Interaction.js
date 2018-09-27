import React from 'react';
import DeleteInteraction from './DeleteInteraction';
import EditInteraction from './EditInteraction';
import {Link} from 'react-router-dom';
import './styles/Interaction.css';

export default function Interaction(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='interaction'>
          {/* <EditInteraction interactionID={props.id}/> */}
            <h2><Link className="interaction-link" to="/contacts/{props.person}">{props.title}</Link></h2>
            <p>{props.text}</p>
            {/* have small text that shows the contact the interaction is associated with */}
            <h2><Link className="edit-interaction-link" to={`/edit-interaction/${props.id}`}><i class="far fa-edit"></i> Edit</Link></h2>
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