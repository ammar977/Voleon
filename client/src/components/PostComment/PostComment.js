import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import profile from '../../profile.png';
import picture2 from '../../picture2.jpg';
import NewcommentForm from '../NewcommentForm/NewcommentForm'
import CardContainer from '../Card/card';
import './PostComment.css';


class PostComment extends Component {

    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        // console.log('in PostComment', this.props.post);
        return (
            <div className='post-container'>
                <div className="card-pic">
                    <img src={picture2} alt="profile-image" id= "myimage"/>
                </div>
                <div className= 'profile-name-time'>
                    <p id="name"> {this.props.post.posterName} </p>
                    <p id="time-text">{new Date(this.props.post.timeStamp).toLocaleDateString('en-US',   { 
                                                                                    weekday: 'long', year: 'numeric', 
                                                                                    month: 'long', day: 'numeric' ,
                                                                                    hour:'numeric',minute:'numeric'
                                                                                })}
                    </p>
                </div>
            
                <div className= 'post'>
                    <p id="post-text"> {this.props.post.textContent} </p>
                </div>
                <div className= 'comments'>
                    <p id="comment-text"> {this.props.post.comments} </p>
                </div>
                <NewcommentForm/>
                <div className="comment-link">
                    <a className="link" href="https://github.com/ammar977/Voleon"><u>View all comments</u></a>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, dispatchToProps)(PostComment);

<span class="timestampContent" id="js_188">9 April at 22:52</span>