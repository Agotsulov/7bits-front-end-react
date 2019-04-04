import * as types from '../actions/taskList/actionTypes';

const initialState = {
  todoList: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEM_LIST_SUCCESS: {
      return {
        ...state,
        todoList: action.todoList,
        error: null
      }
    }
    case types.GET_ITEM_LIST_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
}
