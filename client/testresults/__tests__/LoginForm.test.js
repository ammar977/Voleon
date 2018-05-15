import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginForm from '../LoginForm/LoginForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




// we are just checking to make sure there is one of each input. We can simply check the length to see if the node exists.
it('renders a email input', () => {
  expect(shallow(<LoginForm />).find('#lumsId').length).toEqual(1)
})

it('renders a password input', () => {
  expect(shallow(<LoginForm />).find('#password').length).toEqual(1)
})

//We make sure that the onChange function was called properly and behaved properly, after the input was changed.
describe('Email input', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<LoginForm />);
   wrapper.find('#lumsId').simulate('change', {target: {name: 'email', value: '19100044@lums.edu.pk'}});
   
  expect(wrapper.state('lumsId')).toEqual('19100044@lums.edu.pk');
   })
 })

describe('Password input', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<LoginForm />);
   wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'taha'}});
   
   expect(wrapper.state('password')).toEqual('taha');
  })
})