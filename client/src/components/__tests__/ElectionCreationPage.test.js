import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ElectionCreationPage from '../ElectionCreationPage/ElectionCreationPage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import logo from '../../Voleon.png';


// This test is shallow rendering our Login component, then we check to see if our form node exists in the rendered HTML.
describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<ElectionCreationPage />).exists(<div className='electionCreationPage_container'></div>)).toBe(true)
    })
})

