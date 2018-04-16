import React, { Component } from 'react';
import profile from '../../profile.png';
import picture from '../../picture.jpg';
import './NewcommentForm.css';


class NewcommentForm extends Component {

    render() {
        return (
            <div className="newcomment_container">
            	<div className="card-image-comment">
            		<img src={ picture} alt="profile-image" id="profile-image-comment"/>
            	</div>
            	<div className="comment-content">
                	<textarea id="new_comment" placeholder="Write a comment..."></textarea>
                </div>
                <div className="camera-icon">
                    <label htmlFor="image-upload">
                        <i className="material-icons grey-text text-darken-2">add_a_photo</i>
                    </label>
                    <input accept="image/*" id="image-upload" type="file"></input>
                </div>  
            </div>
        );
    }
}

export default NewcommentForm;
