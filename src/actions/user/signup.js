import { postNoContentNoAuth } from "../../fetcher/fetcher";
import * as types from "./actionTypes";

export default function signup(login, password) {
  return (dispatch) => {
    return postNoContentNoAuth('http://localhost:8080/signup', {
      username: login,
      password: password
    })
        .then(() => {
          dispatch({
            type: types.SIGNUP_SUCCESS
          });
        })
        .catch(error => {
          dispatch({
            type: types.SIGNUP_FAIL,
            error: error
          });
        })
  }
}