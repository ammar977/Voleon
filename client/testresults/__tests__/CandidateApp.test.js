import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CandidateApp from '../CandidateApp/CandidateApp';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store'
import store from '../../store';


// This test is shallow rendering our CandidateApp component, then we check to see if our form node exists in the rendered HTML.

// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  wrapper = shallow(<CandidateApp store={store}/>)
})



describe('CandidateApp Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<CandidateApp />).exists(<div className='CandidateApp_container'></div>)).toBe(true)
    })
})

