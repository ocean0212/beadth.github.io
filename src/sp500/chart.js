import React, {Component} from "react";
import {
  Chart,
  Tooltip,
  Legend,
  Axis,
  Interaction,
  Polygon
} from 'bizcharts';


// const LeftChart = (props) =>  {
// const LeftChart = (props) => {
class LeftChart extends Component {

  constructor(props) {
    super(props);
    this.props = props
  }


  render() {
    const scale = {
      name: {
        type: 'cat',
        // values: ['SPX','COM','CND','CNS','ENE','FIN','HLT','IND','MAT','REI','TEC','UTL','TOTAL'],
        values: ['SPX','COM','CND','CNS','ENE','FIN','HLT','IND','MAT','REI','TEC','UTL'],
      },
      day: {
        type: 'cat',
        values: this.props.days || [],
      },
      sales: {
        nice: true,
      }
    };

    return (
      <div>
        <Chart
          scale={scale}
          height={1000}
          data={this.props.data}
          autoFit
          forceFit={true}
        >

          <Axis
            name={'name'}
            position='top'

            tickLine={null}
            grid={{
              alignTick: false,
              line: {
                style: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
              },
            }}
          />
          <Axis
            name={'day'}
            title={null}
            grid={{
              alignTick: false,
              line: {
                style: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
              },
            }}
          />
          <Legend position='left'/>

          <Tooltip shared showMarkers={false}/>
          <Polygon
            position={'name*day'}
            // color={['sales', '#BAE7FF-#1890FF-#0050B3']}
            color={['sales', '#FB5050-#FFFFFF-#009966']}
            label={['sales', {
              offset: -2,
              style: {
                fill: '#2E2E2E',
                shadowBlur: 50,
                shadowColor: 'rgba(0, 0, 0, .45)',
              },
            }]}
            // style={{
            //   lineWidth: 0,
            //   stroke: '#fff',
            // }}
          >

          </Polygon>
          <Interaction type={'element-active'}/>
        </Chart>
      </div>
    )
  }

}


class RightChart extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }


  render() {
    const scale = {
      name: {
        type: 'cat',
        values: ['TOTAL'],
      },
      day: {
        type: 'cat',
        values: this.props.days || [],
      },
      sales: {
        nice: true,
      }
    };

    return (
      <div>
        <Chart
          scale={scale}
          height={1000}
          data={this.props.data}
          autoFit
          forceFit={true}
        >

          <Axis
            name={'name'}
            position='top'

            tickLine={null}
            grid={{
              alignTick: false,
              line: {
                style: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
              },
            }}
          />
          <Axis
            name={'day'}
            title={null}
            visible={false}
            grid={{
              alignTick: false,
              line: {
                style: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
              },
            }}
          />
          <Tooltip shared showMarkers={false}/>
          <Legend position='right'/>
          <Polygon
            position={'name*day'}
            // color={['sales', '#BAE7FF-#1890FF-#0050B3']}
            color={['sales', '#FB5050-#FFFFFF-#009966']}
            label={['sales', {
              offset: -2,
              style: {
                fill: '#2E2E2E',
                shadowBlur: 50,
                shadowColor: 'rgba(0, 0, 0, .45)',
              },
            }]}
            // style={{
            //   lineWidth: 0,
            //   stroke: '#fff',
            // }}
          >

          </Polygon>
          <Interaction type={'element-active'}/>
        </Chart>
      </div>
    )
  }
}


class MobileChart extends Component {
  render() {
    return super.render();
  }
}


export  {LeftChart, RightChart, MobileChart};
