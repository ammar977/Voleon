import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionVoting.css';


class ElectionVoting extends Component {

    render() {
        return (
            <div className='electionVotingPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Vote Now"/>

                    <div id="dummy"></div>
                </div>
            </div>
        );
    }
}

export default ElectionVoting;
