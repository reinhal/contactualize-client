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
          <DeleteInteraction interactionID={props.id}/>
          <EditInteraction interactionID={props.id}/>
            <h2><Link to="/contacts/{props.person}">{props.title}</Link></h2>
            <p>{props.text}</p>
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