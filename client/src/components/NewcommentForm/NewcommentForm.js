import React, { Component } from 'react';
import profile from '../../profile.png';
import './NewcommentForm.css';


class NewcommentForm extends Component {

    render() {
        return (
            <div className="newcomment_container">
            	<div className="card-image-comment">
            		<img src={ profile} alt="profile-image"/>
            	</div>
            	<div className="comment-content">
                	<textarea id="new_comment" placeholder="Write a comment..."></textarea>
                </div>
                <div className="camera-icon">
                    <label htmlFor="file-input">
                        <i className="material-icons grey-text text-darken-3">add_a_photo</i>
                    </label>
                    <input accept="image/*" id="file-input" type="file" className="image-upload"></input>
                </div>  
            </div>
        );
    }
}

export default NewcommentForm;
