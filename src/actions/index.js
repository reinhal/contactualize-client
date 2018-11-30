import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

export const fetchContact = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchContactRequest());
    return fetch(`${API_BASE_URL}/contacts`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contacts => dispatch(fetchContactSuccess(contacts)))
        .catch(error => fetchContactError(error));
}

// --------------- Fetching A Specific Contact ------------------ //

export const FETCH_THIS_CONTACT_REQUEST = 'FETCH_THIS_CONTACT_REQUEST';
export const fetchThisContactRequest = (id, person, notes) => ({
    type: FETCH_THIS_CONTACT_REQUEST,
    id,
    person, 
    notes
});

export const FETCH_THIS_CONTACT_SUCCESS = 'FETCH_THIS_CONTACT_SUCCESS';
export const fetchThisContactSuccess = (contact) => ({
    type: FETCH_THIS_CONTACT_SUCCESS,
    contact
});

export const FETCH_THIS_CONTACT_ERROR = 'FETCH_THIS_CONTACT_ERROR';
export const fetchThisContactError = (person, notes) => ({
    type: FETCH_THIS_CONTACT_ERROR,
    person, 
    notes
});

export const fetchThisContact = (id, person, notes) => (dispatch, getState) => {
    dispatch(fetchThisContactRequest(id, person, notes));
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/contacts/${id}`, {
        headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => dispatch(fetchThisContactSuccess(contact)))
        .catch(error => fetchThisContactError(error));
}


// ---------------  Creating Contacts --------------------------- //

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const addContactRequest = (userId, person, notes) => ({
    type: ADD_CONTACT_REQUEST,
    userId,
    person, 
    notes
});

export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const addContactSuccess = (userId, person, notes) => ({
    type: ADD_CONTACT_SUCCESS,
    userId,
    person, 
    notes
});

export const ADD_CONTACT_ERROR = 'ADD_CONTACT_SUCCESS';
export const addContactError = (person, notes) => ({
    type: ADD_CONTACT_ERROR,
    person, 
    notes
});

export const addContact = (contactData, cb) =>(dispatch, getState) => {
    dispatch(addContactRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => normalizeResponseErrors(res))
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
export const updateContactSuccess = (person, notes, id) => ({
    type: UPDATE_CONTACT_SUCCESS,
    person, 
    notes,
    id
});

export const UPDATE_CONTACT_ERROR = 'UPDATE_CONTACT_ERROR';
export const updateContactError = (person, notes, id) => ({
    type: UPDATE_CONTACT_ERROR,
    person, 
    notes, 
    id
});

export const updateContact = (contactData, cb) => (dispatch, getState) => {
    dispatch(updateContactRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/contacts/${contactData.id}`, {
        method: 'PUT',
        body: JSON.stringify(contactData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => normalizeResponseErrors(res))
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

export const deleteContact = (id) => (dispatch, getState) => {
    dispatch(deleteContactRequest(id));
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
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
export const fetchInteractionRequest = interactions => ({
    type: FETCH_INTERACTION_REQUEST,
    interactions
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

export const fetchInteraction = () => (dispatch, getState) => {
    dispatch(fetchInteractionRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/interactions`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(interactions => {/*console.log('INTERACTIONS', interactions);*/dispatch(fetchInteractionSuccess(interactions))})
        .catch(error => fetchInteractionError(error));
}
// ---------------  Getting A Specific Interaction --------------------------- //
export const FETCH_THIS_INTERACTION_REQUEST = 'FETCH_THIS_INTERACTION_REQUEST';
export const fetchThisInteractionRequest = (id, person_id, title, text) => ({
    type: FETCH_THIS_INTERACTION_REQUEST,
    id,
    person_id,
    title,
    text
});

export const FETCH_THIS_INTERACTION_SUCCESS = 'FETCH_THIS_INTERACTION_SUCCESS';
export const fetchThisInteractionSuccess = (interaction) => ({
    type: FETCH_THIS_INTERACTION_SUCCESS,
    interaction
});

export const FETCH_THIS_INTERACTION_ERROR = 'FETCH_THIS_INTERACTION_ERROR';
export const fetchThisInteractionError = (person_id, title, text) => ({
    type: FETCH_THIS_INTERACTION_ERROR,
    person_id,
    title,
    text
});

export const fetchThisInteraction = (id, person_id, title, text) => (dispatch, getState) => {
    dispatch(fetchThisInteractionRequest(id, person_id, title, text));
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/interactions/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(interaction => dispatch(fetchThisInteractionSuccess(interaction)))
        .catch(error => fetchThisInteractionError(error));
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

export const addInteraction = (interactionData, cb) => (dispatch, getState) => {
    dispatch(addInteractionRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/interactions`, {
        method: 'POST',
        body: JSON.stringify(interactionData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => normalizeResponseErrors(res))
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

export const updateInteraction = (interactionData, cb) => (dispatch, getState) => {
    dispatch(updateInteractionRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/interactions/${interactionData.id}`, {
        method: 'PUT',
        body: JSON.stringify(interactionData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => normalizeResponseErrors(res))
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

export const deleteInteraction = (id) => (dispatch, getState) => {
    dispatch(deleteInteractionRequest(id));
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/interactions/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.statusText;
        })
        .then(() => dispatch(deleteInteractionSuccess(id)))
        .catch(error => console.error(error));
}