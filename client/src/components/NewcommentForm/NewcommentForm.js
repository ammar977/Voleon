import React, { Component } from 'react';
import profile from '../../profile.png';
// import CardContainer from '../Card/card';
import './NewcommentForm.css';


class NewcommentForm extends Component {


    // click_icon(e) {
    //     // e.preventDefault();
    //     <input accept="image/*" id="file-input" type="file" class="image-upload"></input>
    //      console.log('in click');
    // }

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
                    <i class="material-icons black-text">create</i>
                </div>
                <div className="camera-icon">
                    <label for="file-input">
                        <i class="material-icons black-text">add_a_photo</i>
                    </label>
                    <input accept="image/*" id="file-input" type="file" class="image-upload"></input>
                </div>	
            </div>
        );
    }
}

export default NewcommentForm;
