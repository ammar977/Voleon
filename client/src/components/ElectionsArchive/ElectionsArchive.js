import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionsArchive.css';


class ElectionsArchive extends Component {

    render() {
        return (
            <div className='electionsArchivePage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Archive"/>
                </div>
            </div>
        );
    }
}

export default ElectionsArchive;
