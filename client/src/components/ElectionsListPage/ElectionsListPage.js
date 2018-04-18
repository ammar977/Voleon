import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionsListPage.css';


class ElectionsListPage extends Component {

    render() {
        return (
            <div className='electionsListPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Select Seat"/>

                    <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="Create New Election"/>
                    </div>
                    <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="Election Archive"/>
                    </div>
                    <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="Candidacy Application"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElectionsListPage;
