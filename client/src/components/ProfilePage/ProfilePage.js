import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ProfilePage.css';
import {CardPanel, Col} from 'react-materialize';
import cover from '../../cover.jpg';
import profile from '../../profile.png';
import picture from '../../picture.jpg';


class ProfilePage extends Component {
    
    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        console.log('in profile page', this.props.logged.passedArgs);

        const user_post = this.props.logged.passedArgs.posts.map(p => 
            <CardContainer cardType="New Post" post={p} key={p._id}/>
        );
        return (
            <div className='profilePage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <figure>
                        <img src={picture}  id="profile-img"/>
                        <figcaption> <b>{this.props.logged.passedArgs.user.firstName} {this.props.logged.passedArgs.user.lastName}</b></figcaption>
                    </figure>   

                    <div className="row">
                        <div className="col s16 m4">
                            <div className=" blue lighten-4 black-text">
                                <div id="card-content">
                                    <h5 className="center"><b>Manifesto</b></h5>
                                    <p className="manifesto">As the voice of the students,my vision is to bring to light the universities greatest resource,the power of the students and their well being,specifically supporting more social activities.</p>
                                </div>  
                            </div>
                        </div>
                    </div>  
                     
                    <div className="user-post">
                        {user_post}
                    </div> 

	                <div id="dummy"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps,dispatchToProps)(ProfilePage);
