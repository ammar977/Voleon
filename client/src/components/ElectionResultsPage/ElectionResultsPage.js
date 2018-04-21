import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionResultsPage.css';


class ElectionResultsPage extends Component {

    render() {
        return (
            <div className='electionResultsPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Voter Turnout"/>
                    <CardContainer cardType="Voter Count"/>

                </div>
            </div>
        );
    }
}

export default ElectionResultsPage;
