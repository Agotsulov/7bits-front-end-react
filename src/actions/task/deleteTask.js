import { del } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function delTask(id) {
  return (dispatch) => {
    return del('api/tasks/' + id)
        .catch(error => {
          console.log(error);
          dispatch({
            type: types.ERROR,
            error: error
          });
        })
  }
}