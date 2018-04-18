import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ApplicationPage.css';


class ApplicationPage extends Component {

    render() {
        return (
            <div className='ApplicationPage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <CardContainer cardType="Application"/>
                </div>
            </div>
        );
    }
}

export default ApplicationPage;
