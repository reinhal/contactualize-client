export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (name, notes, contactListIndex) => ({
  type: ADD_CONTACT, 
  name, 
  notes, 
  contactListIndex
});

export const ADD_INTERACTION = 'ADD_INTERACTION';
export const addInteraction = (name, notes, InteractionListIndex) => ({
  type: ADD_INTERACTION, 
  name, 
  notes, 
  InteractionListIndex
});