import React, { Component } from 'react';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
// import CardContainer from '../Card/card';
import './NewPost.css';


class NewPost extends Component {

    render() {
        return (
           <div className= "newpost_container">
                <div class="card-image">
                        <img src={ profile} alt="profile-image"/>
                 </div>

                <div className="post-content">
                    <textarea placeholder="Enter your message here"></textarea> 
                </div>
                <div className= "button">
                    <button class="btn blue lighten-1 waves-effect waves-light" type="submit">
                        <span class="">Post</span>
                    </button>
                </div>

                <div className="camera-icon">
                    <label for="file-input">
                        <i class="material-icons blue-text text-lighten-3">&#xe439;</i>
                    </label>
                    <input accept="image/*" id="file-input" type="file" class="image-upload"></input>
                </div>
             
           </div>
        );
    }
}

export default NewPost;
