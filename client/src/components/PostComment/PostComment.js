import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import profile from '../../profile.png';
import NewcommentForm from '../NewcommentForm/NewcommentForm'
import CardContainer from '../Card/card';
import './PostComment.css';


class PostComment extends Component {

    render() {
        return (
            <div className='main-card'>
                <div className="card-pic">
                    <img src={ profile} alt="profile-image" className= "myimage"/>
                </div>
                <div className= 'profile-name'>
                    <p className="name"> Profile Name </p>
                </div>
                <div className= 'time'>
                    <p> 6:53 pm </p>
                </div>
                <div className= 'post'>
                    <p> This is the post </p>
                </div>
                <div className= 'comments'>
                    <p> Comments </p>
                </div>
				<div className="new-comment">
                    <NewcommentForm/>
                </div>
                <div className="comment-link">
                    <a className="link" href="https://github.com/ammar977/Voleon"><u>View all comments</u></a>
                </div>

            </div>
        );
    }
}

export default PostComment;
