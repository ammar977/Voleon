import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
import './CandidateApp.css';
import axios from 'axios'
import fileDownload from 'js-file-download';
// import fileSubmit from '../../store/actions/form';


class CandidateApp extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedFile: null}
    }
    static propTypes = {
        logged:PropTypes.object
    }

    // fileSubmit(e) {
    //     e.preventDefault();
    //     console.log(e.target);
    // }

    fileChangedHandler(event) {
        const file = event.target.files[0]
        this.setState({selectedFile: event.target.files[0]})
    };

    uploadHandler(e) {
        e.preventDefault();
        console.log(this.state.selectedFile.name);
        const formData = new FormData()
        formData.append('file', this.state.selectedFile, this.state.selectedFile.name)
        // axios.post('http://localhost:5000/application/upload', formData,{
        //     onUploadProgress: progressEvent => {
        //       console.log( (progressEvent.loaded / progressEvent.total) * 100)
        //     }
        // });
        axios('http://localhost:5000/application/upload', {
            method : 'POST',
            withCredentials : true,
            data:formData
            }, {
                    onUploadProgress: progressEvent => {
                    console.log( (progressEvent.loaded / progressEvent.total) * 100)
                }
        });

    };

    downloadHandler(e) {
        e.preventDefault();
        // TODO //
        // add a toast saying your download will start in a few seconds

        axios.get('http://localhost:5000/application/Nomination-Form.docx')
        .then(res => {
            console.log('hey');
            fileDownload(res.data,'Nomination-Form.docx');
        });

    };

    render() {
        console.log('in candapp', this.props)
        return (
           <div className= "CandidateApp_container">
                <form id="upload">
                    <div id="detail-1">
                        <p> Please download the application form and fill it in a word processing software.Upload the completed form below
                        before the deadline </p>
                    </div>

                    <div id="detail-2">
                        <p> You are eligible to apply for <b>seat</b> only. </p>
                    </div>

                    <div id="detail-3">
                        <h3> <em><b>DeadLine : 14/05/18</b></em> </h3>
                    </div>

                    <div id="download">
                        <button className="blue lighten-1 waves-effect waves-light btn" type="submit" id="download" onClick = {this.downloadHandler.bind(this)}>
                            <span className="">Download</span>
                            <i className="material-icons right">arrow_downward</i>
                        </button>
                    </div>

                    <div id="uploadFile">
                        <input type="file" id="filebutton" onChange={this.fileChangedHandler.bind(this)}/>
                    </div>
                    <button className="btn blue lighten-1 waves-effect waves-light" type="submit" id="submit" onClick = {this.uploadHandler.bind(this)}>
                        <span className="">Submit</span>
                        <i className="material-icons right">send</i>
                    </button>

                </form>
             
           </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
});

const dispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps,dispatchToProps)(CandidateApp);

