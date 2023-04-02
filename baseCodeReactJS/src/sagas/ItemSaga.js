import { put, takeLatest, select } from "@redux-saga/core/effects";
import { ItemAction } from "../actions/ItemActions";
import { itemApi } from "../api";
import { actionType, LIMIT } from "../containers";

function* handleGetItem() {
  try {
    const res = yield itemApi.getItem(null, null, null); //param , query , data
    yield put(
      ItemAction.getSuccess({
        listData: res.listData,
      })
    );
  } catch (error) {
    yield put(
      ItemAction.getFailure({
        message: error.message,
      })
    );
  }
}

function* handleAddItem({ payload }) {
  try {
    yield itemApi.addItem(null, null, payload);
    yield put(ItemAction.addSuccess());
    yield put(ItemAction.getRequest());
  } catch (error) {
    yield put(ItemAction.addFailure({ message: error.message }));
  }
}

function* handleDelItem({ payload }) {
  try {
    yield itemApi.delItem({ id: payload.id }, null, payload);
    yield put(ItemAction.delSuccess());
    yield put(ItemAction.getRequest());
  } catch (error) {
    yield put(ItemAction.delFailure({ message: error.message }));
  }
}

function* handlePutItem({ payload }) {
  try {
    yield itemApi.putItem({ id: payload.id }, null, payload);
    yield put(ItemAction.putSuccess());
    yield put(ItemAction.getRequest());
  } catch (error) {
    yield put(ItemAction.putFailure({ message: error.message }));
  }
}

function* handleSearchItem({ payload }) {
  try {
    const res = yield itemApi.searchItem(null, { nameSearch: `${payload.nameSearch}` }, payload);
    yield put(
      ItemAction.searchSuccess({
        listData: res.listData,
        nameSearch: payload.nameSearch,
      })
    );
  } catch (error) {
    yield put(ItemAction.searchFailure({ message: error.message }));
  }
}

const itemSaga = [
  takeLatest(actionType.Items.GET_ITEMS_REQUEST, handleGetItem),
  takeLatest(actionType.Items.ADD_ITEMS_REQUEST, handleAddItem),
  takeLatest(actionType.Items.DEL_ITEMS_REQUEST, handleDelItem),
  takeLatest(actionType.Items.PUT_ITEMS_REQUEST, handlePutItem),
  takeLatest(actionType.Items.SEARCH_ITEMS_REQUEST, handleSearchItem),
];
export default itemSaga;
