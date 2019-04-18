import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getDoneTaskList() {
  return (dispatch) => {
    return get('api/tasks?status=done')
        .then(response => {
          console.log(response);
          dispatch({
            type: types.GET_ITEM_LIST_SUCCESS,
            doneList: response.tasks
          });
        })
        .catch(error => {
          dispatch({
            type: types.GET_ITEM_LIST_ERROR,
            error: error
          });
        })
  }
}