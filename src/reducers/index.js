import {ADD_CONTACT, ADD_INTERACTION} from '../actions';

const initialState = {};

export const contactReducer = (state=initialState, action) => {
  if (action.type === ADD_CONTACT) {
    return Object.assign({}, state, {
        name: [...state.name, action.name],
        notes: [...state.notes, action.notes],
        contactListIndex: [...state.contactListIndex, action.contactListIndex]
    });
  }
  return state;
};

export const interactionReducer = (state=intitialState, action) => {
  if (action.type === ADD_INTERACTION) {
    return Object.assign({}, state, {
      title: [...state.title, action.title],
      text: [...state.text, action.text],
      interactionListIndex: [...state.interactionListIndex, action.interactionListIndex]
    });
  }
  return state;
}