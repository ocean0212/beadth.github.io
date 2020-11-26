import * as constants from './constants';
import { fromJS} from 'immutable';
import {CHART_CODE_LIST, IS_LOADING_STRING} from "../../constants";

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
  isGetData: true,
  lastBreadth: 0,
  lastTime: IS_LOADING_STRING,
  BREADTH_DATE_RANGE: [],
});


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
    highBreadth: action.highBreadth,
    lowBreadth: action.lowBreadth,
    openBreadth: action.openBreadth,
    lastTime:action.lastTime,
    lineDataList:action.lineDataList,
    breadthChartHigh:action.breadthChartHigh,
    breadthDateRange:action.breadthDateRange,
  })
}

// state    整个DOM的数据库
// action
// reducer 可以接收state，但是不可以在修改stacurrentCityte

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_DATA_LIST:
      return initDataList(state, action)
    default:
      return state;
  }
}



export default reducer;