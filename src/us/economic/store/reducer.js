import * as constants from './constants';
import { fromJS} from 'immutable';

const defaultState = fromJS({
  somaHolDataStatus: true,
  somaHolDataList: [{},],
});

const updateSomeHold = (state, action) => {
  return state.merge({
    somaHolDataStatus: action.somaHolDataStatus,
    somaHolDataList: action.somaHolDataList,
  })
}

// state    整个DOM的数据库
// action
// reducer 可以接收state，但是不可以在修改stacurrentCityte
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_NEWYORKFED_SOMA_HOLD:
      return updateSomeHold(state, action)
    default:
      return state;
  }
}


export default reducer;