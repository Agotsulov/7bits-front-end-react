import { combineReducers } from 'redux';

import doneTaskListReducer from './doneTaskListReducer';
import todoTaskListReducer from './todoTaskListReducer';
import userReducer from './userReducer';

export default (state = {}, action) => {
  return combineReducers({
    doneTaskListReducer,
    todoTaskListReducer,
    userReducer
  })(state, action)
}