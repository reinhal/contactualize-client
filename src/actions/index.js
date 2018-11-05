export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (person, notes) => ({
    type: ADD_CONTACT,
    person, 
    notes, 
    contactID
});

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UpdateContact = (person, notes) => ({
    type: UPDATE_CONTACT,
    person, 
    notes,
    contactID
});

export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DeleteContact = (id) => ({
    type: DELETE_CONTACT,
    id
});

export const ADD_INTERACTION = 'ADD_INTERACTION';
export const addInteraction = (person_id, title, text) => ({
    type: ADD_INTERACTION,
    person_id,
    title,
    text
});

export const INTERACTION_ADDED = 'INTERACTION_ADDED';
export const interactionAdded = (interaction) => ({
    type: INTERACTION_ADDED,
    interaction
});
//person_id to find the contact and then push into that contact interactions array

export const UPDATE_INTERACTION = 'UPDATE_INTERACTION';
export const UpdateInteraction = (person_id, title, text) => ({
    type: UPDATE_INTERACTION,
    person_id,
    title,
    text
});

export const DELETE_INTERACTION = 'DELETE_INTERACTION';
export const DeleteInteraction = (id) => ({
    type: DELETE_INTERACTION,
    id
});

//finished adding interaction: handles updating the state