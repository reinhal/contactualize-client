import React from 'react';
import {shallow} from 'enzyme';
import {users} from '../testData';
import SignUp from './SignUp';

describe('<SignUp />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUp values={users[0]}/>);
  });
}) 