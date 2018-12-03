import React from 'react';
import {shallow} from 'enzyme';

import Interaction from './Interaction';

describe('<Interaction />', () => {
  it('Renders without crashing', () => {
    shallow(<Interaction />);
  });

  it('Renders the edit link', () => {
    const wrapper = shallow(<Interaction />);
    expect(wrapper.hasClass('edit-interaction-link')).toEqual(true);
  });

  it('Renders the delete link', () => {
    const wrapper = shallow(<Interaction />);
    expect(wrapper.hasClass('delete-interaction')).toEqual(true);
  });
}) 