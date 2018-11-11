import {API_BASE_URL} from '../config';


// ---------------  Getting Contacts --------------------------- //

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const fetchContactRequest = contact => ({
    type: FETCH_CONTACT_REQUEST,
    contact
});

export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const fetchContactSuccess = contact => ({
    type: FETCH_CONTACT_SUCCESS,
    contact
});

export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR';
export const fetchContactError = contact => ({
    type: FETCH_CONTACT_ERROR,
    contact
});

export const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());
    fetch(`${API_BASE_URL}/contacts`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => {
            dispatch(fetchContactSuccess(contact));
        })
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

export const addContact = (contactData) => dispatch => {
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
        .then(contact => dispatch(addContactSuccess()))
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

export const updateContact = (contactData) => dispatch => {
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
        .then(contact => {
            dispatch(updateContactSuccess(contactData));
        })
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

export const deleteContact = () => dispatch => {
    dispatch(deleteContactRequest());
    fetch(`${API_BASE_URL}/contacts/:id`, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => {
            dispatch(deleteContactSuccess());
        })
        .catch(error => deleteContactError(error));
}
// ---------------  Getting Interactions --------------------------- //

export const FETCH_INTERACTION_REQUEST = 'FETCH_INTERACTION_REQUEST';
export const fetchInteractionRequest = interaction => ({
    type: FETCH_INTERACTION_REQUEST,
    interaction
});

export const FETCH_INTERACTION_SUCCESS = 'FETCH_INTERACTION_SUCCESS';
export const fetchInteractionSuccess = interaction => ({
    type: FETCH_INTERACTION_SUCCESS,
    interaction
});

export const FETCH_INTERACTION_ERROR = 'FETCH_INTERACTION_ERROR';
export const fetchInteractionError = interaction => ({
    type: FETCH_INTERACTION_ERROR,
    interaction
});

export const fetchInteraction = () => dispatch => {
    dispatch(fetchInteractionRequest());
    fetch(`${API_BASE_URL}/interactions`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => {
            dispatch(fetchInteractionSuccess(contact));
        })
        .catch(error => fetchInteractionError(error));
}

// ---------------  Creating Interactions --------------------------- //

export const ADD_INTERACTION_REQUEST = 'ADD_INTERACTION_REQUEST';
export const addInteractionRequest = (person_id, title, text) => ({
    type: ADD_INTERACTION_REQUEST,
    person_id,
    title,
    text
});

export const ADD_INTERACTION_SUCCESS = 'ADD_INTERACTION_SUCCESS';
export const addInteractionSuccess = (person_id, title, text) => ({
    type: ADD_INTERACTION_SUCCESS,
    person_id,
    title,
    text
});

export const ADD_INTERACTION_ERROR = 'ADD_INTERACTION_ERROR';
export const addInteractionError = (person_id, title, text) => ({
    type: ADD_INTERACTION_ERROR,
    person_id,
    title,
    text
});

export const addInteraction = (interactionData) => dispatch => {
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
        .then(interaction => {
            dispatch(addInteractionSuccess());
        })
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

export const updateInteraction = (interactionData) => dispatch => {
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
        .then(contact => {
            dispatch(updateInteractionSuccess(interactionData));
        })
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

export const deleteInteraction = () => dispatch => {
    dispatch(deleteInteractionRequest());
    fetch(`${API_BASE_URL}/interactions/:id`, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(contact => {
            dispatch(deleteInteractionSuccess());
        })
        .catch(error => deleteInteractionError(error));
}

//finished adding interaction: handles updating the state
// the async
// export const INTERACTION_ADDED = 'INTERACTION_ADDED';
// export const interactionAdded = (interaction) => ({
//     type: INTERACTION_ADDED,
//     interaction
// });
//person_id to find the contact and then push into that contact interactions array