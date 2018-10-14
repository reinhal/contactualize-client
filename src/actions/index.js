export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (person, notes) => ({
    type: ADD_CONTACT,
    person, 
    notes
});

export const ADD_INTERACTION = 'ADD_INTERACTION';
export const addInteraction = (person_id, title, text) => ({
    type: ADD_INTERACTION,
    person_id,
    title,
    text
});