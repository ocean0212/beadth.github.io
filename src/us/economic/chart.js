import React from 'react';
import {
  Annotation,
  Chart,
  Line,
  Tooltip,
} from 'bizcharts';
import {CHART_COPYRIGHT} from "../../constants";

// agencies: "10000000"
// asOfDate: "2003-11-19"
// bills: "242958086000"
// cmbs: "0.00"
// frn: ""
// mbs: "0.00"
// notesbonds: "404669247000"
// tips: "13454483000"
// tipsInflationCompensation: "1621412000"
// total: "661091816000.00"

// TODO https://github.com/beadth/beadth.github.io/issues/5
// 复现方式： 同目录 index.js -> line: 20 -> 删除 disabled
export const MarketSomaHoldChart = (props) => {

  props.somaHolDataList.transform({
    type: 'fold',
    fields: ['agencies', 'bills', 'cmbs', 'frn', 'mbs', 'notesbonds', 'tips', 'tipsInflationCompensation', 'total'], // 展开字段集
    key: 'type', // key字段
    value: 'value', // value字段
  })
  const scale = {
    value: {
      min:0,
      // max:6595332515097.74
      // max:70000000000000
    },
    asOfDate:{
      type: 'time',
      alias:'日期'
    }
  }

  return (
    <React.Fragment>
      <Chart padding="auto" scale={scale} height={500} data={props.somaHolDataList.rows} autoFit>
        <Tooltip shared />
        {/*<Area position="asOfDate*value" color="type" />*/}
        <Line shape="line" position="asOfDate*value" color="type" />
      </Chart>
    </React.Fragment>

  );
}


export const WeiChart = (props) => {
  const minVal = props.weiDatalist.min("value")
  const maxVal = props.weiDatalist.max("value")
  const last_two = props.weiDatalist.rows[props.weiDatalist.rows.length-2]
  const current = props.weiDatalist.rows[props.weiDatalist.rows.length-1]
  var flagStr = "▲"
  var flagClo = "#0B6121"
  if (current.value < last_two.value){
    flagStr = "▼"
    flagClo = "#FF0000"
  }


  for (var i=0; i<props.weiDatalist.rows.length;i++){
    if (props.weiDatalist.rows[i].value === minVal){
      var minTime = props.weiDatalist.rows[i].time
    }
    if (props.weiDatalist.rows[i].value === maxVal){
      var maxTime = props.weiDatalist.rows[i].time
    }
  }

  const scale = {
    value:{
      min: -15,
      max: 8,
      alias: '经济指数'
    },
    time:{
      tickCount:15,
    }
  }




  return (
    <div>
      <Chart padding={[10, 20, 70, 40]} scale={scale} autoFit height={500} data={props.weiDatalist.rows}>
        <Line shape="line" position="time*value" color="type" />
        <Annotation.DataMarker
          position={[current.time, current.value]}
          text={{
            content: flagStr + current.value,
            style: {
              textAlign: 'right',
              fontSize: 13,
              fill: flagClo,
            },
          }}
          line={{
            length: 20,
          }}
          direction="upward"
        />
        <Annotation.DataMarker
          position={[minTime, minVal]}
          text={{
            content: 'Low: ' + minVal,
            style: {
              textAlign: 'right',
              fontSize: 13
            },
          }}
          line={{
            length: 10,
          }}
          direction="downward"
        />
        <Annotation.DataMarker
          position={[maxTime, maxVal]}
          text={{
            content: 'Hi: ' + maxVal,
            style: {
              textAlign: 'left',
              fontSize: 13
            },
          }}
          line={{
            length: 20,
          }}
          direction="upward"
        />
        <Annotation.Line
          start={['min', 2]}
          end={['max', 2]}
          style={{
            lineDash: [4, 2],
            stroke: '#FF4D4F'
          }}
          text={{
            position: 'start',
            content: '2.00 ▼',
            style: {
              fill: '#FF4D4F'
            },
            offsetX: -20,
            offsetY: -5,
          }}
        />
        <Annotation.Line
          start={['min', -3.76]}
          end={['max', -3.76]}
          style={{
            lineDash: [4, 2],
            stroke: '#0080FF'
          }}
          text={{
            position: 'start',
            content: '-3.76 ▼',
            style: {
              fill: '#0080FF'
            },
            offsetX: -20,
            offsetY: -5,
          }}
        />
        <Annotation.Text {...CHART_COPYRIGHT}/>
      </Chart>
    </div>)
}