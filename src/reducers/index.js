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
  ],
  contact: {
    id:'',
    person: '',
    notes: ''
  },
  interaction: {
    id: '',
    title: '',
    text: '',
    person_id: ''
  } 
};

export const contactReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CONTACT_REQUEST || 
      action.type === actions.DELETE_CONTACT_REQUEST ||
      action.type === actions.FETCH_INTERACTION_REQUEST ||
      action.type === actions.DELETE_INTERACTION_REQUEST) {
        return Object.assign({}, state, {
          error: null,
          loading: true
        });
  }
  if (action.type === actions.FETCH_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
        contacts: action.contacts
    })
  }
  if (action.type === actions.ADD_CONTACT_REQUEST) {
    return Object.assign({}, state, {
      contacts: [...state.contacts, {
          userId: action.userId,
          person: action.person,
          notes: action.notes
      }]  
    });
  }
  if (action.type === actions.FETCH_THIS_CONTACT_REQUEST) {
    return Object.assign({}, state, {
      contact: state.contact || action.contact
    });
  }

  if (action.type === actions.FETCH_THIS_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
      contact: action.contact || state.contact
    });
  }

  if (action.type === actions.DELETE_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
      contacts: [...state.contacts.filter(
        contact => contact.id !== action.id
      )]
    });
  }
  if (action.type === actions.UPDATE_CONTACT_REQUEST) {
    return Object.assign({}, state, {
        contacts: [...state.contacts, {
            id: action.id,
            person: action.person,
            notes: action.notes
        }]  
    });
  }
  if (action.type === actions.UPDATE_CONTACT_SUCCESS) {
    return Object.assign({}, state, {
      contact: state.contact
    })
  }
  if (action.type === actions.FETCH_THIS_INTERACTION_REQUEST ||
      action.type === actions.FETCH_THIS_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
      interaction: action.interaction || state.interaction
    });
  }

  // reducers are a lot of stuff, whenever I render and I receive
  // data from REdux, make sure the data is receive, if not
  // crash the application

  if (action.type === actions.FETCH_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
        interactions: [...action.interactions]
    })
  }
  if (action.type === actions.ADD_INTERACTION_REQUEST) {
    return Object.assign({}, state, {
        interactions: [...state.interactions, {
            person_id: action.person_id,
            title: action.title,
            text: action.text
        }]  
    });
  }
  if (action.type === actions.ADD_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
        interactions: [...state.interactions, {
            person_id: state.person_id,
            title: state.title,
            text: state.text
        }]  
    });
  }
  if (action.type === actions.UPDATE_INTERACTION_REQUEST) {
    return Object.assign({}, state, {
        interactions: [...state.interactions, {
            person_id: action.person_id,
            title: action.title,
            text: action.text
        }]  
    });
  }
  if (action.type === actions.UPDATE_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
      interaction: state.interaction
    })
  }
  if (action.type === actions.DELETE_INTERACTION_SUCCESS) {
    return Object.assign({}, state, {
      interactions: [...state.interactions.filter(
        interaction => interaction.id !== action.id
      )]
    });
  } 
  return state;
};