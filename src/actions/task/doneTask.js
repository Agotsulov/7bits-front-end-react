import { patch } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function doneTask(id) {
  return (dispatch) => {
    return patch('api/tasks/' + id,{
      status: 'done'
    })
        .catch(error => {
          dispatch({
            type: types.ERROR,
            error: error
          });
        })
  }
}