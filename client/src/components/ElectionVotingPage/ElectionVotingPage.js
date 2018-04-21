import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionVotingPage.css';


class ElectionVotingPage extends Component {

    render() {
        return (
            <div className='electionVotingPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Vote Now"/>

                </div>
            </div>
        );
    }
}

export default ElectionVotingPage;
