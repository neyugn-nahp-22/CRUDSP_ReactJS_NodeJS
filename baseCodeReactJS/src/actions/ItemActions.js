import { createAction } from "@reduxjs/toolkit";
import { actionType } from "../containers";

export const ItemAction = {
  getRequest: createAction(actionType.Items.GET_ITEMS_REQUEST),
  getSuccess: createAction(actionType.Items.GET_ITEMS_SUCCESS),
  getFailure: createAction(actionType.Items.GET_ITEMS_FAILURE),

  addRequest: createAction(actionType.Items.ADD_ITEMS_REQUEST),
  addSuccess: createAction(actionType.Items.ADD_ITEMS_SUCCESS),
  addFailure: createAction(actionType.Items.ADD_ITEMS_FAILURE),

  delRequest: createAction(actionType.Items.DEL_ITEMS_REQUEST),
  delSuccess: createAction(actionType.Items.DEL_ITEMS_SUCCESS),
  delFailure: createAction(actionType.Items.DEL_ITEMS_FAILURE),

  putRequest: createAction(actionType.Items.PUT_ITEMS_REQUEST),
  putSuccess: createAction(actionType.Items.PUT_ITEMS_SUCCESS),
  putFailure: createAction(actionType.Items.PUT_ITEMS_FAILURE),

  searchRequest: createAction(actionType.Items.SEARCH_ITEMS_REQUEST),
  searchSuccess: createAction(actionType.Items.SEARCH_ITEMS_SUCCESS),
  searchFailure: createAction(actionType.Items.SEARCH_ITEMS_FAILURE),
};
