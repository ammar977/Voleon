import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col, Button} from 'react-materialize';
import './OneButton.css';
import {changePage} from '../../store/actions/form'


class OneButton extends Component{
        
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    }

    gotoPage(destinationPage) {
        this.props.changePage(destinationPage);
    }
    
    render(){
        // console.log('in onebutton', this.props.cardText);
        let text = '';
        let btn = '';
        let dstPage = '';
        switch(this.props.cardText) {
            case 'New Election':
                text = 'Create New Election';
                btn = 'CREATE';
                dstPage = 'ElectionCreation';
                break;
            case 'Archive':
                text = 'Election Archive';
                btn = 'ARCHIVE';
                dstPage = 'ElectionsArchive';
                break;
            case 'Application':
                text = 'Candidacy Application';
                btn = 'APPLY';
                dstPage = 'ElectionApplicationPage';
                break;
            default:
                text = 'No text given!';
                btn = 'NULL';
                dstPage = 'NULL';
        }

        return (
            <div>

                <div className = "one-button">
                    <span className="card-title grey-text text-darken-4">{text}</span>
                    <br />
                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage(dstPage)} >{btn}</Button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage) => dispatch(changePage(destinationPage)),
})

export default connect(mapStateToProps,dispatchToProps)(OneButton);
