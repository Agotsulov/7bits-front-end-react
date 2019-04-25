import * as types from '../actions/user/actionTypes';

const initialState = {
  authorized: !!localStorage.getItem('token'),
  username: "",
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
        username: action.username,
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
    case types.SIGNUP_FAIL: {
      return {
        ...state,
        error: action.error
      }
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        error: null
      }
    }
    default: {
      return state;
    }
  }
}