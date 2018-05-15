import React from 'react';
import { shallow, mount, render } from 'enzyme';
import VoteNow from '../VoteNow/VoteNow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import profile from '../../profile.png';
configure({ adapter: new Adapter() });


describe('Button click test', () => {

    it('should toggle the button’s disabled state when not clicking', () => {
      const wrapper = shallow(<VoteNow />);
      const firstButton = wrapper.find('Button').at(0);
      firstButton.simulate('click');
      expect(firstButton.props().disabled).toEqual(false);
      
    });
});


describe("Image render", () => {
    it("renders an image", () => {
        const logo = shallow(<VoteNow />);

        expect(logo.find("img").prop("src")).toEqual(profile);

    });
 });