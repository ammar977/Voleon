import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Page from './components/Page/Page';

class App extends Component {

    render () {
        return (
            <Provider store={ store }>
                <div className="App">
                    <Page/>
                </div>
            </Provider>
        )
    }
}

export default App;
