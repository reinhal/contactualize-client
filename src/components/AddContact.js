import React from 'react';

import './styles/AddContact.css';

export default function AddContact() {
  return (
    <div>
      <main role="main">
        <section>
          <form id="create-contact">
            <div class="form-section">
              <fieldset>
                <legend>New Contact Information</legend>
                <div>
                  <label for="name">Name*</label>
                  <input type="text" name="name" value="enter a name " required />  
                </div>
                <div>
                  <label for="notes">Notes</label>
                  <textarea name="notes" rows="15" required></textarea>
                </div>
              </fieldset>
            </div>
            <button type="submit">Create</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </main>
    </div>
  );
}