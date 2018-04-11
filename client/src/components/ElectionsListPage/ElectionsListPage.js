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
                    <p>this is the elections list page</p>

                    <div id="dummy"></div>
                </div>
            </div>
        );
    }
}

export default ElectionsListPage;
