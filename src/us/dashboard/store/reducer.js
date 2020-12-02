import * as constants from './constants';
import { fromJS} from 'immutable';

const defaultState = fromJS({
  allETFStatus: true,
  allETFDataSet: [{},],
  allETFDataView: [{},],
});

const updateAllETF = (state, action) => {
  return state.merge({
    allETFStatus: action.allETFStatus,
    allETFDataSet: action.allETFDataSet,
    allETFDataView: action.allETFDataView,
  })
}



// state    整个DOM的数据库
// action
// reducer 可以接收state，但是不可以在修改stacurrentCityte
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_DASHBOARD_ETF_ALL:
      return updateAllETF(state, action)
    default:
      return state;
  }
}


export default reducer;