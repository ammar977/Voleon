import {LOGIN_TEST, VIEW_CHANGE, SIGNUP, NEW_ELECTION, CHANGE_NAVBAR_PAGE, ADD_CANDIDATE_PROFILES, GET_RESULTS, VOTE_CAST, NEW_POST} from './constants';

export const sendUser = (user) => dispatch => {
    return fetch('/user/login', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(successLogin => dispatch({type: LOGIN_TEST, payload: successLogin}));
}

export const changePage = (destinationCard, args) => dispatch => {
    console.log('changePage action to', destinationCard, args);
    if (destinationCard === 'ElectionDashboard')
        dispatch({type: VIEW_CHANGE, payload: {success: null, pageType: destinationCard, currentSeat: args, passedArgs: args}});
    else
        dispatch({type: VIEW_CHANGE, payload: {success: null, pageType: destinationCard, passedArgs: args}});
}

export const sendNewUser = (newUser) => dispatch => {
    console.log('hey');
    return fetch('/user/signup', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(verStatusObj => dispatch({type: SIGNUP, payload: verStatusObj}));
}

export const sendElectionSeat = (seat) => dispatch => {
    return fetch('/election/new', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(seat)
    })
    .then(res => res.json())
    .then(response => dispatch({type: NEW_ELECTION, payload: response}));
}

export const sendNavBarReq = (request) => dispatch => {
    return fetch(`/${request}`, {
        method: 'GET',
        credentials:'include'
    })
    .then(res => res.json())
    .then(response => dispatch({type: CHANGE_NAVBAR_PAGE, payload: response}));
}

export const getCandidateProfiles = (userIDList) => dispatch => {
    return Promise.all(userIDList.map(userID => {
        return fetch(`/user/profile/${userID}`, {
            method: 'GET',
            credentials:'include'
        })
        .then(res => res.json());
    })).then(userProfileList => dispatch({type: ADD_CANDIDATE_PROFILES, payload: {candidateProfiles: userProfileList}}));
}

export const getElectionResults = (electionID) => dispatch => {
    console.log('in getElectionResults');
    return fetch(`/election/result/${electionID}`, {
        method: 'GET',
        credentials:'include'
    })
    .then(res => res.json())
    .then(response => dispatch({type: GET_RESULTS, payload: response}));
}

export const castVote = (voteObj) => dispatch => {
    return fetch('/election/vote', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(voteObj)
    })
    .then(res => res.json())
    .then(response => dispatch({type: VOTE_CAST, payload: response}));
}

export const sendNewPost = (newPost) => dispatch => {
    console.log('in sendNewPost action');
    return fetch('/posts/new', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(x => {
        console.log(x);
        return x;
    })
    .then(res => res.json())
    .then(res => dispatch({type: NEW_POST, payload: res}));
}
