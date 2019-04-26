import { get } from "../../fetcher/fetcher";
import * as types from "./actionTypes";

export default function whoami() {
  return (dispatch) => {
    return get('http://localhost:8080/whoami')
        .then(response => {
          dispatch({
            type: types.WHOAMI_SUCCESS,
            username: response.username
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