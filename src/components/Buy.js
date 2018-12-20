import React, { Component } from 'react';

import { providerEngine } from '../provider_engine';

import { scenarioAsync as fillOrderERC20 } from '../scenarios/fill_order_erc20';



class Buy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: 'blue',
        bool: 'False',
        Amount: 0.00,
        Price: 0.00
      };
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
    //  this.fillOrderERC20 = this.fillOrderERC20.bind(this);
    }
    handleAmountChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        Amount: val
      }));
    }
    handlePriceChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        Price: val
      }));
    }

   // fillOrderERC20() {
  
 //   }
  
    onButtonClick() {
      void (async () => {
        try {
          await fillOrderERC20();
        } catch (e) {
          console.log(e);
          providerEngine.stop();
        //  process.exit(1);
        }
      })();
      
     // shell.exec('yarn scenario:fill_order_erc20'),
      this.setState(() => ({
        color:'green',
        bool: 'True',
      }));
    }
  
    handleSubmit(event) {
      event.preventDefault();
      /*this.props.onButtonClick({
        Amount: this.state.Amount,
        Price: this.state.Price
      });*/
      this.setState(() => ({
        Amount: '',
        Price: ''
      }));
    }
    render() {
      return (
        <div>
        <form onSubmit ={this.handleSubmit} className ="Buy">
          <input 
            value={this.state.Amount}
            onChange={this.handleAmountChange}
            placeholder="Amount of Crypto to Buy"
            type="number"
            />
          <input 
            value={this.state.Price}
            onChange={this.handlePriceChange}
            placeholder="Buy Price"
            typer="number"
            />
          <button onClick={this.onButtonClick} type="submit">Buy</button>
        </form>
        </div>
      );
    }; 
  }
  export default Buy