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
                  <p> Candidate Application </p>
                </div>
                <div id="detail-1">
                   <p> Please download the application form and fill it in a word processing software.Upload the completed form below
                    before the deadline </p>
                </div>

                <div id="detail-2">
                   <p> You are eligible to apply for <b>SSE General Seat '19</b> Only </p>
                </div>

               <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="300000" />
               <div>
                <label htmlfor="fileselect"></label>
                <input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
                <div id="filedrag">or drop files here</div>
               </div>

              <div id="submitform">
                    <button className="btn blue lighten-1 waves-effect waves-light" type="submit">
                      <span className="">Submit</span>
                    </button>
              </div>

          

               </form>
             
           </div>
        );
    }
}

export default CandidateApp;
