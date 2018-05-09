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
            <CardContainer cardType="Post Comment" post={p} key={p._id}/>
        );
        return (
            <div className='feedPage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    {(this.props.logged.userType !== '0') ? <CardContainer cardType="New Post"/> : ''}

                    <div className="post-cards-container">
                        {post_cards}
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
