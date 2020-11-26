import { combineReducers } from 'redux-immutable';
import { reducer as usReducer } from '../us/store';
import { reducer as usEconomicReducer } from '../us/economic/store';

const reducer = combineReducers({
	us: usReducer,
	usEconomic: usEconomicReducer,
});

export default reducer;
