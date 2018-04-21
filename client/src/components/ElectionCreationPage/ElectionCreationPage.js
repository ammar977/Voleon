import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionCreationPage.css';


class ElectionCreationPage extends Component {

    render() {
        return (
            <div className='electionCreationPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="New Election"/>

                </div>
            </div>
        );
    }
}

export default ElectionCreationPage;
