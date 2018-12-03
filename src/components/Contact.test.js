import React from 'react';
import {render} from 'enzyme';

import Contact from './Contact';

describe('<Contact />', () => {

  it('Renders the edit link', () => {
    const wrapper = render(<Contact />);
    expect(wrapper.hasClass('edit-contact-link')).toEqual(true);
  });

  it('Renders the delete link', () => {
    const wrapper = render(<Contact />);
    expect(wrapper.hasClass('delete-contact')).toEqual(true);
  });
}) 