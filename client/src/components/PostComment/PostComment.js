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
                <div class="card-image">
                    <img src={ profile} alt="profile-image"/>
                </div>
                <div className= 'Name'>
                    <p> Profile Name </p>
                </div>

                <div className= 'post'>
                    <p> This is the post </p>
                </div>
                <div className= 'Comments'>
                    <p> Comments </p>
                </div>
				<div className="New comment">
                    <NewcommentForm/>
                </div>
                <div className="comment link">
                    <a href="https://github.com/ammar977/Voleon"><u>View all comments</u></a>
                </div>

            </div>
        );
    }
}

export default PostComment;
