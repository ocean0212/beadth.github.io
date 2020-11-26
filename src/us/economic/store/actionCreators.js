import axios from "axios"
import Base64 from 'base-64';
import DataSet from '@antv/data-set';

import * as constants from './constants';


export const marketSomaHoldFormat = (srcData) => {
  console.log('func marketSomaHoldFormat')
  var data = JSON.parse(Base64.decode(srcData.data))
  var dataList = []
  console.log("marketSomaHoldFormat", data)
  for (var key in data){
    dataList.push(data[key])
  }
  const dv = new DataSet.DataView().source(dataList);
  return {
    type: constants.GET_NEWYORKFED_SOMA_HOLD,
    somaHolDataStatus: false,
    somaHolDataList: dv,
  }
};


export const getMarketSomaHold = () => {
  console.log('getMarketSomaHold actuon...')
  return (dispatch) => {
    console.log('ajax getMarketSomaHold')
    axios.get("us/newyorkfed_makert_hold.json").then((res) => {
      dispatch(marketSomaHoldFormat(res.data))
    }).catch(() => { // ajax request error
      console.log("error")
    })
  }
}