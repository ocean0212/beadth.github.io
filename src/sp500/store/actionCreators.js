import axios from "axios"
import Base64  from 'base-64';
import * as constants from './constants';

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

  for ( var i=0; i<data.length; i++){
    dayList.push(data[i]['time'])
    var tmp = 0
    for (var key in data[i].data){
      tmp += data[i].data[key]['close']
      data[i][key] = data[i].data[key]['close'];
    }
    data[i]['TOTAL'] = tmp
    totalList.push(tmp)

    // var city = data[i].city;
    // if (city in result){
    //   result[city].push(data[i])
    // }else {
    //   result[city] = [data[i]]
    // }

  }
  // code list
  for (var k in data[0]){
    if (k !== "data"){
      codeList.push(k)
    }
  }
  return {
    type: constants.INIT_DATA_LIST,
    dataList: data,
    totalList: totalList,
    dayList: dayList,
    codeList: codeList,
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
    axios.get(url + "us/sp500_30.json").then((res) => {
      var data = Base64.decode(res.data.data)
      dispatch(InitDataList(JSON.parse(data).reverse())) // action change store
      }).catch(() => { // ajax request error
        console.log("error")
    })
  }
}