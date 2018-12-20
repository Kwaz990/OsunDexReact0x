import React, { Component } from 'react';

const API = 'https://api.radarrelay.com/v2/markets/ZRX-WETH/candles';
const DEFAULT_QUERY = 'redux';

class Api_test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      isLoading: false
    };
  }

  componentDidMount() {
      this.setState({ isLoading: true});
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ chartData: data, isLoading: false }));
  }

  render() {
    const { chartData, isLoading } = this.state;

    if(isLoading) {
        return<p> Loading ... </p>
    }

    return (
        <div>
       <p>{JSON.stringify(chartData.data)}</p> 
      <ul>
        {chartData.map(hit =>
          <li key={hit.startBlockTimestamp}>
            <p>Open: {hit.open}</p>
            <p>High: {hit.high}</p>
          </li>
        )}
      </ul>
      </div>
    );
  }
}


export default Api_test;