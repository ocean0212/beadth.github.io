import React from 'react';
import {
  Chart,
  Facet, Axis,
} from 'bizcharts';
import * as constants from "../../constants";


export const ETFChart = (props) => {

  props.allETFDataView.transform({
    type: 'fold',
    fields: constants.US_ALL_ETF, // 展开字段集
    key: 'ETF', // key字段
    value: 'Close', // value字段
  })

  const minDay = props.allETFDataView.min("Date")
  const maxDay = props.allETFDataView.max("Date")
  const scale = {
    Date: {
      range:[0,1],
      ticks: [minDay, maxDay],
      alias:'日期'
    },
    Close:{
      alias: "收盘价"
    }
  }


  return (
    <React.Fragment>
      <Chart scale={scale} padding={[20, 20, 20, 20]} height={3000} data={props.allETFDataView.rows} forceFit={true}>
        <Axis name="day" label={null}/>
        <Facet
          fields={['ETF']}
          cols={3}
          type="list"
          padding={30}
          eachView={(view, facet)=>{
            view.line().position('Date*Close');
          }}
        />
      </Chart>
    </React.Fragment>

  );
}