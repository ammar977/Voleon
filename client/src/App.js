import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
// import Customers from './components/Customer/customers'
// import AddCustomer from './components/addCustomer/addCustomer'
import Main from './components/main/main'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">Voleon dummy homepage</h1>
          </header>

          <Main />
        
        </div>
      </Provider>
    )
  }
}

export default App;
