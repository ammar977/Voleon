import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './Voleon.png';
import './App.css';
import store from './store';
// import Customers from './components/Customer/customers';
import CardContainer from './components/Card/card';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {cardType:"Login"}
        this.cardTypeChanger = this.cardTypeChanger.bind(this);
    }

    cardTypeChanger(e) {
        e.preventDefault();
        this.setState({cardType:'Signup'})
    }

    render () {
        return (
            <Provider store={ store }>
                <div className="App">
                    <header className="App-header">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <h1 className="App-title">Voleon dummy homepage</h1>
                    </header>

                    {/*<Customers/>*/}
                    <CardContainer cardType={this.state.cardType} cardTypeChanger = {this.cardTypeChanger} />
                </div>
            </Provider>
        )
    }
}


export default App;
