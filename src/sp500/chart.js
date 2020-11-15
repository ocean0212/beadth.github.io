import React from "react";
import {
  Chart,
  Tooltip,
  Legend,
  Axis,
  Interaction,
  Polygon,
  Line,
  Point,
} from 'bizcharts';


const LeftChart = (props) => {
  const scale = {
    name: {
      type: 'cat',
      // values: ['SPX','COM','CND','CNS','ENE','FIN','HLT','IND','MAT','REI','TEC','UTL','TOTAL'],
      values: ['SPX', 'COM', 'CND', 'CNS', 'ENE', 'FIN', 'HLT', 'IND', 'MAT', 'REI', 'TEC', 'UTL'],
    },
    day: {
      type: 'cat',
      values: props.days || [],
    },
    sales: {
      nice: true,
    }
  };

  return <Chart
    scale={scale}
    height={3000}
    data={props.data}
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
    <Legend position='left-top' offsetY={100}/>

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
}


const RightChart = (props) => {
  const scale = {
    name: {
      type: 'cat',
      values: ['TOTAL'],
    },
    day: {
      type: 'cat',
      values: props.days || [],
    },
    sales: {
      nice: true,
    }
  };

  return <Chart
    scale={scale}
    height={3000}
    data={props.data}
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
    <Legend position='right-top' offsetY={100}/>
    <Polygon
      position={'name*day'}
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
}

const LineChart = (props) => {
  const styles ={
    mainTitle:{
      fontSize:20,
      color:"black",
      textAlign:"center"
    },
    subTitle:{
      fontSize:16,
      color:"gray",
      textAlign:"center"
    }
  }

  return <div>
    <h5 className='sub-title' style={styles.subTitle}>
      S&P 500 总宽度走势
    </h5>
    <Chart scale={{breadth: {min: 0}}} padding={[10, 20, 50, 40]} autoFit height={300} data={props.data}>

      <Line shape="line" position="day*breadth" color=""/>
      <Point position="day*breadth" color=""/>
      <Tooltip shared={false} showCrosshairs/>
    </Chart>
  </div>
}


export {LeftChart, RightChart, LineChart};
