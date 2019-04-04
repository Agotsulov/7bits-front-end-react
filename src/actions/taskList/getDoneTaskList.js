import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getDoneTaskList() {
  return (dispatch) => {
    return get('mockapi/getDoneTaskList.json')
        .then(response => {
          dispatch({
            type: types.GET_ITEM_LIST_SUCCESS,
            doneList: response.data
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