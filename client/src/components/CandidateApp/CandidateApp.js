import React, { Component } from 'react';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
import './CandidateApp.css';


class CandidateApp extends Component {

    render() {
        return (
           <div className= "CandidateApp_container">
                <form id="upload">
                    <div id="title">
                        <h1> <em><u>Candidate Application</u></em> </h1>
                    </div>
                    <div id="detail-1">
                        <p> Please download the application form and fill it in a word processing software.Upload the completed form below
                        before the deadline </p>
                    </div>

                    <div id="detail-2">
                        <p> You are eligible to apply for <b>SSE General Seat '19</b> only. </p>
                    </div>

                    <div id="detail-3">
                        <h3> <em><b>DeadLine : 14/05/18</b></em> </h3>
                    </div>

                    <div id="download">
                        <button className="blue lighten-1 waves-effect waves-light btn" type="submit">
                            <span className="">Download</span>
                            <i class="material-icons right">arrow_downward</i>
                        </button>
                    </div>

                    <div id="fileselect">
                        <label htmlfor="fileselect"> </label>
                        <input type="file" id="fileupload"/>
                    </div>

                    <div id="submitform">
                        <button className="btn blue lighten-1 waves-effect waves-light" type="submit" id="submit">
                            <span className="">Submit</span>
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                </form>
             
           </div>
        );
    }
}

export default CandidateApp;
