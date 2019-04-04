import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTodoTaskList() {
  return (dispatch) => {
    return get('mockapi/getTodoTaskList.json')
        .then(response => {
          dispatch({
            type: types.GET_ITEM_LIST_SUCCESS,
            todoList: response.data
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