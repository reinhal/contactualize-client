import React from 'react';

export default function Contact(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
            <h2>{props.person}</h2>
            <p>{props.notes}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.defaultProps = {
  person: '',
  notes: ''
};