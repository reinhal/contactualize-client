import React from 'react';

import './styles/Interaction.css';

export default function Interaction(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='interaction'>
          <button class ="delete-interaction" type="submit" data-a11y-dialog-hide aria-label="Delete this interaction."><i class="far fa-trash-alt"></i></button>
          <button class ="edit-interaction" type="submit" data-a11y-dialog-hide aria-label="Edit this interaction"><i class="far fa-edit"></i></button>
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