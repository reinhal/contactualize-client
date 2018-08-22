import React from 'react';

import './styles/Contact.css';

export default function Contact(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
            <h2>{props.name}</h2>
            <p>{props.notes}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.defaultProps = {
  name: '',
  notes: ''
};