import React, { Component } from 'react';




class Sell extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: 'red',
        Amount: '',
        Price: ''
      };
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
    handleSubmit(event) {
      event.preventDefault();
      this.setState(() => ({
        Amount: '',
        Price: ''
      }));
    }
    render() {
      return (
        <form onSubmit ={this.handleSubmit} className ="Sell">
          <input 
            value={this.state.Amount}
            onChange={this.handleAmountChange}
            placeholder="Amount of Crypto to Sell"
            type="number"
            />
          <input 
            value={this.state.Price}
            onChange={this.handlePriceChange}
            placeholder="Sell Price"
            typer="number"
            />
          <button type="submit">Sell</button>
        </form>
      );
    }; 
  }


  export default Sell;