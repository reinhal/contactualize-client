import React from 'react';
import DeleteInteraction from './DeleteInteraction';
import './styles/Interaction.css';

export default function Interaction(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='interaction'>
          <DeleteInteraction />
          <button className ="edit-interaction" type="submit" data-a11y-dialog-hide aria-label="Edit this interaction"><i class="far fa-edit"></i></button>
            <h2>{props.title}</h2>
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