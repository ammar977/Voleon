import React, { Component } from 'react';
import profile from '../../profile.png';
// import CardContainer from '../Card/card';
import './NewcommentForm.css';


class NewcommentForm extends Component {

    render() {
        return (
            <div className="newcomment_container">
            	<div class="card-image">
            		<img src={ profile} alt="profile-image"/>
            	</div>
            	<div className="comment-content">
                	<textarea placeholder="Write a comment..."></textarea>
                </div>
                <div className="edit-post">
                	<p>
                	    <span class="glyphicon">&#x270f;</span>
                	</p>
                </div>	
            </div>
        );
    }
}

export default NewcommentForm;
