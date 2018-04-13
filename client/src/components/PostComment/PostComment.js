import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import profile from '../../profile.png';
import NewcommentForm from '../NewcommentForm/NewcommentForm'
import CardContainer from '../Card/card';
import './PostComment.css';


class PostComment extends Component {

    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        console.log('in feed',this.props);
        const posts_list = this.props.logged.posts.map(post => {
            return <div className='main-card'>
                <div className="card-pic">
                    <img src={ profile} alt="profile-image" className= "myimage"/>
                </div>
                <div className= 'profile-name'>
                    <p className="name"> {post.posterName} </p>
                </div>
                <div className= 'time'>
                    <p> {new Date(post.timeStamp).toLocaleDateString('en-US',   { 
                                                                                    weekday: 'long', year: 'numeric', 
                                                                                    month: 'long', day: 'numeric' ,
                                                                                    hour:'numeric',minute:'numeric'
                                                                                })}
                    </p>
                </div>
                <div className= 'post'>
                    <p> {post.textContent} </p>
                </div>
                <div className= 'comments'>
                    <p> {post.comments} </p>
                </div>
				<div className="new-comment">
                    <NewcommentForm/>
                </div>
                <div className="comment-link">
                    <a className="link" href="https://github.com/ammar977/Voleon"><u>View all comments</u></a>
                </div>

            </div>
        })
        return (
            <ul> {posts_list}</ul>

        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, dispatchToProps)(PostComment);
