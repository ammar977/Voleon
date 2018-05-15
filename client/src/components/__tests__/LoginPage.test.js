import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginPage from '../LoginPage/LoginPage';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<LoginPage />).exists(<form className='login'></form>)).toBe(true)
 })
})