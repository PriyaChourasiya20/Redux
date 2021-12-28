import {combineReducers, createStore} from 'redux';
import counterReducer from './CounterReducer';

const AppReducer = combineReducers({
  counterReducer,
});

const rootReducer = (state, action) => {
  return AppReducer(state, action);
};
let store = createStore(rootReducer);

export default store;
