import { combineReducers } from 'redux-immutable';
import { reducer as usReducer } from '../us/store';
import { reducer as usEconomicReducer } from '../us/economic/store';
import { reducer as usDashboardReducer } from '../us/dashboard/store';

const reducer = combineReducers({
	us: usReducer,
	usEconomic: usEconomicReducer,
	usDashboard: usDashboardReducer,
});

export default reducer;
