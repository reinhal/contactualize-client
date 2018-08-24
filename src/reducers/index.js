
const initialState = {
  contacts: [
    {
      name: 'Anne',
      notes: 'Meet regarding material making for classroom'
    },  {
      name: 'Michael',
      notes: 'Plan a camping trip outside the Twin Cities.'
    },  {
      name: 'Frederik',
      notes: 'Is looking for a new job and connections.'
    },  {
      name: 'Louise',
      notes: 'Would like to get together to make kimchi.'
    }
  ],
  interactions: [
    {
      title: 'Coffee Date',
      text: 'Discussed plans for a trip'
    },  {
      title: 'Phone Call',
      text: 'Went through ideas for the new website.'
    },  {
      title: 'Email',
      text: 'Followed up on last week\'s meeing'
    }, {
      title: 'Dinner Meeting',
      text: 'Asked about the surgery from the day before.'
    }
  ]
};

export const contactualizeReducer = (state=initialState) => {
  return state;
};