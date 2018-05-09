import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
import picture from '../../picture.jpg';
// import CardContainer from '../Card/card';
import './NewPost.css';
import {sendNewPost} from '../../store/actions/form'


class NewPost extends Component {
    
    static propTypes = {
        sendNewPost: PropTypes.func.isRequired,
    }

    sendPost(e) {
        e.preventDefault();

        let post_text = e.target.post_text.value.trim();
        console.log(post_text);

        const newPost = {
            textContent: post_text,
        };

        if (post_text !== '') {
            e.target.post_text.value = ''
            this.props.sendNewPost(newPost);
        } else {
            console.log('empty post');
        }
    }

    render() {
        return (
           <div className= "newpost_container">
                <div className="card-image">
                        <img src={picture} alt="profile-image" id="profile-image"/>
                 </div>
                <div className="form-wrap">
                <form onSubmit={this.sendPost.bind(this)} id="form">
                    <div className="post-content">
                        <textarea id="post_text" placeholder="What's on your mind?"></textarea> 
                    </div>
                    <div className= "Post-button">
                        <button className="btn blue lighten-1 waves-effect waves-light" type="submit" id="post-btn">
                            <span className="">Post</span>
                        </button>
                    </div>
                </form>
                </div>
           </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const dispatchToProps = (dispatch) => ({
     sendNewPost: newPost => dispatch(sendNewPost(newPost)),
})

export default connect(mapStateToProps,dispatchToProps)(NewPost);
