import { combineReducers } from 'redux';

import doneTaskListReducer from './doneTaskListReducer';
import todoTaskListReducer from './todoTaskListReducer';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

export default (state = {}, action) => {
  return combineReducers({
    doneTaskListReducer,
    todoTaskListReducer,
    userReducer,
    taskReducer
  })(state, action)
}