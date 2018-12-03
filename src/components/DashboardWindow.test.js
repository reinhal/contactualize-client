import React from 'react';
import {shallow} from 'enzyme';

import DashboardWindow from './DashboardWindow';

describe('<DashboardWindow />', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardWindow />);
  });

}) 