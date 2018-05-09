import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import profile from '../../profile.png';
import picture2 from '../../picture2.jpg';
import NewcommentForm from '../NewcommentForm/NewcommentForm'
import CardContainer from '../Card/card';
import './PostComment.css';
import {deletePost} from '../../store/actions/form'


class PostComment extends Component {

    static propTypes = {
        deletePost: PropTypes.func.isRequired,
        logged: PropTypes.object,
    }

    delPost(postid) {
        this.props.deletePost(postid);
    }

       // onClick(e) {
       //     this.setState({
       //         count: this.state.count + 1
       //     });
       // }
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

                {(this.props.logged.userType === '2') ? <a className="link" href="#" onClick={this.delPost.bind(this, this.props.post._id)}><i className="material-icons blue-text text-lighten-4">delete</i></a> : ''}
                
                <div className= 'post'>
                    <p id="post-text"> {this.props.post.textContent} </p>
                </div>
                <div className= 'comments'>
                    <p id="comment-text"> {this.props.post.comments} </p>
                </div>

                <NewcommentForm/>
                <div className="comment-link">
                    <a className="link" href="#"><u>View all comments</u></a>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({
    deletePost: (postid) => dispatch(deletePost(postid)),
})

export default connect(mapStateToProps, dispatchToProps)(PostComment);

