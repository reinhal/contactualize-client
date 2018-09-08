import React from 'react';
import './styles/Contact.css'
export default function Contact(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
          <button class ="delete-contact" type="submit" data-a11y-dialog-hide aria-label="Delete this contact."><i class="far fa-trash-alt"></i></button>
          <button class ="edit-contact" type="submit" data-a11y-dialog-hide aria-label="Edit this contact"><i class="far fa-edit"></i></button>
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