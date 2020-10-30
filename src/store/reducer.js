import { combineReducers } from 'redux-immutable';
import { reducer as sp500Reducer } from '../sp500/store';

const reducer = combineReducers({
	// vipmap: vipmapReducer,
	sp500: sp500Reducer,
});

export default reducer;
