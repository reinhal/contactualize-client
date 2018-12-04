import React from 'react';
import {shallow} from 'enzyme';
import {users} from '../testData';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm user={users[0]}/>);
  });

}) 