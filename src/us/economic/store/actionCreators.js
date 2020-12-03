import axios from "axios"
import Base64 from 'base-64';
import DataSet from '@antv/data-set';

import * as constants from './constants';


export const marketSomaHoldFormat = (srcData) => {
  var data = JSON.parse(Base64.decode(srcData.data))
  var dataList = []
  for (var key in data) {
    dataList.push(data[key])
  }
  const dv = new DataSet.DataView().source(dataList);
  return {
    type: constants.GET_NEWYORKFED_SOMA_HOLD,
    somaHolDataStatus: false,
    somaHolDataList: dv,
  }
};

export const weiFormat = (srcData) => {
  var data = JSON.parse(Base64.decode(srcData.data))
  var dataList = []
  for (var key in data) {
    var item = {}
    item.time = key
    item.value = data[key]
    dataList.push(item)
  }

  const dv = new DataSet.DataView().source(dataList);
  return {
    type: constants.GET_NEWYORKFED_WEI,
    weiStatus: false,
    weiDatalist: dv,
  }
};

export const OliCopperGoldRatioFormat = (srcData) => {
  var data = JSON.parse(Base64.decode(srcData.data));
  const dv = new DataSet.DataView().source(data);
  return {
    type: constants.GET_OLI_COPPER_GOLD_RATIO,
    OliCopperGoldRatioStatus: false,
    OliCopperGoldRatioData: dv,
  }
}

export const geNewyorktWei = () => {
  return (dispatch) => {
    axios.get("us/newyorkfed_wei.json").then((res) => {
      dispatch(weiFormat(res.data))
    }).catch(() => { // ajax request error
      console.log("error")
    })
  }
}


export const getMarketSomaHold = () => {
  return (dispatch) => {
    axios.get("us/newyorkfed_makert_hold.json").then((res) => {
      dispatch(marketSomaHoldFormat(res.data))
    }).catch(() => { // ajax request error
      console.log("error")
    })
  }
}

export const getOliCopperGoldRatio = () => {
  return (dispatch) => {
    axios.get("us/oli_copper_gold_ratio_5.json").then((res) => {
      dispatch(OliCopperGoldRatioFormat(res.data))
    }).catch(() => { // ajax request error
      console.log("error")
    })
  }
}