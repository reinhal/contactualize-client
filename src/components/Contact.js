import React from 'react';
import DeleteContact from './DeleteContact';
import './styles/Contact.css';

  
export default function Contact(props){
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
          <DeleteContact />
          <button className ="edit-contact" type="submit" data-a11y-dialog-hide aria-label="Edit this contact"><i className="far fa-edit"></i></button>
            <h2>{props.person}</h2>
            <p>{props.notes}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
 

Contact.defaultProps = {
  person: '',
  notes: ''
};