import React from 'react';

import './styles/AddContactForm.css';

export default class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  // onSubmit(event) {
  //   event.preventDefault();
  //   const newPerson = this.newPersonInput.value.trim();
  //   if (newPerson && this.props.onAdd) {
  //     this.props.onAdd(newPerson);
  //   }
  //   const newNotes = this.newNotesInput.value.trim();
  //   if (newNotes && this.props.onAdd) {
  //     this.props.onAdd(newNotes);
  //   }

  //   this.newPersonInput.value = '';
  //   this.newNotesInput.value = '';
  // }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <form id="create-contact" onSubmit={this.props.submitFnc}>
          <fieldset>
            <legend>New Contact Information</legend>
            <div>
              <label htmlFor="name">Name*</label>
              <input id="person" className="newName" type="text" name="name" defaultValue="enter a name " required />
            </div>
            <div>
              <label htmlFor="notes">Notes*</label>
              <textarea id="notes" name="notes" rows="15" required></textarea>
            </div>
          </fieldset>
          <div className="add-contact-button"
            onClick={() => this.setEditing(true)}>
            <button type="submit">Create</button>
          </div>
        </form>
      );
    }
  }
}

// export default function AddContactForm() {
//   return (
//     <div>
//       <main role="main">
//         <section>
//           <form id="create-contact">
//             <div class="form-section">
//               <fieldset>
//                 <legend>New Contact Information</legend>
//                 <div>
//                   <label for="name">Name*</label>
//                   <input id="person" className="newName" type="text" name="name" value="enter a name " ref={input => this.newPersonInput = input}required />  
//                 </div>
//                 <div>
//                   <label for="notes">Notes</label>
//                   <textarea id="notes" name="notes" rows="15" ref={input => this.newNotesInput = input}required></textarea>
//                 </div>
//               </fieldset>
//             </div>
//             <button type="submit">Create</button>
//             <button type="reset">Reset</button>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// }