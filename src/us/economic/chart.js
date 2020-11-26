import React from 'react';
import {
  Chart,
  Line,
  Tooltip,
} from 'bizcharts';

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
  console.log(props.somaHolDataList)

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