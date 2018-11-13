import * as actions from '../actions';

const initialState = {
  contacts: [
    {
      "_id": "000000000000000000000001",
      "interactions": ["111111111111111111111111"],
      "person": "Anne",
      "notes": "Meet regarding material making for classroom"
    },  {
      "_id": "000000000000000000000002",
      "interactions": ["111111111111111111111112"],
      "person": "Michael",
      "notes": "Plan a camping trip outside the Twin Cities."
    },  {
      "_id": "000000000000000000000003",
      "interactions": ["111111111111111111111113"],
      "person": "Frederik",
      "notes": "Is looking for a new job and connections."
    },  {
      "_id": "000000000000000000000004",
      "interactions": ["111111111111111111111114"],
      "person": "Louise",
      "notes": "Would like to get together to make kimchi."
    }
  ],
  interactions: [
    {
      "person_id": "000000000000000000000001",
      "_id": "111111111111111111111111",
      "title": "Coffee Date",
      "text": "Discussed plans for a trip"
    },  {
      "person_id": "000000000000000000000002",
      "_id": "111111111111111111111112",
      "title": "Phone Call",
      "text": "Went through ideas for the new website."
    },  {
      "person_id": "000000000000000000000003",
      "_id": "111111111111111111111113",
      "title": "Email",
      "text": "Followed up on last week's meeing."
    }, {
      "person_id": "000000000000000000000004",
      "_id": "111111111111111111111114",
      "title": "Dinner Meeting",
      "text": "Asked about the surgery from the day before."
    }
  ]  
};

export const contactualizeReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CONTACT_REQUEST) {
    return Object.assign({}, state, {
          error: null,
          loading: true
        });
  }
  if (action.type === actions.FETCH_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
        contacts: [...action.contacts]
    })
  }
  if (action.type === actions.ADD_CONTACT_REQUEST) {
    let contacts = state.contacts.map((contact) => {
        return contact;
    })
    return Object.assign({}, state, {
      contacts: [...state.contacts, {
          person: action.person,
          notes: action.notes
      }]  
    });
  }
  if (action.type === actions.DELETE_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
      contacts: [...state.contacts, {
        person: action.person,
        notes: action.notes
      }]
    })
  }
  if (action.type === actions.UPDATE_CONTACT_REQUEST) {
    let contacts = state.contacts.map((contact) => {
        return contact;
    })
    return Object.assign({}, state, {
        contacts: [...state.contacts, {
            person: action.person,
            notes: action.notes,
            id: action.id
        }]  
    });
  }
  if (action.type === actions.FETCH_INTERACTION_REQUEST) {
    return Object.assign({}, state, {
          error: null,
          loading: true
        });
  }
  if (action.type === actions.FETCH_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
        interactions: [...action.interactions]
    })
  }
  if (action.type === actions.ADD_INTERACTION_REQUEST) {
    let interactions = state.interactions.map((interaction) => {
        return interaction;
    })
    return Object.assign({}, state, {
        interactions: [...state.interactions, {
            title: action.title,
            text: action.text
        }]  
    });
  }
  if (action.type === actions.UPDATE_INTERACTION_REQUEST) {
    let interactions = state.interactions.map((interaction) => {
        return interaction;
    })
    return Object.assign({}, state, {
        interactions: [...state.interactions, {
            title: action.title,
            text: action.text
        }]  
    });
  }
  
  return state;
};

// stays simple: changes to objects
// filter through the store by id