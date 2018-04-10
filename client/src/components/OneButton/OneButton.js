import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import './OneButton.css';

class OneButton extends Component{
    
    render(){
        let text = "";
        switch(this.props.cardText){
            case 'New Election':
                text = 'Create New Election';
                break;
            case 'Archive':
                text = 'Election Archive';
                break;
            case 'Application':
                text = 'Candidacy Application';
                break;
            deafult:
                text = 'No text given!';
        }
        console.log(text);
        return (
            <div >
                {text}
            </div>
        )

        
    }
}


export default OneButton;
