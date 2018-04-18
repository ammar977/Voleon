import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionDashboard.css';


class ElectionDashboard extends Component {

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

export default ElectionDashboard;
