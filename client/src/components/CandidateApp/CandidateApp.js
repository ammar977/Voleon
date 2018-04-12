import React, { Component } from 'react';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
// import CardContainer from '../Card/card';
import './CandidateApp.css';


class NewPost extends Component {

    render() {
        return (
           <div className= "newpost_container">
                <div className="card-image">
                        <img src={ profile} alt="profile-image"/>
                 </div>

                <div className="post-content">
                    <textarea placeholder="Enter your message here"></textarea> 
                </div>
                <div className= "Post-button">
                    <button className="btn blue lighten-1 waves-effect waves-light" type="submit">
                        <span className="">APPLICATION</span>
                    </button>
                </div>
                <div className="camera-icon">
                    <label htmlFor="file-input">
                        <i className="material-icons blue-text text-lighten-3">&#xe439;</i>
                    </label>
                    <input accept="image/*" id="file-input" type="file" className="image-upload"></input>
                </div>
             
           </div>
        );
    }
}

export default NewPost;
