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
  var mv20CodeList = []
  var mv20DataList = []

  for (var mv20k in data[0].data){
    mv20CodeList.push(mv20k)
  }

  for ( var i=0; i<data.length; i++){
    for (var key in data[i].data){
      data[i][key] = data[i].data[key]['close'];
    }

    dayList.push(data[i]['time'])
    totalList.push(data[i]['TOTAL'])

    // var city = data[i].city;
    // if (city in result){
    //   result[city].push(data[i])
    // }else {
    //   result[city] = [data[i]]
    // }

  }

  for ( var j=0; j<data.length; j++){

    for ( var n=0;n<mv20CodeList.length; n++){
      mv20DataList.push([j,n ,data[j][mv20CodeList[n]]],)

    }
  }

  const mv20source = mv20DataList.map((arr) => {
    return {
      name: arr[0],
      day: arr[1],
      sales: arr[2],
    };
  });

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
    mv20CodeList: mv20CodeList,
    mv20DataList: mv20source,
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
      console.log(JSON.parse(data).reverse())
      dispatch(InitDataList(JSON.parse(data).reverse())) // action change store
      }).catch(() => { // ajax request error
        console.log("error")
    })
  }
}