
const initialState = {
  contacts: [
    {
      name: 'Anne',
      notes: 'Meet regarding material making for classroom'
    }
  ],
    // name: ['Anne', 'Michael', 'Fredrik', 'Louise'],
    // notes: ['Meet regarding material making for classroom', 'Plan a camping trip outside the Twin Cities.', 'Is looking for a new job and connections.', 'Would like to get together to make kimchi.']
  interactions: [
    {
      title: 'Coffee Date',
      text: 'Discussed plans for a trip'
    }
  ]
    // title: ['Coffee Date', 'Phone Call', 'Email', 'Dinner Meeting'],
    // text: ['Discussed plans for a trip', 'Went through ideas for the new website.', 'Followed up on last week\'s meeing', 'Asked about the surgery from the day before']
  
};

export const contactualizeReducer = (state=initialState) => {
  return state;
};