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

  const scale = {
    value:{
      min: -15,
      alias: '经济指数'
    },
    time:{
      tickCount:15,
    }
  }

  return (
    <div>
      <Chart padding={[10, 20, 70, 40]} scale={scale} autoFit height={300} data={props.weiDatalist.rows}>
        <Line shape="line" position="time*value" color="type" />
        <Annotation.Text {...CHART_COPYRIGHT}/>
      </Chart>
    </div>)
}