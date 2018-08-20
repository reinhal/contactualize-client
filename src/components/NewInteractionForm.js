import React from 'react';


export default function NewInteractionForm() {
  render (
    <div>
      <header>
        <h1>Schedule an Interaction</h1> {//this will become a component}
      </header>
      <section role="region">
        <form id="create-contact">
          <div class="form-section">          
            <fieldset>
              <legend>Create a new interaction</legend>
              <h4>Choose interaction type:</h4>
              <div>
                <input class="interaction" id="phone-call" type="radio" name="interaction-type" value="phone-call">
                <label for="phone-call">Phone Call</label>
              </div>
              <div>
                <input class="interaction" id="email" type="radio" name="interaction-type" value="email">
                <label for="email">Email</label>
              </div>
              <div>
                <input class="interaction" id="text" type="radio" name="interaction-type" value="text">
                <label for="text">Text</label>
              </div>
              <div>
                <input class="interaction"  id="Visit " type="radio" name="interaction-type" value="Visit">
                <label for="Visit">Visit</label>
              </div>
              <h4><label for="frequency">Choose the frequency:</label></h4>
                <select id="frequency" name="select">
                  <option value="once">Once</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              <h4>Select date to start:</h4>
              <i class="fas fa-calendar-alt"></i>
            </fieldset>
          </div>
          <button type="submit">Create</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    </div>
  );
}