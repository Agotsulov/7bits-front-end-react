import { postNoContent } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function addTask(text) {
  return (dispatch) => {
    return postNoContent('api/tasks',{
      text: text
    })
        .then(response => {
         dispatch({
           type: types.SUCCESS,
           location: response.headers.get("Location")
         })
        })
        .catch(error => {
          dispatch({
            type: types.ERROR,
            error: error
          });
        })
  }
}