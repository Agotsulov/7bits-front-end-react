import { post } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function login(login, password) {
  return (dispatch) => {
    return post('http://localhost:8080/signin', {
      login: login,
      password: password
    })
        .then(response => {
          console.log("asdasdas");
          localStorage.setItem('token', "312312312321312");
          dispatch({
            type: types.AUTHORIZE_SUCCESS
          });
        })
        .catch(error => {
          console.log('error')
          dispatch({
            type: types.AUTHORIZE_FAIL,
            error: error
          });
        })
  }
}