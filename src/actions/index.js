import {API_BASE_URL} from '../config';


// ---------------  Getting Contacts --------------------------- //

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const fetchContactRequest = () => ({
    type: FETCH_CONTACT_REQUEST
});

export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const fetchContactSuccess = contacts => ({
    type: FETCH_CONTACT_SUCCESS,
    contacts
});

export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR';
export const fetchContactError = contacts => ({
    type: FETCH_CONTACT_ERROR,
    contacts
});

export const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());
    return fetch(`${API_BASE_URL}/contacts`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contacts => dispatch(fetchContactSuccess(contacts)))
        .catch(error => fetchContactError(error));
}

// ---------------  Creating Contacts --------------------------- //

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const addContactRequest = (person, notes) => ({
    type: ADD_CONTACT_REQUEST,
    person, 
    notes
});

export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const addContactSuccess = (person, notes) => ({
    type: ADD_CONTACT_SUCCESS,
    person, 
    notes
});

export const ADD_CONTACT_ERROR = 'ADD_CONTACT_SUCCESS';
export const addContactError = (person, notes) => ({
    type: ADD_CONTACT_ERROR,
    person, 
    notes
});

export const addContact = (contactData, cb) => dispatch => {
    dispatch(addContactRequest());
    fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => cb(contact))
        .catch(error => addContactError(error));
}

// ---------------  Updating Contacts --------------------------- //

export const UPDATE_CONTACT_REQUEST = 'UPDATE_CONTACT_REQUEST';
export const updateContactRequest = (person, notes, id) => ({
    type: UPDATE_CONTACT_REQUEST,
    person, 
    notes, 
    id
});

export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const updateContactSuccess = (person, notes) => ({
    type: UPDATE_CONTACT_SUCCESS,
    person, 
    notes
});

export const UPDATE_CONTACT_ERROR = 'UPDATE_CONTACT_ERROR';
export const updateContactError = (person, notes) => ({
    type: UPDATE_CONTACT_ERROR,
    person, 
    notes
});

export const updateContact = (contactData, cb) => dispatch => {
    console.log(contactData, 'Contact Data');
    dispatch(updateContactRequest());
    fetch(`${API_BASE_URL}/contacts/${contactData.id}`, {
        method: 'PUT',
        body: JSON.stringify(contactData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contactData => cb(contactData))
        .catch(error => updateContactError(error));
}

// ---------------  Deleting Contacts --------------------------- //

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const deleteContactRequest = (id) => ({
    type: DELETE_CONTACT_REQUEST,
    id
});

export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const deleteContactSuccess = (id) => ({
    type: DELETE_CONTACT_SUCCESS,
    id
});

export const DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR';
export const deleteContactError = (id) => ({
    type: DELETE_CONTACT_ERROR,
    id
});

export const deleteContact = (id) => dispatch => {
    dispatch(deleteContactRequest(id));
    fetch(`${API_BASE_URL}/contacts/${id}`, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.statusText;
        })
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => console.error(error));
}
// ---------------  Getting Interactions --------------------------- //

export const FETCH_INTERACTION_REQUEST = 'FETCH_INTERACTION_REQUEST';
export const fetchInteractionRequest = () => ({
    type: FETCH_INTERACTION_REQUEST
});

export const FETCH_INTERACTION_SUCCESS = 'FETCH_INTERACTION_SUCCESS';
export const fetchInteractionSuccess = interactions => ({
    type: FETCH_INTERACTION_SUCCESS,
    interactions
});

export const FETCH_INTERACTION_ERROR = 'FETCH_INTERACTION_ERROR';
export const fetchInteractionError = interactions => ({
    type: FETCH_INTERACTION_ERROR,
    interactions
});

export const fetchInteraction = () => dispatch => {
    dispatch(fetchInteractionRequest());
    return fetch(`${API_BASE_URL}/interactions`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(interactions => dispatch(fetchInteractionSuccess(interactions)))
        .catch(error => fetchInteractionError(error));
}

// ---------------  Creating Interactions --------------------------- //

export const ADD_INTERACTION_REQUEST = 'ADD_INTERACTION_REQUEST';
export const addInteractionRequest = (person_id, person, title, text) => ({
    type: ADD_INTERACTION_REQUEST,
    person_id,
    person,
    title,
    text
});

export const ADD_INTERACTION_SUCCESS = 'ADD_INTERACTION_SUCCESS';
export const addInteractionSuccess = (person_id, person, title, text) => ({
    type: ADD_INTERACTION_SUCCESS,
    person_id,
    person,
    title,
    text
});

export const ADD_INTERACTION_ERROR = 'ADD_INTERACTION_ERROR';
export const addInteractionError = (person_id, person, title, text) => ({
    type: ADD_INTERACTION_ERROR,
    person_id,
    person,
    title,
    text
});

export const addInteraction = (interactionData, cb) => dispatch => {
    dispatch(addInteractionRequest());
    fetch(`${API_BASE_URL}/interactions`, {
        method: 'POST',
        body: JSON.stringify(interactionData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(interaction => cb(interaction))
        .catch(error => addInteractionError(error));
}

// ---------------  Updating Interactions --------------------------- //

export const UPDATE_INTERACTION_REQUEST = 'UPDATE_INTERACTION_REQUEST';
export const updateInteractionRequest = (person_id, title, text, id) => ({
    type: UPDATE_INTERACTION_REQUEST,
    person_id,
    title,
    text, 
    id
});

export const UPDATE_INTERACTION_SUCCESS = 'UPDATE_INTERACTION_SUCCESS';
export const updateInteractionSuccess = (person_id, title, text) => ({
    type: UPDATE_INTERACTION_SUCCESS,
    person_id,
    title,
    text
});

export const UPDATE_INTERACTION_ERROR = 'UPDATE_INTERACTION_ERROR';
export const updateInteractionError = (person_id, title, text) => ({
    type: UPDATE_INTERACTION_ERROR,
    person_id,
    title,
    text
});

export const updateInteraction = (interactionData, cb) => dispatch => {
    dispatch(updateInteractionRequest());
    fetch(`${API_BASE_URL}/interactions/${interactionData.id}`, {
        method: 'PUT',
        body: JSON.stringify(interactionData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(interactionData => cb(interactionData))
        .catch(error => updateInteractionError(error));
}

// ---------------  Deleting Interactions --------------------------- //

export const DELETE_INTERACTION_REQUEST = 'DELETE_INTERACTION_REQUEST';
export const deleteInteractionRequest = (id) => ({
    type: DELETE_INTERACTION_REQUEST,
    id
});

export const DELETE_INTERACTION_SUCCESS = 'DELETE_INTERACTION_SUCCESS';
export const deleteInteractionSuccess = (id) => ({
    type: DELETE_INTERACTION_SUCCESS,
    id
});

export const DELETE_INTERACTION_ERROR = 'DELETE_INTERACTION_ERROR';
export const deleteInteractionError = (id) => ({
    type: DELETE_INTERACTION_ERROR,
    id
});

export const deleteInteraction = (id) => dispatch => {
    dispatch(deleteInteractionRequest(id));
    fetch(`${API_BASE_URL}/interactions/${id}`, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.statusText;
        })
        .then(() => dispatch(deleteInteractionSuccess(id)))
        .catch(error => console.error(error));
}