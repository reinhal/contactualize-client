import React from 'react';


export default function AddContact() {
  return (
    <div>
      <main role="main">
        <section role="region">
          <form id="create-contact">
            <div class="form-section">
              <fieldset>
                <legend>Basic Contact Information</legend>
                <div>
                  <label for="first-name">First Name*</label>
                  <input type="text" name="first-name" value="enter a first name " required>  
                </div>
                <div>
                  <label for="last-name">Last Name*</label>
                  <input type="text" name="last-name" value="enter a last name" required>
                </div>
                <div>
                  <label for="email">Email*</label>
                  <input type="email" name="email" value="enter an email" required>
                </div>
                <div>
                  <label for="address">Address</label>
                  <input type="text" name="address" value="enter an address">
                </div>
                <div>
                  <label for="phone">Phone</label>
                  <input type="phone" name="phone" value="enter an phone">       
                </div>
                <div>
                  <label for="other-phone">Add Other Phones</label>
                  <input type="other-phone" name="other-phone" value="this is a placeholder to add other phones">
                </div>
                <div>
                  <label for="relationship">Relationship</label>
                  <input type="text" name="relationship" value="name your relationship">
                </div>
                <div>
                  <label for="job-title">Job Title</label>
                  <input type="text" name="job-title" value="enter a job title" required>
                </div>
                <div>
                  <label for="employment">Employment</label>
                  <input type="text" name="employment" value="place of business/employment" required>
                </div>
              </fieldset>
            </div>
            <div class="form-section">
              <fieldset>
                <legend>Additional Information</legend>
                <div>
                  <label for="birthday">Birthday</label>
                  <input type="text" name="birthday" value="enter an birthday">
                </div>
                <div>
                  <label for="important-dates">More Important Dates</label>
                  <input type="text" name="important-dates" value="this is a placeholder to add other important dates">
                </div>
                <div>
                  <label for="notes">Notes</label>
                  <textarea name="notes" rows="15"></textarea>
                </div>
              </fieldset>
            </div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </main>
    </div>
  );
}