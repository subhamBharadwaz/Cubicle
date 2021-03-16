import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';
import todoReducer from './todoReducer';
import expenseReducer from './expenseReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
  todoList: todoReducer,
  expenses: expenseReducer,
  alert: alertReducer,
  auth: authReducer,
});

export default rootReducer;
