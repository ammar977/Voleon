import React, { Component } from 'react';
import logo from '../../Voleon.png';
import profile from '../../profile.png';
// import CardContainer from '../Card/card';
import './CandidateApp.css';


class NewPost extends Component {

    render() {
        return (
           <div className= "newpost_container">
               <form id="upload" action="upload.php" method="POST" enctype="multipart/form-data">

               <fieldset>
               <legend>HTML File Upload</legend>

               <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="300000" />

               <div>
                <label for="fileselect">Files to upload:</label>
                <input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
                <div id="filedrag">or drop files here</div>
               </div>

               <div id="submitbutton">
                <button type="submit">Submit</button>
               </div>

               </fieldset>

               </form>
             
           </div>
        );
    }
}

export default NewPost;
