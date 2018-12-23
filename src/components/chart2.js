import React, { Component } from "react";
import Chart from "react-apexcharts";


// THis is a dummy list that allows you to have data points <= length of the dummy list
// this is necessary for the API pull
var dumbshit = []
for (let i = 0; i < 1000; i++) {
    dumbshit.push([0, [0,0,0,0]])
}

class Chart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            options: {
                chart: {
                    id: "candlestick"
                },
            },
            series: [{
                data: dumbshit
            }]
        };
    }
    /*
    graph.setState({
                    isLoading: false,
                    options: {
                        chart: {
                            id: "candlestick"
                        },
                    },
                    series: [{
                        data: [
                            [500, [6593.34, 6600, 6582.63, 6600]],
                            [5000, [6595.16, 6604.76, 6590.73, 6593.86]]
                        ]
                    }]
                })
*/
    componentDidMount() {
        var graph = this;
        fetch('https://api.radarrelay.com/v2/markets/ZRX-WETH/candles')
            .then(function (response) {
                
                return response.json();
            }).then(function (data) {
                console.log(data.length)
                var x = data.map(bar => (
                    [bar.startBlockTimestamp, [
                        Number(bar.open),
                        Number(bar.high),
                        Number(bar.low),
                        Number(bar.close)
                    ]]
                    ))

                return x;
            }).then(function (bar) {
                graph.setState({
                    isLoading: false,
                    options: {
                        chart: {
                            id: "candlestick"
                        },
                    },
                    series: [{
                        data: bar
                    }]
                });
            })
        };


    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}              
                            series={this.state.series}
                            type="candlestick"
                            width="600"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

/*
<Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="candlestick"
                            width="500"
                        />
                        */

export default Chart1;