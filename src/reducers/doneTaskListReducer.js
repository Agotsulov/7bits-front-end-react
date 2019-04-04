import * as types from '../actions/taskList/actionTypes';

const initialState = {
  doneList: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEM_LIST_SUCCESS: {
      return {
        ...state,
        doneList: action.doneList,
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
