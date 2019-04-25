import * as types from '../actions/task/actionTypes';

const initialState = {
  location: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS: {
      return {
        ...state,
        location: action.location,
        error: null
      }
    }
    case types.ERROR: {
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