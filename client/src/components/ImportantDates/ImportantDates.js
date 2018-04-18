import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col ,Button} from 'react-materialize';
import './ImportantDates.css';
import {changePage} from '../../store/actions/form'


class ImportantDates extends Component{
        
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
		return (
			<div >
				<ul>
				    <li className = "ImportantDates-container" >
					    Application Deadline: 14/04/18
					</li>

				    <br/>

					<li className = "ImportantDates-container" >
					    Polling Date: 20/04/18
					</li>

						<br/>
					<li className = "ImportantDates-container" >
					    Polling Time: 9AM to 5PM
					</li>

					<br/>
					<li className = "ImportantDates-container" >
					    Results Day: 22/04/18
					</li>

					<br/>
					<li className = "ImportantDates-container" >
					    Oath Taking 23/04/18
					</li>

			    </ul>

			    <div className='form__submit-btn-wrapper'>
                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage('ElectionVoting')}>Vote Now</Button>
                </div>
                <div className='form__submit-btn-wrapper'>
                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage('ElectionResults')}>Results</Button>
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

export default connect(mapStateToProps,dispatchToProps)(ImportantDates);
