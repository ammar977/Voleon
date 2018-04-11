import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ProfilePage.css';


class ProfilePage extends Component {

    render() {
        return (
            <div className='profilePage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <p>this is the profile</p>

	                <div id="dummy"></div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
