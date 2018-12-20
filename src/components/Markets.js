import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import Sell from './Sell';
// import Buy from './Buy';
// import Charts from './Charts';
//import BuyBox from './BuyBox';
// import SellBox from './SellBox';
// import BuyOrders from './BuyOrders';
// import SellOrders from './SellOrders';
// import OrderHistory from './OrderHistory';
// import OrderBook from './OrderBook';
// import TestOrders from './testOrders';
import Charts_test from './Charts_test';
//import { AssetBuyer } from '@0x/asset-buyer';
//import Instant from '0x-instant-component';
import Instant from './0xinstant';
import Api_test from './api_test';


class Markets extends Component {
    render(){
        return(
      <div>
        <Charts_test />
        <p>Hello World</p>
        <Api_test />
    

</div>
        );
    };
}
export default Markets;
