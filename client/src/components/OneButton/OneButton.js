import React, { Component } from 'react';
import {Card, Col, Button} from 'react-materialize';
import './OneButton.css';

class OneButton extends Component{

    
    render(){
        console.log('in onebutton', this.props.cardText);
        let text = "";
        let btn = "";
        switch(this.props.cardText){
            case 'New Election':
                text = 'Create New Election';
                btn = 'CREATE';
                break;
            case 'Archive':
                text = 'Election Archive';
                btn = 'ARCHIVE';
                break;
            case 'Application':
                text = 'Candidacy Application';
                btn = 'APPLY';
                break;
            deafult:
                text = 'No text given!';
                btn = 'NULL';
        }

        console.log(text, btn);

        return (
            <div>

                <div className = "one-button">
                    <span className="card-title grey-text text-darken-4">{text}</span>

                    <br />
                    <Button className='blue lighten-1' waves='light' >{btn}</Button>
                </div>

            </div>


        )

        
    }
}


export default OneButton;
