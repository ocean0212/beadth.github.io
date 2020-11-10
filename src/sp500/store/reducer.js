import * as constants from './constants';
import { fromJS} from 'immutable';
import {CHART_CODE_LIST} from "../../constants";

const defaultState = fromJS({
  dataList: [],
  totalLList: [],
  dayList: [],
  codeList: [],
  mv20CodeList: CHART_CODE_LIST,
  mv20DataList: [],
  chartList:[],
  breadthDays: 100,
  isLoading: true,
  lastBreadth: 0,
});


const changeCurrentCity = (state, action) => {
  var result = {
    "currentCity": action.currentCity,
    "currentZoom": action.currentZoom,
  }
  return state.merge(result)
}

const initDataList = (state, action) => {
  return state.merge({
    dataList: action.dataList,
    totalList: action.totalList,
    dayList:action.dayList,
    codeList:action.codeList,
    mv20CodeList:action.mv20CodeList,
    mv20DataList:action.mv20DataList,
    isLoading:action.isLoading,
    lastBreadth:action.lastBreadth,
  })
}

// state    整个DOM的数据库
// action
// reducer 可以接收state，但是不可以在修改stacurrentCityte

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_DATA_LIST:
      return initDataList(state, action)
    case constants.CHANGE_CURRENT_CITY:
      return changeCurrentCity(state, action)
    default:
      return state;
  }
}



export default reducer;