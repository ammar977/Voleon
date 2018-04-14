import React, { Component } from 'react';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
import picture from '../../picture.jpg';
// import CardContainer from '../Card/card';
import './NewPost.css';


class NewPost extends Component {

    render() {
        return (
           <div className= "newpost_container">
                <div className="card-image">
                        <img src={picture} alt="profile-image" id="profile-image"/>
                 </div>

                <div className="post-content">
                    <textarea id="text" placeholder="What's on your mind?"></textarea> 
                </div>
                <div className= "Post-button">
                    <button className="btn blue lighten-1 waves-effect waves-light" type="submit" id="post-btn">
                        <span className="">Post</span>
                    </button>
                </div>
                <div id="camera">
                    <label htmlFor="file-input">
                        <i className="material-icons blue-text text-lighten-3">&#xe439;</i>
                    </label>
                    <input accept="image/*" id="file-input" type="file"></input>
                </div>
             
           </div>
        );
    }
}

export default NewPost;
