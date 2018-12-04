import React from 'react';
import {shallow} from 'enzyme';

import {Contact} from './Contact';

describe('<Contact />', () => {
  it('Renders without crashing', () => {
    shallow(<Contact />);
  });
}) 