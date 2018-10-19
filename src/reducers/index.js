// import {ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, ADD_INTERACTION, UPDATE_INTERACTION, DELETE_INTERACTION, INTERACTION_ADDED }


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
  return state;
};