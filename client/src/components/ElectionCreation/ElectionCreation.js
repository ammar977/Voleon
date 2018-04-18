import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionCreation.css';


class ElectionCreation extends Component {

    render() {
        return (
            <div className='electionCreationPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="New Election"/>

                    <div id="dummy"></div>
                </div>
            </div>
        );
    }
}

export default ElectionCreation;
