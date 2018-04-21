import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionDashboardPage.css';


class ElectionDashboardPage extends Component {

    render() {
        return (
            <div className='electionDashboardPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Candidates List"/>
                    <CardContainer cardType="Speech Dates"/>
                    <CardContainer cardType="Important Dates"/>
                </div>
            </div>
        );
    }
}

export default ElectionDashboardPage;
