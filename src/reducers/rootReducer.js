import { combineReducers } from 'redux';

import doneTaskListReducer from './doneTaskListReducer';
import todoTaskListReducer from './todoTaskListReducer';

export default (state = {}, action) => {
  return combineReducers({
    doneTaskListReducer,
    todoTaskListReducer
  })(state, action)
}