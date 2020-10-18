import React from 'react';
import {shallow} from 'enzyme';
import Login from '../component/login';

describe('Test case for testing login', () => {
  let wrapper;

  //user name check
  test('username check', () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate('change', {target: {name: 'username', value: 'eshan'}});
    expect(wrapper.state('username')).toEqual('eshan');
  });

  //password check
  it('password check', () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="password"]')
      .simulate('change', {target: {name: 'password', value: 'eshan'}});
    expect(wrapper.state('password')).toEqual('eshan');
  });

  //check login with right data
  it('login check with right data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', {
      target: {name: 'username', value: 'eshan'},
    });
    wrapper
      .find('input[type="password"]')
      .simulate('change', {target: {name: 'password', value: 'eshan'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(true);
  });

  //check login with wrong data
  it('login check with wrong data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', {
      target: {name: 'username', value: 'eshan'},
    });
    wrapper
      .find('input[type="password"]')
      .simulate('change', {target: {name: 'password', value: 'eshan4'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(false);
  });
});
