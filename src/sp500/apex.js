import React, {Component} from "react";

import {Chart} from "react-apexcharts";

class ApLeftChart extends Component {
  constructor(props) { // eslint-disable-next-line
    super(props);

  }

  generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  render() {
    this.state = {

      series: [{
        name: 'Jan',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
        {
          name: 'Feb',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Mar',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Apr',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'May',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jun',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jul',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Aug',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Sep',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                from: -30,
                to: 5,
                name: 'low',
                color: '#00A100'
              },
                {
                  from: 6,
                  to: 20,
                  name: 'medium',
                  color: '#128FD9'
                },
                {
                  from: 21,
                  to: 45,
                  name: 'high',
                  color: '#FFB200'
                },
                {
                  from: 46,
                  to: 55,
                  name: 'extreme',
                  color: '#FF0000'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'HeatMap Chart with Color Range'
        },
      },


    }; // eslint-disable-next-line
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={350}
          with="100%"
        />
        <h1>Hello</h1>
      </React.Fragment>
    );

  };
}


export {ApLeftChart};