import login from '../../store/reducers/login';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store'
import store from '../../store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);


const props = {
 localization: {
  common: {
   login: 'Login',
  },
  form: {
   email: 'Email',
   password: 'Password',
   emailRequired: 'Email is required',
   emailNotValid: 'Email is not valid',
   passwordRequired: 'Password is required',
  }
 },
 currentLang: 'en',
 login: () => {},
};


describe('>>>LoginPage - Shallow Render REACT COMPONENTS', () => {
let wrapper;
beforeEach(() => {
  wrapper =  shallow(<login  />);
 });
}) 

// describe('=login reducer', () => {
//   it('returns proper initial state', () => {
//     expect(login(undefined, {})).toEqual({});
//   });
// });  