import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
// import Customers from './components/Customer/customers';
import CardContainer from './components/Card/card';

class App extends Component {

    render () {
        return (
            <Provider store={ store }>
                <div className="App">
                    <header className="App-header">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <h1 className="App-title">Voleon dummy homepage</h1>
                    </header>

                    {/*<Customers/>*/}
                    <CardContainer cardType="Login"/>
                    <CardContainer cardType="Signup"/>
                </div>
            </Provider>
        )
    }
}

export default App;
