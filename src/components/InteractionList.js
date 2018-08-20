import React from 'react';

import Interaction from './Interaction';
import '.styles/InteractionList.css';

export default function InteractionList() {
  render (
    <div>
      <h1>Interaction List</h1>
      <Interaction />
      <Interaction />
      <Interaction />
      <Interaction />
      <Interaction />
    </div>
  );
}