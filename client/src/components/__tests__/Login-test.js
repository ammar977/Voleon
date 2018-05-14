import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginPage from '../LoginPage';


// describe what we are testing
describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<LoginPage />).exists(<div className='loginPage_container'></div>)).toBe(true)
 })
})