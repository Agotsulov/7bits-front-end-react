import * as types from '../actions/user/actionTypes';

const initialState = {
  authorized: !!localStorage.getItem('token'),
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHORIZE_SUCCESS: {
      return {
        ...state,
        authorized: true,
        error: null
      }
    }
    case types.AUTHORIZE_FAIL: {
      return {
        ...state,
        authorized: false,
        error: action.error
      }
    }
    case types.WHOAMI_SUCCESS: {
      return {
        ...state,
        error: null
      }
    }
    case types.AUTHENTICATE_FAIL: {
      return {
        ...state,
        authorized: false,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
}