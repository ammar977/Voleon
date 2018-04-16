import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './FeedPage.css';

class FeedPage extends Component {

    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        // console.log('in feed', this.props.logged.posts);
        const post_cards = this.props.logged.posts.map(p => 
            <CardContainer cardType="Post Comment" post={p}/>
        );
        return (
            <div className='feedPage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <CardContainer cardType="New Post"/>
                    <CardContainer cardType="Vote Now"/>

                    <div className="post-cards-container">
                        {post_cards}
                    </div>
	                {/*<div id="dummy"></div>*/}



                    <div className='oneButtonContainer'>
                         <CardContainer cardType = "One Button"/>
                    </div>


                </div>


                
                    
                

                
                





            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, dispatchToProps)(FeedPage);
