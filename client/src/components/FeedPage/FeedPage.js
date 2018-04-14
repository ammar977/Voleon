import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './FeedPage.css';


class FeedPage extends Component {

    render() {
        return (
            <div className='feedPage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <CardContainer cardType="New Post"/>
                    <CardContainer cardType="Post Comment"/>
	                <div id="dummy"></div>
                </div>


                
                    
                
            </div>
        );
    }
}

export default FeedPage;
