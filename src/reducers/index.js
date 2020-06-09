import { combineReducers } from 'redux';
import counterReducer from './counter';
import loadingReducer from './loading';
import employeesReducer from './employees';
import toastReducer from  './toast'

const allRedeucers = combineReducers({
    counter : counterReducer,
    loading : loadingReducer,
    employees : employeesReducer,
    toast: toastReducer,
});

export default allRedeucers;
