import { combineReducers } from 'redux';

import authReducer from './auth';
import menuReducer from './menu';
import sportsReducer from './sports';
import snackbarReducer from './snackbar';
import betReducer from './bet';

const reducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    sports: sportsReducer,
    snackbar: snackbarReducer,
    bet: betReducer
});

export default reducer;
