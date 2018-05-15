import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CandidateApp from '../CandidateApp/CandidateApp';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


// This test is shallow rendering our CandidateApp component, then we check to see if our form node exists in the rendered HTML.

describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<CandidateApp />).exists(<div className='CandidateApp_container'></div>)).toBe(true)
    })
})

