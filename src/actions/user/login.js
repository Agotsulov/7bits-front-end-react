import { post } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function login(login, password) {
  return (dispatch) => {
    return post('http://localhost:8080/signin', {
      username: login,
      password: password
    })
        .then(response => {
          localStorage.setItem('token', response.token);
          dispatch({
            type: types.AUTHORIZE_SUCCESS
          });
        })
        .catch(error => {
          dispatch({
            type: types.AUTHORIZE_FAIL,
            error: error
          });
        })
  }
}