import axios from "axios"
import Base64  from 'base-64';
import * as constants from './constants';
import {CHART_CODE_LIST} from "../../constants";

export const changeCurrentCity = (city, zoom) => ({
  type: constants.CHANGE_CURRENT_CITY,
  currentCity: city,
  currentZoom: zoom,
})

export const InitDataList = (data) => {
  // 数据处理
  var dayList = [];
  var codeList = [];
  var totalList = [];
  var mv20CodeList = [];
  var mv20DataList = [];


  for ( var i=0; i<data.length; i++){
    for (var key in data[i].data){
      data[i][key] = data[i].data[key]['close'];
    }
    dayList.push(data[i]['time'])
    // totalList.push(data[i]['TOTAL'])
  }

  // table code list
  for (var tk in data[0]){
    if (tk !== "data"){
      codeList.push(tk)
    }
  }

  // chart code list
  for (var ck in data[0].data){
    mv20CodeList.push(ck)
  }
  // mv20CodeList.push("TOTAL")

  // mv20 chart data list
  for ( var j=0; j<CHART_CODE_LIST.length; j++){
    for ( var n=0;n<data.length; n++){
      mv20DataList.push([j,n ,data[n][CHART_CODE_LIST[j]]],)
    }
  }

  // total List
  for (var t=0; t< ['TOTAL'].length; t++){
    for ( var tn=0;tn<data.length; tn++){
      totalList.push([t,tn ,data[tn]['TOTAL']],)
    }
  }
  console.log(totalList)

  const mv20source = mv20DataList.map((arr) => {
    return {
      name: arr[0],
      day: arr[1],
      sales: arr[2],
    };
  });

  const mv20TotalSource = totalList.map((arr) => {
    return {
      name: arr[0],
      day: arr[1],
      sales: arr[2],
    };
  });

  return {
    type: constants.INIT_DATA_LIST,
    dataList: data,
    totalList: mv20TotalSource,
    dayList: dayList,
    codeList: codeList,
    mv20DataList: mv20source,
    isLoading: false,
  }};



export const changeCurrentZoom = (value) => ({
  type: constants.CHANGE_CURRENT_ZOOM,
  value,
})

// 使用了 redux-thunk 之后 返回可以是一个函数
export const getMtData = () => {
  return (dispatch) => { // dispatch: 如果action是函数的话会自动接收到dispatch方法
    // ajax request
    var url = window.location.href
    axios.get(url + "us/sp500_100.json").then((res) => {
      var data = Base64.decode(res.data.data)
      dispatch(InitDataList(JSON.parse(data))) // action change store
      }).catch(() => { // ajax request error
        console.log("error")
    })
  }
}