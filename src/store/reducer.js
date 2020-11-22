import { combineReducers } from 'redux-immutable';
import { reducer as sp500Reducer } from '../us/store';

const reducer = combineReducers({
	// vipmap: vipmapReducer,
	us: sp500Reducer,
});

export default reducer;
