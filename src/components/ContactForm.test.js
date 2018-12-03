import React from 'react';
import {shallow} from 'enzyme';

import ContactForm from './ContactForm';

describe('<ContactForm />', () => {
  it('Renders without crashing', () => {
    shallow(<ContactForm />);
  });

}) 