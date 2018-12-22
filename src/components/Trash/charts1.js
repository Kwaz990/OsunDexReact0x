/* App.js */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import CanvasJSReact from'./canvasjs.react';
//import CanvasJS from './CanvasJSReact.CanvasJS';
//import CanvasJSChart from './CanvasJSReact.CanvasJSChart';
import CanvasJSReact from './canvasjs.react';





var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = {};
class Charts1 extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  chartData: [],
		  isLoading: false
		};
	  }

    render() {

		const { chartData, isLoading } = this.state;
		var dates = [];
		this.state.chartData.map(hit => dates.push(hit.date));

		if(isLoading) {
			return<p> Loading ... </p>
		}
		console.log(chartData)
		const options = {
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Intel Corporation Stock Price -  2017"
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				includeZero:false,
				prefix: "$",
				title: "Price (in USD)"
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				name: "Intel Corporation",
				yValueFormatString: "$###0.00",
				xValueType: "dateTime",
				dataPoints: [
					//{ x: new Date([chartData.map(hit => hit.date)]), y:[chartData.map(hit =>[hit.open, hit.high, hit.low, hit.close])] }]
				//xValueFormatString: "MMMM YY",
				// dataPoints: [ // y axis data come in open, high, low, close format
					{ x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
					{ x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.20] },
					{ x: new Date("2017-03-01"), y: [35.85, 36.30, 34.66, 36.07] },
					{ x: new Date("2017-04-01"), y: [36.19, 37.50, 35.21, 36.15] },
					{ x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
					{ x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
					{ x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
					{ x: new Date("2017-08-01"), y: [35.66, 36.70, 34.38, 35.07] },
					{ x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
					{ x: new Date("2017-10-01"), y: [38.12, 45.80, 38.08, 45.49] },
					{ x: new Date("2017-11-01"), y: [45.97, 47.30, 43.77, 44.84] },
					{ x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] }
				
			
		  ]
		}]
	}
		return (
		<div>

			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			<p>{dates}</p>
		</div>
		);
}
componentDidMount(){
	this.setState({ isLoading: true});
    fetch('https://api.radarrelay.com/v2/markets/ZRX-WETH/candles')
      .then(response => response.json())
      .then(data => data.map(bar =>(
        {
          date: `${bar.startBlockTimestamp}`,
          open: `${bar.open}`,
          high: `${bar.high}`,
          low:  `${bar.low}`,
          close: `${bar.close}`
        }
      )))
      .then(bar => this.setState({ chartData: bar, isLoading: false }));
		chart.render();
}

}
export default Charts1; 