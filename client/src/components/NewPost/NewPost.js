import React, { Component } from 'react';
import logo from '../../Voleon.png';
// import CardContainer from '../Card/card';
import './NewPost.css';


class NewPost extends Component {

    render() {
        return (
           <div className= "newpost_container">
                    <textarea placeholder="Enter your message here"></textarea> 
                        <button class="btn blue lighten-1 waves-effect waves-light" type="submit">
                        <span class="">Post</span>
                        </button>
                        <label for="file-input">
                        <i class="material-icons blue-text text-lighten-3">&#xe439;</i>
                        </label>
                        <input accept="image/*" id="file-input" type="file" class="image-upload"></input>
             
           </div>
        );
    }
}

export default NewPost;
