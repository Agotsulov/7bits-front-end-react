import { patch } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function patchTask(id, text) {
  return (dispatch) => {
    return patch('api/tasks/' + id,{
      text: text
    })
        .catch(error => {
          dispatch({
            type: types.ERROR,
            error: error
          });
        })
  }
}