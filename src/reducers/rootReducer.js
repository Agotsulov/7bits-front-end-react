import { combineReducers } from 'redux';

import { i18nReducer } from 'react-redux-i18n';

import doneTaskListReducer from './doneTaskListReducer';
import todoTaskListReducer from './todoTaskListReducer';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

export default (state = {}, action) => {
  return combineReducers({
    doneTaskListReducer,
    todoTaskListReducer,
    userReducer,
    taskReducer,
    i18n: i18nReducer
  })(state, action)
}