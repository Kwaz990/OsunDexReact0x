import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/Description';
import {Web3Provider} from 'react-web3';
import Web3 from 'web3';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationBar from './components/NavigationBar';
import UnlockMetaMask from './components/unlockMetaMask';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavigationBar />
        <div className="center">
        <Web3Provider>
          <header className="DashboardContainer-header">
            <Description />
            <UnlockMetaMask />
          </header>
        </Web3Provider>
        </div>
        </div>
        </Router>
      );
    }
  }

/*
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Router>
    );
  }
}
*/
export default App;
